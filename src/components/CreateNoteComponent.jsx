import React, { useContext, useState } from "react";
import { NoteContext } from "../contexts/note.context";
import "./CreateNoteComponent.css";

function CreateNoteComponent() {
    // Context retorno
    const { addNote } = useContext(NoteContext);

    // Variables de estado
    const [noteTitle, setNoteTitle] = useState("");

    // Funciones
    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!noteTitle) {
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