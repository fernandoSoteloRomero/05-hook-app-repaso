import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export type Todo = {
  id: number;
  desc: string;
  done: boolean;
};

const initialState: Todo[] = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || "[]");
  }, [todos]);

  const onAddNewTodo = (todo: Todo) => {
    dispatch({
      type: "add",
      payload: todo,
    });
  };

  const onDeleteTodo = (id: number) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  const onToggleTodo = (id: number) => {
    dispatch({
      type: "toggle",
      payload: id,
    });
  };

  return {
    onAddNewTodo,
    onDeleteTodo,
    onToggleTodo,
    todos,
  };
};
