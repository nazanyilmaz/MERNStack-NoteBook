import { useEffect, useState } from "react";
import NoteDetail from "../components/NoteDetail";
import NoteForm from "../components/NoteForm";

const Home = () => {
  const [notes, setNotes] = useState(null);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch("/api/notes");

      const json = await response.json();
      if (response.ok) {
        setNotes(json);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="home">
      <div className="not-form">
        <NoteForm />
      </div>
      <div className="notlar">
        {notes &&
          notes?.map((note) => <NoteDetail key={note._id} note={note} />)}
      </div>
    </div>
  );
};

export default Home;
