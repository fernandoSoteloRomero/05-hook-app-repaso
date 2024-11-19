import { TodoItem } from "./TodoItem";

export type Todo = {
  id: number;
  desc: string;
  done: boolean;
};

type Props = {
  todos: Todo[];
  onDeleteTodo: (id:number) => void;
  onToggleTodo: (id:number) => void;
};

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: Props) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
      ))}
    </ul>
  );
};
