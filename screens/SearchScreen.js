import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
import InputField from "../components/InputField";
const SearchScreen = props => {
  return (
    <View>
      <View style={
          {
              margin:5
          }
      }>
        <MoonText size={16} color={Colors.mediumLightGray}>
          Choisissez un lieu
        </MoonText>
        <InputField placeholder="Trouver un lieu" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreen;
