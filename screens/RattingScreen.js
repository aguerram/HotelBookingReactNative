import React, { useState, useEffect } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
import StarRating from "react-native-star-rating";
import { SignHotelRedux } from "../data/connect";
import axios from "../utils/axios";
import { Tools } from "../utils/Tools";
const RattingScreen = ({ hotel, ...props }) => {
  const [rating, setRating] = useState(4.5);
  useEffect(() => {
    setRating(hotel.stars);
  }, []);
  const selectedStar = (amount) => {
    setRating(amount);
  };
  const save = () => {
    axios({
      method: "POST",
      url: Tools.URL(`/hotel/vote/${hotel.id}`),
      data: {
        stars: rating,
      },
    })
      .then(({ data }) => {
        Alert.alert("Succès", data.message);
        axios({
          url: Tools.URL(`/hotel/${hotel.id}`),
          method: "GET",
        })
          .then(({ data }) => {
            props.setHotel(data);
            props.modifyHotelList(data);
            props.navigation.goBack();
          })
          .catch((err) => {
            console.log(err.response.status);
          });
      })
      .catch(({ response }) => {
        if (response.status == 401) {
          global.token = null;
          props.navigation.navigate("Login");
        } else {
          Alert.alert("Erreur", response.data.message);
        }
      });
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
          {hotel.title}
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
        <Button onPress={save} color={Colors.tintColor} title="Enregistrer" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SignHotelRedux(RattingScreen);
