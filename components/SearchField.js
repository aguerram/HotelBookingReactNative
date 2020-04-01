import React, {useState} from 'react'
import {View,StyleSheet} from 'react-native'
import Styles from '../constants/Styles'
import { TextInput } from 'react-native-gesture-handler'
const SearchField = (props)=>{
    return <View style={[Styles.flex]}>
        <TextInput placeholder={"Trouver un lieu"} style={[Styles.moonFonts]} />
    </View>
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"red"
    }
})
export default SearchField