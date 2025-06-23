import React from "react";

const Message = ({ msg, bgColor }) => {
  let styles = {
    padding: "0.8rem",
    marginBottom: "0.8rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#00cc66",
    fontFamily: "'Inter', sans-serif",
  };
  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
