import { ReactNode, createContext, useState } from "react";
import { findUserByEmail } from "../database/realm";
import { UserDTO } from "src/dtos/UserDTO";
import { Alert } from "react-native";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  function signIn(email: string, password: string) {
    const user = findUserByEmail(email);
    if (user && user.password === password) {
      console.log("Login successful", user);
      setUser(user);
    } else {
      Alert.alert("Login failed");
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
