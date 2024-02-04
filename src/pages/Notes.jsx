import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import NoteItem from "../Components/NoteItem";
import { Link } from "react-router-dom";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);
  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(handleSearch, [text]);
  return (
    <section className="notes">
      <header className="notes__header">
        {!showSearch && <h2 className="logo">My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            autoFocus
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button
          className="btn"
          onClick={() => setShowSearch((prevSate) => !prevSate)}
        >
          {showSearch ? <MdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
        <Link to="/create-note" className="btn add__button">
          <BsPlusLg /> New Note
        </Link>
      </div>
    </section>
  );
};

export default Notes;
