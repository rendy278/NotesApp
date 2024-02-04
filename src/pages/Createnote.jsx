import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import UseCreateDate from "../Components/UseCreateDate";

const Createnote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const date = UseCreateDate();
      const note = { id: date, title, details };
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate("/");
    }
  };

  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack /> Back
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note__form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          value={title}
        />
        <textarea
          cols="28"
          placeholder="Note Details...."
          onChange={(e) => setDetails(e.target.value)}
          value={details}
        ></textarea>
      </form>
    </section>
  );
};

export default Createnote;
