export default function reducers(state = "", actions) {
  switch (actions.type) {
    case "NAME":
      return actions.payload;

    default:
      return state;
  }
}
