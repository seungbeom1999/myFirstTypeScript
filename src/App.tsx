import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { Todo } from "./model/DataBase";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "1",
      title: "제목1",
      contents: "내용1",
      isDone: false,
    },
    {
      id: "2",
      title: "제목2",
      contents: "내용2",
      isDone: false,
    },
    {
      id: "3",
      title: "제목3",
      contents: "내용3",
      isDone: true,
    },
    {
      id: "4",
      title: "제목4",
      contents: "내용4",
      isDone: false,
    },
  ]);

  return (
    <div>
      <StHeader>헤더입니다.</StHeader>
      <StMain>
        <Input todos={todos} setTodos={setTodos} />
        <div>
          <TodoList todos={todos} setTodos={setTodos} listIsDone={false} />
          <TodoList todos={todos} setTodos={setTodos} listIsDone={true} />
        </div>
      </StMain>
      <StFooter>푸터입니다.</StFooter>
    </div>
  );
}

export default App;

const StHeader = styled.header`
  background-color: #f7e9c3;
  padding: 10px;
`;

const StMain = styled.main`
  background-color: #d9f7c3;
  padding: 10px;
`;

const StFooter = styled.footer`
  background-color: #c3e9f7;
  padding: 10px;
`;
