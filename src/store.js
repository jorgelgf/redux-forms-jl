import { createStore, combineReducers } from "redux";

//usando o redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import nameReducer from "./stores/name.reducer";
import surNameReducer from "./stores/surname.reducer";

//importando os reducers
const rootReducer = combineReducers({
  name: nameReducer,
  surname: surNameReducer,
});

//recebe um objeto de config e o rootReducer
const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  rootReducer
);

export const store = createStore(persistedReducer);

//passa export o store atual
export const persistdStore = persistStore(store);
