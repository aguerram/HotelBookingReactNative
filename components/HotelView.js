import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import MoonText from "./MoonText";
import StarRating from "react-native-star-rating";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SignHotelRedux } from "../data/connect";
import axios from "../utils/axios"
import {Tools} from "../utils/Tools"

const HotelView = ({data,...props}) => {
  const viewHotel = (id)=>{
      props.onPress(id)
  }
  return (
    <View
      style={{
        width: "100%",
        padding: 10,
        borderRadius: 30,
      }}
    >
      <ImageBackground
        style={{
          width: "100%",
          height: 200,
          borderRadius:10
        }}
        source={require("../assets/images/hotel.jpg")}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius:10
        }}
        onPress={()=>{
          viewHotel(data.id)
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MoonText bold size={18}>
            {data.title}
          </MoonText>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {data.price} DH
          </Text>
        </View>
        <View>
          <MoonText color="#B9B4B4" icon="md-pin">
            {data.address}
          </MoonText>
        </View>
        <View>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={data.stars}
            fullStarColor={"#FCD900"}
            disabled
            containerStyle={{
              width: 120,
            }}
            starSize={20}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({});
export default  SignHotelRedux(HotelView);
