import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { useContext } from "react";
import { AuthContext } from "@contexts/AuthContext";

export function Routes() {
  const contextData = useContext(AuthContext);
  console.log("user", contextData);
  return (
    <NavigationContainer>
      <AuthRoutes />
      {/* <AppRoutes /> */}
    </NavigationContainer>
  );
}
