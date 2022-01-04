export function stringName(name) {
  return {
    type: "NAME",
    payload: name,
  };
}

export function surName(surname) {
  return {
    type: "SURNAME",
    payload: surname,
  };
}
