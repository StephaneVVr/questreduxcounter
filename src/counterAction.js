export const remove = value => {
  return { type: "REMOVE", payload: value };
};

export const add = value => {
  return { type: "ADD", payload: value };
};

export const reset = value => {
  return { type: "RESET", payload: value };
};
