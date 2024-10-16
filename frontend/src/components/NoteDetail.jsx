import moment from "moment";

const NoteDetail = ({ note }) => {
  return (
    <div className="not-detay">
      <h4>{note.title}</h4>
      <p>{note.description}</p>
      <p>{moment(note.createdAt).fromNow()}</p>
    </div>
  );
};

export default NoteDetail;
