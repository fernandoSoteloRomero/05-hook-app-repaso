import { FormEvent } from "react";
import { useForm } from "../../hooks";

export type Todo = {
  id: number;
  desc: string;
  done: boolean;
};

interface Props {
  onAddNewTodo: (todo: Todo) => void;
}

export const TodoAdd = ({ onAddNewTodo }: Props) => {
  const { newTodo, handleInputChange, resetForm } = useForm({
    newTodo: "",
  });

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newTodo) {
      return;
    }

    onAddNewTodo({
      id: new Date().getTime() + 100,
      desc: newTodo,
      done: false,
    });
    resetForm();
  };

  return (
    <form onSubmit={(e) => addNewTodo(e)}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="newTodo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-2">
        Agregar
      </button>
    </form>
  );
};
