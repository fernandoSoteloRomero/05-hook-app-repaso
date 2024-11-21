import { ReactNode } from "react";
import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Fernando Sotelo",
  email: "email@gmail.com",
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
