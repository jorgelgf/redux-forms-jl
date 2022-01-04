import { createStore, combineReducers } from "redux";
import nameReducer from "./stores/name.reducer";

//importando os reducers

const rootReducer = combineReducers({
  name: nameReducer,
});

const store = createStore(rootReducer);

export default store;
