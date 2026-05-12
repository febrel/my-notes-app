import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotesPage from "./pages/NotesPage";
import "./App.css";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>

    </>
  )
}

export default App;
