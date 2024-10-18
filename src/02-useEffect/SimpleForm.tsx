import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "fernando@g.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   console.log("email changed");
  // }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
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
        type="email"
        className="form-control mt-2"
        placeholder="fernando@g.com"
        name="email"
        value={email}
        onChange={(e) => handleInputChange(e)}
      />
      {username === "strider2" && <Message />}
    </>
  );
};
