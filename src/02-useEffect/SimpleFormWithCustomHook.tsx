import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

interface FormState {
  username: string;
  email: string;
  password: string;
}

export const SimpleFormWithCustomHook = () => {
  const { email, password, username, handleInputChange, resetForm } =
    useForm<FormState>({
      username: "",
      email: "",
      password: "",
    });

  // const {username, email, password} = formState;

  return (
    <>
      <h1>Simple Form with custom hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={(e) => handleInputChange(e)}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => handleInputChange(e)}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@g.com"
        name="email"
        value={email}
        onChange={(e) => handleInputChange(e)}
      />
      {username === "strider2" && <Message />}

      <button onClick={resetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
