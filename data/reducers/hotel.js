import types from "../types";

export const initial = {
  id: 0,
  cover: null,
  title: "",
  price: 0,
  stars: 0,
  descreption: "",
  address: "",
  siteweb: "",
  phone: "",
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.hotel.setId:
      return {
        ...initial,
        id: action.id,
      };
    case types.hotel.set:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
