import React, { useContext, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { NoteContext } from "../contexts/note.context";
import NoteCardComponent from "../components/NoteCardComponent";
import CreateNoteComponent from "../components/CreateNoteComponent";
import { ToastContainer } from 'react-toastify';
import "./NotesPage.css";

function NotesPage() {
    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Variables - Estado - Contexto
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
    const { notes, getNotes, hasError, loaded } = useContext(NoteContext);

    useEffect(() => {
        getNotes();
    }, [])

    /*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
        Funciones
    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::*/
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
                {hasError ? (<h2>No se han podido obtener las notas</h2>) : !loaded ? (<h2>Cargando...</h2>) : (noteCard)}
            </ul>
             <ToastContainer />
        </>

    )
}

export default NotesPage;