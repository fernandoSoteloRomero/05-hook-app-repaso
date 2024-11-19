export type Todo = {
  id: number;
  desc: string;
  done: boolean;
};

interface Props {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onToggleTodo: (id:number) => void;
}

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }: Props) => {
  return (
    <li
      className="list-group-item d-flex justify-content-between"
      onClick={() => onToggleTodo(todo.id)}
    >
      <span className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}> {todo.desc} </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
