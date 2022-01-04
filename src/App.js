import "./App.css";
import Home from "./components/Home";
import { Provider } from "react-redux";
//mais detalhes
import { persistdStore, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistdStore}>
        <Home />
      </PersistGate>
    </Provider>
  );
}

export default App;
