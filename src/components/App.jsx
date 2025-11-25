import { useState, useEffect } from "react";
import JournalList from "./components/JournalList";
import JournalForm from "./JournalForm";

function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // add important flag to each entry
        const enrichedData = data.map((entry) => ({ ...entry, important: false }));
        setEntries(enrichedData);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleForm = () => setShowForm(!showForm);

  const addEntry = (newEntry) => {
    setEntries([newEntry, ...entries]);
  };

  const toggleImportant = (id) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, important: !entry.important } : entry
      )
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>My Journal</h1>
      <button onClick={toggleForm} style={{ marginBottom: "20px" }}>
        {showForm ? "Close Form" : "Add New Entry"}
      </button>

      {showForm && <JournalForm addEntry={addEntry} />}

      {loading ? (
        <p>Loading journal entries...</p>
      ) : (
        <JournalList entries={entries} toggleImportant={toggleImportant} />
      )}
    </div>
  );
}

export default App;
