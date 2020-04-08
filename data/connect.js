import {connect} from 'react-redux'
import Types from './types'

export const NavigationRedux = connect(
    (state)=>({
        pageTitles:state.pageTitles,
        search:state.search
    }),
    {
        allHotelTitle:(title)=>({
            type:Types.pageTitles.changeAllHotel,
            payload:title
        }),
        update:(key,value)=>({
            type:Types.search.update,
            key,
            value
        }),
        setHotelId:(id,callback)=>({
            type:Types.hotel.setId,
            id,
            callback
        })
    }
)

export const SignHotelRedux = connect(
    (state)=>({
        hotel:state.hotel
    })
    ,
    {

    }
)