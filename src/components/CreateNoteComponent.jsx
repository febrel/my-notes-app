import React, { useContext, useState, useCallback } from "react";
import { NoteContext } from "../contexts/note.context";
import { toast } from 'react-toastify';
import debounce from 'lodash.debounce';
import "./CreateNoteComponent.css";

function CreateNoteComponent() {
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Variables - Estado - Contexto
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const { addNote } = useContext(NoteContext);
    const [noteTitle, setNoteTitle] = useState("");

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Funciones
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    const DebouncedError = useCallback(
        debounce((text) => {
            toast.error(`${text}`, { toastId: 'input-toast' });
        }, 500),
        []
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTitle = noteTitle.trim();

        if (!trimmedTitle) {
            DebouncedError("El título de la nota no puede estar vacío.");
            return;
        }

        const newNote = {
            id: createId(),
            title: noteTitle,
            marked: false
        }

        addNote(newNote);
        setNoteTitle(""); // reset variable
    }


    const handleInput = (e) => {
        setNoteTitle(e.target.value);
    }



    return (
        <div className="container-input">
            <form className="note-form" onSubmit={handleSubmit}>
                <input type="text" className="note-title" placeholder="Nueva nota" value={noteTitle} onChange={handleInput} />
                <button className="create-btn">+</button>
            </form>
        </div>
    )
}

export default CreateNoteComponent;