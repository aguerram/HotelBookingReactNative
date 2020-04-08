import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Button,
} from "react-native";
import InputField from "../components/InputField";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";

const LoginScreen = (props) => {
  useEffect(() => {});
  return (
    <ImageBackground
      source={require("../assets/images/login_background.jpg")}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView
        style={{
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: 20,
          }}
        >
          <MoonText color={Colors.mediumLightGray} align="center" size={30}>
            S'identifier
          </MoonText>
          <InputField placeholder="Username" />
          <View style={{ marginTop: 8 }}></View>
          <InputField placeholder="Password" />
          <View style={{ marginTop: 8 }}></View>
          <Button color={Colors.tintColor} title="S'identifier"/>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({});
export default LoginScreen;
