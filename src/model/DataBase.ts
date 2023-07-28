export type Todo = {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
};

export type event = React.FormEvent<HTMLFormElement>;

export type eventChange = React.ChangeEvent<HTMLInputElement>;

export type Props = {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
};
