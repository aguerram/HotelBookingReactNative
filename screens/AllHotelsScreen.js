import React, {useState} from 'react'
import {View,Text,StyleSheet, ScrollView} from 'react-native'
import HotelView from '../components/HotelView'
const AllHotelsScreen = (props)=>{
    return <ScrollView>
        <HotelView/>
    </ScrollView>
}
const styles = StyleSheet.create({
})
export default AllHotelsScreen