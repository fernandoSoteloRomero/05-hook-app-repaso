export type Todo = {
  id: number;
  desc: string;
  done: boolean;
};

type State = Todo[];

type Action =
  | { type: "add"; payload: Todo }
  | { type: "delete"; payload: number }
  | { type: "toggle"; payload: number }
  | { type: "get" };

export const todoReducer = (initialState: State, action: Action): State => {
  switch (action.type) {
    case "add":
      return [...initialState, action.payload];

    case "delete":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "toggle":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
