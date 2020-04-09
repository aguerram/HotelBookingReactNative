import { connect } from "react-redux";
import Types from "./types";

export const NavigationRedux = connect(
  (state) => ({
    pageTitles: state.pageTitles,
    search: state.search,
    hotels: state.hotels,
  }),
  {
    allHotelTitle: (title) => ({
      type: Types.pageTitles.changeAllHotel,
      payload: title,
    }),
    update: (key, value) => ({
      type: Types.search.update,
      key,
      value,
    }),
    setHotelId: (id, callback) => ({
      type: Types.hotel.setId,
      id,
      callback,
    }),
    setHotels: (data) => ({
      type: Types.hotels.set,
      payload: data,
    }),
    setHotel: (data) => ({
      type: Types.hotel.set,
      payload: data,
    }),
  }
);

export const SignHotelRedux = connect(
  (state) => ({
    hotel: state.hotel,
    search: state.search,
  }),
  {
    setHotel: (data) => ({
      type: Types.hotel.set,
      payload: data,
    }),
    modifyHotelList:(data)=>({
      type:Types.hotels.change,
      payload:data
    })
  }
);
export const LoginRedux = connect(
  (state) => ({
    auth: state.auth,
  }),
  {
    update: (key, value) => ({
      type: Types.auth.update,
      key,
      value,
    }),
    setAccountId:()=>({
      type:Types.account.fakeId
    })
  }
);

export const AccountRedux = connect(
  (state)=>({
    account:state.account,
    auth:state.auth,
  }),
  {
    setAccount:(payload)=>({
      type:Types.account.set,
      payload
    }),
    signout:()=>({
      type:Types.account.reset
    })
  }
)