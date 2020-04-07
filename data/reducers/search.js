import types from "../types";

let d = new Date();
let dataText = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
export const initial = {
  location: "",
  from: dataText,
  to: dataText,
  for: 1,
  rooms: 1,
  minStars: 0,
  minPrice: 100,
  maxPrice: 0,
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.search.update:        
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
};
