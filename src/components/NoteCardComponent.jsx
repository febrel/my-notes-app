import React, { useContext } from "react";
import "./NoteCardComponent.css";
import { NoteContext } from "../contexts/note.context";

function NoteCardComponent({ note }) {

    // Contexto retorno
    const { updateNotes } = useContext(NoteContext);

    // Funciones
    const handleInput = (e) => {
        const updateN = { ...note, title: e.target.value };
        updateNotes(updateN);
    }

    const handleChek = (e) => {
        const updateN = { ...note, marked: !note.marked };
        updateNotes(updateN);
    }

    return (
              
             <article className={`note ${note.marked ? 'marked' : ''}`}>
            <div className="title-note">
                <input type="checkbox" checked={note.marked} onChange={handleChek} />
            </div>

            <div className="cuerpo-note" >
                <input type="text" className="card-title" value={note.title} onChange={handleInput} />
            </div>

        </article>
    )
}

export default NoteCardComponent;