import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import InputField from "../components/InputField";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
import { LoginRedux } from "../data/connect";
import axios from "../utils/axios";
import { Tools } from "../utils/Tools";
const SignupRedux = (props) => {
  useEffect(() => {});
  const update = (key, value) => {
    props.update(key, value);
  };
  const login = () => {
    axios({
      url: Tools.URL(`/signup`),
      method: "POST",
      data: {
        email: props.auth.email,
        password: props.auth.password,
        name: props.auth.name,
        tele: props.auth.tele,
      },
    })
      .then(({ data }) => {
        Alert(data.message)
        update("email","")
        update("password","")
        update("tele","")
        update("name","")
      })
      .catch(({ response }) => {
        let errors = [];
        for (let e of Object.keys(response.data.errors)) {
            errors.push(response.data.errors[e]);
        }
        console.log(response)
        Alert.alert("Erreur", errors.join("\n"));
        //props.update("password", "");
      });
  };
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
            Créez compte
          </MoonText>
          <InputField
            value={props.auth?.tele}
            onChange={(val) => {
              update("tele", val);
            }}
            placeholder="Téléphone"
          />
          <View style={{ marginTop: 8 }}></View>
          <InputField
            value={props.auth?.name}
            onChange={(val) => {
              update("name", val);
            }}
            placeholder="Nom complète"
          />
          <View style={{ marginTop: 8 }}></View>
          <InputField
            value={props.auth?.email}
            onChange={(val) => {
              update("email", val);
            }}
            keyboardType="email-address"
            placeholder="Email"
          />
          <View style={{ marginTop: 8 }}></View>
          <InputField
            value={props.auth?.password}
            onChange={(val) => {
              update("password", val);
            }}
            placeholder="Password"
            isPassword
          />
          <View style={{ marginTop: 8 }}></View>
          <Button
            onPress={login}
            color={Colors.tintColor}
            title="Créez votre compte"
          />
          <View style={{ marginTop: 8 }}></View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({});
export default LoginRedux(SignupRedux);
