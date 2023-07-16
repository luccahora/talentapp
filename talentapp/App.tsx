import { SignIn } from "@screens/SignIn";
import theme from "@theme/index";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <SignIn /> : <Loading />}
    </ThemeProvider>
  );
}
