import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, Button } from "react-native";
import { SignHotelRedux } from "../data/connect";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import {
  TouchableNativeFeedback,
  ScrollView,
} from "react-native-gesture-handler";
import MoonText from "../components/MoonText";
const SingleHotelScreen = (props) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <ImageBackground
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
        }}
        source={require("../assets/images/hotel.jpg")}
      >
        <View
          style={{
            position: "absolute",
            bottom: 8,
            right: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            zIndex: 222,
          }}
        >
          <TouchableNativeFeedback
            style={{
              backgroundColor: "white",
              width: 38,
              height: 38,
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              borderRadius: 50,
            }}
            onPress={() => {
              props.navigation.navigate("Ratting");
            }}
          >
            <Ionicons color="#DC463C" size={32} name="md-heart" />
          </TouchableNativeFeedback>
          <Button color={Colors.tintColor} title="Réservez dès maintenant" />
        </View>
      </ImageBackground>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <MoonText color={Colors.Gray} size={20}>
            Hotel marina{" "}
          </MoonText>
          <Text
            style={{
              color: Colors.Gray,
              fontSize: 18,
            }}
          >
            500 DH
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <StarRating
              disabled={false}
              maxStars={5}
              rating={4.5}
              fullStarColor={"#FCD900"}
              disabled
              containerStyle={{
                width: 120,
              }}
              starSize={18}
            />
            <Text
              style={{
                fontSize: 12,
              }}
            >
              13 Votes
            </Text>
          </View>
          <Text
            style={{
              color: Colors.Gray,
              fontSize: 18,
            }}
          >
            Total : 1000 DH
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "white",
          marginHorizontal: 10,
          padding: 5,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.tintColor,
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            2 Chambres x 500 DH = 1000 DH
          </Text>
          <Text
            style={{
              color: "white",
            }}
          >
            Pour 2 personnes
          </Text>
          <Text
            style={{
              color: "white",
            }}
          >
            De 29/06/2020 à 07/07/2020
          </Text>
        </View>
        <View
          style={{
            padding: 5,

            borderColor: "black",
            borderWidth: 1,
          }}
        >
          <MoonText color={Colors.Gray} icon="md-pin" size={16}>
          Agadir, marina rue moulay hassan n 65
          </MoonText>
          <MoonText color={Colors.Gray} icon="md-call" size={16}>
            +212 5326555
          </MoonText>
          <MoonText color={Colors.Gray} icon="md-mail" size={16}>
            agurram20303@live.fr
          </MoonText>
        </View>

        <View style={{ marginTop: 5 }}></View>
        <MoonText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in.
        </MoonText>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default SignHotelRedux(SingleHotelScreen);
