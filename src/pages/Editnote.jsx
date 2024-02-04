import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import UseCreateDate from "../Components/UseCreateDate";

const Editnote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = UseCreateDate();
  const navigate = useNavigate();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details };
      const newNotes = notes.map((item) => (item.id === id ? newNote : item));

      setNotes(newNotes);
      navigate("/");
    }
  };

  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  const confirmDelete = () => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
    navigate("/");
    setShowDeleteAlert(false);
  };

  const cancelDelete = () => {
    setShowDeleteAlert(false);
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="28"
          placeholder="Note Details...."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>

      {/* Delete Confirmation Alert */}
      {showDeleteAlert && (
        <div className="delete-alert">
          <p>Are you sure you want to delete this note?</p>
          <div className="button-container">
            <button className="delete-button" onClick={confirmDelete}>
              Delete
            </button>
            <button className="cancel-button" onClick={cancelDelete}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Editnote;
