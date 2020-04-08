import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
import StarRating from "react-native-star-rating";

const RattingScreen = (props) => {
  const [rating, setRating] = useState(4.5);
  const selectedStar = (amount) => {
    setRating(amount)
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "90%",
          backgroundColor: "white",
          padding: 12,
        }}
      >
        <MoonText color={Colors.Gray} size={24} align="center">
          Hotel MArina
        </MoonText>
        <View style={{ marginTop: 10 }}></View>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          fullStarColor={"#FCD900"}
          selectedStar={(rating) => selectedStar(rating)}
          starSize={42}
        />
        <View style={{ marginTop: 10 }}></View>
        <Button color={Colors.tintColor} title="Enregistrer"/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default RattingScreen;
