import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Components/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
