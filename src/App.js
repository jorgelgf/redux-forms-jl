import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//apenas redux
import { Provider } from "react-redux";
//mais detalhes
import { persistdStore, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import PageTest from "./components/PageTest";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistdStore}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagetest" element={<PageTest />} />
          </Routes>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
