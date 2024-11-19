import { TodoList } from "./todoList/TodoList";
import { TodoAdd } from "./todoAdd/TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const { onAddNewTodo, onDeleteTodo, onToggleTodo, todos } = useTodo();

  return (
    <>
      <h1>
        TodoApp (10), <small>pendientes: 2</small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onAddNewTodo={onAddNewTodo} />
        </div>
      </div>
    </>
  );
};
