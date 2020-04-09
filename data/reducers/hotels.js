import types from "../types";

export const initial = []

export const reducer = (state=initial,action)=>{
    switch(action.type)
    {
        case types.hotels.set:
            return action.payload
        default:return state;
    }
}