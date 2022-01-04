import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Home>meu teste</Home>
    </Provider>
  );
}

export default App;
