import React from "react";
import { styled } from "styled-components";
import { DataBase } from "../model/DataBase";
interface Props {
  todos: DataBase[];
  setTodos: (todos: DataBase[]) => void;
  listIsDone: boolean;
}
const TodoList: React.FC<Props> = ({ todos, setTodos, listIsDone }) => {
  const cancelHandleButton = (id: string) => {
    const updateTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTodos(updateTodos);
  };
  const deleteHandleButton = (id: string) => {
    const deleteTodos = todos.filter((item) => item.id !== id);
    setTodos(deleteTodos);
  };
  return (
    <>
      <div>
        <h2>{listIsDone ? "완료 목록" : "할 일 목록"} </h2>
        {todos
          .filter((item) => item.isDone === listIsDone)
          .map((item) => {
            return (
              <>
                <Stdiv key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.contents}</p>
                  <p> 완료 여부 {item.isDone.toString()}</p>
                  <button onClick={() => cancelHandleButton(item.id)}>
                    {listIsDone ? "완료 취소" : "완료"}
                  </button>
                  <button onClick={() => deleteHandleButton(item.id)}>
                    삭제
                  </button>
                </Stdiv>
              </>
            );
          })}
      </div>
    </>
  );
};

export default TodoList;

const Stdiv = styled.div`
  border: 1px solid black;
  padding-left: 10px;
  padding-bottom: 10px;
  margin: 10px;
`;