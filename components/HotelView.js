import React, { useState } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import MoonText from "./MoonText";
import StarRating from "react-native-star-rating";
import { TouchableOpacity } from "react-native-gesture-handler";

const HotelView = (props) => {
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
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MoonText bold size={18}>
            Hotel marina
          </MoonText>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            566 DH
          </Text>
        </View>
        <View>
          <MoonText color="#B9B4B4" icon="md-pin">
            Agadir, marina rue moulay hassan n 65
          </MoonText>
        </View>
        <View>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={4.5}
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
export default HotelView;
