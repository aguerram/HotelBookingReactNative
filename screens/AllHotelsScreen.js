import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, Button } from "react-native";
import HotelView from "../components/HotelView";
import MoonText from "../components/MoonText";
const AllHotelsScreen = (props) => {
  useEffect(() => {});
  return (
    <ScrollView>
      <View style={
        {
          padding:8,
          backgroundColor:"white"
        }
      }>
        <Button color="#DC463C" title="Effacer les résultats"/>
        <View style={{marginTop:5}}></View>
        <MoonText >3 résultats trouvés</MoonText>
      </View>
      <View>
        <HotelView />

        <HotelView />
        <HotelView />
        <HotelView />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default AllHotelsScreen;
