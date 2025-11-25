function Loading({ message = "Loading..." }) {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontSize: "18px" }}>
      <p>{message}</p>
    </div>
  );
}

export default Loading;
