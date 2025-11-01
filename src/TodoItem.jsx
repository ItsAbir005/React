import React from "react";

function TodoItem({ text }) {
  console.log("Child Rendered:", text); // Proof of render in console

  return <li>{text}</li>;
}

export default React.memo(TodoItem);
