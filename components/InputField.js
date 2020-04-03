import React, {useState} from 'react'
import {View,StyleSheet} from 'react-native'
import Styles from '../constants/Styles'
import { TextInput } from 'react-native-gesture-handler'
const InputField = (props)=>{
    return <View  style={[props.containerStyle]}>
        <TextInput onChange={(val)=>{
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
    }
})
export default InputField