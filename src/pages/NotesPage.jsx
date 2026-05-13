import React, { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { NoteContext } from "../contexts/note.context";
import NoteCardComponent from "../components/NoteCardComponent";
import CreateNoteComponent from "../components/CreateNoteComponent";
import "./NotesPage.css";

function NotesPage() {
    // Contexto list retorno
    const { notes } = useContext(NoteContext);

    const noteCard = notes.map((note) => {
        return (
            <li key={note.id}>
                <NoteCardComponent note={note} />
            </li>
        )
    })

    return (
        <>
            <HeaderComponent />

            <h2>Notes</h2>
            <CreateNoteComponent />
            
            <ul className="container-notes">

                {noteCard}
            </ul>
        </>

    )
}

export default NotesPage;