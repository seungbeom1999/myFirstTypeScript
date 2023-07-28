import useInput from "../hook/useInput";
import React from "react";
import { Props, Todo, event } from "../model/DataBase";
interface TodoProps extends Props {}

const Input: React.FC<TodoProps> = ({ todos, setTodos }) => {
  const [title, setTitle, fixTitle] = useInput("");
  const [contents, setContents, fixContents] = useInput("");
  const postHandleButton = (e: event) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    fixTitle("");
    fixContents("");
  };
  return (
    <div>
      <form onSubmit={postHandleButton}>
        타이틀: <input type="text" value={title} onChange={setTitle} /> <br />
        내용: <input type="text" value={contents} onChange={setContents} />
        <br />
        <button>입력</button>
      </form>
    </div>
  );
};

export default Input;
