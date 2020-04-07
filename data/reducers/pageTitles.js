import types from "../types";

export const initial = {
    "Search":"Trouver un hotel",
    "AllHotels":"Tous les hôtel",
}

export const reducer = (state=initial,action)=>{
    switch(action.type)
    {
        case types.pageTitles.changeAllHotel:
            return {
                ...state,
                AllHotels:action.payload
            }
        default:return state;
    }
}