import { createContext, useState, useEffect, useCallback } from "react";
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';

const NoteContext = createContext();

function NoteProviderWrapper(props) {
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Variables - Estado
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const [notes, setNotes] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const API_URL = "https://ca9414904161f8013873.free.beeceptor.com/api/notes";


    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Funciones
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const getNotes = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setNotes(data.reverse());
            setHasError(false);
            setLoaded(true);

        } catch (error) {
            console.log(error);
            setHasError(true);
            setLoaded(false);
        }
    }

    const deleteNote = async (noteId) => {
        // Para que la pantalla cambie al instante
        const filteredNotes = notes.filter(note => note.id !== noteId);
        setNotes(filteredNotes);

        try {
            await fetch(`${API_URL}/${noteId}`, {
                method: "DELETE",
            });
            toast.success("Nota eliminada!");
            setHasError(false);
        } catch (error) {
            console.error(error);
            toast.error("Hubo un error al eliminar la nota.");
            setHasError(true);
            setNotes(notes);
        }
    };


    const updateNote = async (update) => {

        // Para que la pantalla cambie al instante
        const arrayNotes = notes.map((note) => {
            if (note.id !== update.id) {
                return note;
            } else {
                return update;
            }
        });

        setNotes(arrayNotes);

        try {
            await fetch(`${API_URL}/${update.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(update)
            });

            DebouncedSucces("Nota actualizada exitosamente!")
            // toast.success("Nota actualizada exitosamente!");
            setHasError(false);
            setLoaded(true);
        } catch (error) {
            console.log(error);
            toast.error("Hubo un error al actualizar la nota.");
            setHasError(true);
            setLoaded(false);
        }
    }


    const addNote = async (newNote) => {
        try {
            await fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(newNote)
            })
            setNotes([newNote, ...notes]);
        } catch (error) {
            console.log(error)
            toast.error("Error al añadir nota.");
        }

    }

    const DebouncedSucces = useCallback(
        debounce((text) => {
            toast.success(`${text}`, { toastId: 'input-toast' });
        }, 500),
        []
    );

    const DebouncedError = useCallback(
        debounce((text) => {
            toast.error(`${text}`, { toastId: 'input-toast' });
        }, 500),
        []
    );


    return (
        <NoteContext.Provider value={{ notes, hasError, loaded, getNotes, setNotes, updateNote, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper };