import JournalItem from "./JournalItem";

function JournalList({ entries, toggleImportant }) {
  if (entries.length === 0) return <p>No journal entries yet!</p>;

  return (
    <div className="journal-list">
      {entries.map((entry) => (
        <JournalItem
          key={entry.id}
          entry={entry}
          toggleImportant={toggleImportant}
        />
      ))}
    </div>
  );
}

export default JournalList;
