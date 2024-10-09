/**
 * Utilizand Redux with React-Native
 * 
 * @format
 */
import { Provider } from "react-redux";
import { store } from "./src/store";
import { Home } from "./src/home/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider >
        <Home />
      </SafeAreaProvider>
    </Provider>

  );
}


export default App;
