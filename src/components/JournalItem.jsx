function JournalItem({ entry, toggleImportant }) {
  return (
    <div className={`journal-card ${entry.important ? "important" : ""}`}>
      <h3>
        {entry.title}
        <button
          onClick={() => toggleImportant(entry.id)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          {entry.important ? "⭐" : "☆"}
        </button>
      </h3>
      <p>{entry.body}</p>
    </div>
  );
}

export default JournalItem;
