import useInput from "../hook/useInput";
import React from "react";
import { DataBase, event } from "../model/DataBase";
interface Props {
  todos: DataBase[];
  setTodos: (todos: DataBase[]) => void;
}

const Input: React.FC<Props> = ({ todos, setTodos }) => {
  const [title, setTitle] = useInput("");
  const [contents, setContents] = useInput("");
  const postHandleButton = (e: event) => {
    e.preventDefault();
    const newTodo: DataBase = {
      id: crypto.randomUUID(),
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
        <input type="text" value={title} onChange={setTitle} />
        <input type="text" value={contents} onChange={setContents} />

        <button>입력</button>
      </form>
    </div>
  );
};

export default Input;
