import {connect} from 'react-redux'
import Types from './types'

export const NavigationRedux = connect(
    (state)=>({
        pageTitles:state.pageTitles
    }),
    {
        
    }
)