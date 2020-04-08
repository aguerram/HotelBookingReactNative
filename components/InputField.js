import React, {useState} from 'react'
import {View,StyleSheet} from 'react-native'
import Styles from '../constants/Styles'
import { TextInput } from 'react-native-gesture-handler'

const InputField = ({keyboardType,...props})=>{
    return <View  style={[styles.cont,props.containerStyle]}>
        <TextInput value={props.value || ""} keyboardType={keyboardType||"default"} onChange={(val)=>{
            props.onChange && props.onChange(val.nativeEvent.text)
        }} placeholder={props.placeholder} style={[Styles.moonFonts,styles.searchField]} />
    </View>
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    },
    searchField:{
        backgroundColor:"#FFFFFF",
        fontSize:18,
        padding:8,
    },
    cont:{
        borderColor:"#C2BBBB",
        borderWidth:1
    }
})
export default InputField