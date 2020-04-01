import React, {useState,useEffect} from 'react'
import {Text,StyleSheet} from 'react-native'
const MoonText = ({align,white,bold,...props})=>{
    const setStyles = ()=>{
        let style= {}
        if(white)
        {   
            style={
                ...style,
                color:'white'
            }
        }
        if(align)
        {
            style={
                ...style,
                textAlign:align
            }
        }
        if(props.size)
        {
            style={
                ...style,
                fontSize:props.size
            }
        }
        if(bold)
        {
            style={
                ...style,
                fontWeight:"bold"
            }
        }
        console.log(style);
        return style
    }
    return <Text {...props} style={[props.style, { fontFamily: 'moon'},setStyles()]} />
}
const styles = StyleSheet.create({
})
export default MoonText