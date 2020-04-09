import Types from "../types";
export const initial = {
  reservations: [],
  reviews: [],
};

export const reducer = (state = initial, action) => {
  switch (action.type) {
    case Types.account.fakeId:
      return {
        ...initial,
        id:0
      }
    case Types.account.reset:
      return {
        ...initial,
      };
    case Types.account.set:
      return {
        ...action.payload,
      };
    case Types.account.addReservation:
      return {
        ...state,
        reservations: [...state.reservations, action.payload],
      };
    case Types.account.addReview:
      return {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
    default:
      return state;
  }
};
