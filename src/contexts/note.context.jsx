import { createContext, useState } from "react";

const NoteContext = createContext();

function NoteProviderWrapper(props) {
    // Variables - Estado
    const noteList = [
        {
            id: 1,
            title: "Ir a casa de mi amigo",
            marked: false
        },
        {
            id: 2,
            title: "Dar de comer a los gatos",
            marked: false
        }, {
            id: 3,
            title: "Limpiar el cuarto del departamento",
            marked: false
        }, {
            id: 4,
            title: "Realizar ejercicios todos los dias",
            marked: false
        }
    ];

    const [notes, setNotes] = useState(noteList);

    // Funciones
    const updateNotes = (update) => {
        const arrayNotes = notes.map((note) => {
            if (note.id !== update.id) {
                return note;
            } else {
                return update;
            }

        })

        setNotes(arrayNotes);
    }

    const addNote = (newNote) => {
        setNotes([newNote, ...notes]);
    }



    return (
        <NoteContext.Provider value={{ notes, setNotes, updateNotes, addNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export { NoteContext, NoteProviderWrapper };