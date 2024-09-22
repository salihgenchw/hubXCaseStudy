import AppNavigator from "./src/navigation/AppNativagor";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <AppNavigator />
      </Provider>
    </>
  );
}
