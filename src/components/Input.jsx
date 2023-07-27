import useInput from "../hook/useInput";
import React from "react";
function Input({ todos, setTodos }) {
  const [title, setTitle] = useInput("");
  const [contents, setContents] = useInput("");
  const postHandleButton = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID,
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };
  return (
    <div>
      <form onSubmit={postHandleButton}>
        <input value={title} onChange={setTitle} />
        <input value={contents} onChange={setContents} />
        <button>입력</button>
      </form>
    </div>
  );
}

export default Input;
