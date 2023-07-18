import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loading } from "@components/Loading";
import React from "react";
import { Routes } from "@routes/index";
import { AuthContext } from "@contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider
        value={{
          user: { id: "1", name: "Lucca", email: "luccahora@gmail.com" },
        }}
      >
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}
