import types from "../types";

export const initial = {
    token:"",
    name:"",
    email:"",
    tele:"",
    password:""
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.auth.update:
      return {
        ...state,
        [action.key]:action.value
      }
    default:
      return state;
  }
};
