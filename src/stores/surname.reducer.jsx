export default function reducers(state = "", action) {
  switch (action.type) {
    case "SURNAME":
      return action.payload;

    default:
      return state;
  }
}
