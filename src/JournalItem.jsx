function JournalItem({ entry, toggleImportant }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        backgroundColor: entry.important ? "#fff9c4" : "white",
      }}
    >
      <h3>
        {entry.title}{" "}
        <button onClick={() => toggleImportant(entry.id)}>
          {entry.important ? "⭐" : "☆"}
        </button>
      </h3>
      <p>{entry.body}</p>
    </div>
  );
}

export default JournalItem;
