function Loading({ message = "Loading..." }) {
  return (
    <div style={{
      textAlign: "center",
      padding: "50px",
      fontSize: "18px",
      fontWeight: "bold"
    }}>
      {message}
    </div>
  );
}

export default Loading;
