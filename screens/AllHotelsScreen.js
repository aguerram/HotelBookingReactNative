import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import HotelView from "../components/HotelView";
import { TouchableOpacity } from "react-native-gesture-handler";
const AllHotelsScreen = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Screen title",
    });
    console.log(props.navigation.state)
  });
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.navigation.setOptions({
            headerTitle: "Screen title",
          });
        }}
      >
        <HotelView />
      </TouchableOpacity>

      <HotelView />
      <HotelView />
      <HotelView />
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default AllHotelsScreen;
