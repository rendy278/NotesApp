import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import Createnote from "./pages/Createnote";
import Editnote from "./pages/Editnote";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Notes notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/create-note"
            element={<Createnote setNotes={setNotes} />}
          />
          <Route
            path="/edit-note/:id"
            element={<Editnote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
