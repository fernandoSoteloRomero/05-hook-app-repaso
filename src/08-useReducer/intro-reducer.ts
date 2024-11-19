const initialState = [
  {
    id: 1,
    todoDescription: "Recolectar la piedra del Alma",
    done: false,
  },
];

interface Todo {
  id: number;
  todoDescription: string;
  done: boolean;
}

interface Action {
  type: string;
  payload: Todo;
}

const todoReducer = (state = initialState, action: Action) => {
  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }

  return state;
};

const newTodo = {
  id: 2,
  todoDescription: "Recolectar la piedra del Poder",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

const todos = todoReducer(initialState, addTodoAction);

console.log(todos);
