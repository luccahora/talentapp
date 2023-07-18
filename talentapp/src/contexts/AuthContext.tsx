import { createContext } from "react";
import { UserDTO } from "src/dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);
