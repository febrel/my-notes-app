import React, { useContext } from "react";
import { toast } from 'react-toastify';
import { NoteContext } from "../contexts/note.context";
import "./NoteCardComponent.css";

function NoteCardComponent({ note }) {
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Variables - Estado - Contexto
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const { updateNote, deleteNote } = useContext(NoteContext);


    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Funciones
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const handleInput = (e) => {
        const trimmedTitle = e.target.value.trim();

        if (!trimmedTitle) {
            toast.error("El título de la nota no puede estar vacío.");
            return;
        }

        const updateN = { ...note, title: e.target.value };
        updateNote(updateN);
    }

    const handleChek = (e) => {
        const updateN = { ...note, marked: !note.marked };
        updateNote(updateN);
    }

    const handleClick = (id) => {
        deleteNote(id);
    }

    return (

        <article className={`note ${note.marked ? 'marked' : ''}`}>
            <div className="title-note">
                <span className="borrar" onClick={() => handleClick(note.id)}>x</span>
                <input type="checkbox" checked={note.marked} onChange={handleChek} />

            </div>

            <div className="cuerpo-note" >
                <input type="text" className="card-title" value={note.title} onChange={handleInput} />
            </div>

        </article>
    )
}

export default NoteCardComponent;