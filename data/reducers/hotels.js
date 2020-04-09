import types from "../types";

export const initial = []

export const reducer = (state=initial,action)=>{
    switch(action.type)
    {
        case types.hotels.set:
            return action.payload
        case types.hotels.change:
            return [
                ...state.map(e=>{
                    if(e.id != action.payload.id)
                        return e;
                    return {
                        ...action.payload
                    }
                })
            ]
        default:return state;
    }
}