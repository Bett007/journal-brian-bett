import { useState } from "react";

function JournalForm({ addEntry }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert("Both title and body are required!");
      return;
    }

    setSubmitting(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => res.json())
      .then((data) => {
        addEntry({ ...data, important: false });
        setTitle("");
        setBody("");
        setSubmitting(false);
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
      </div>
      <div>
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ width: "100%", marginBottom: "10px", padding: "8px" }}
        />
      </div>
      <button type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Add Entry"}
      </button>
    </form>
  );
}

export default JournalForm;
