import { useState, useEffect } from "react";
import JournalList from "./components/JournalList";
import JournalForm from "./components/JournalForm";
import Loading from "./components/Loading";
import "./css/App.css";

function App() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // simulate slow fetch
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          const enrichedData = data.map((entry) => ({
            ...entry,
            important: false,
          }));
          setEntries(enrichedData);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }, 600); // 500ms delay
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
        <Loading message="Loading journal entries..." />
      ) : (
        <JournalList entries={entries} toggleImportant={toggleImportant} />
      )}
    </div>
  );
}

export default App;
