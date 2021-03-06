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
import axios from "../utils/axios"
import {Tools} from "../utils/Tools"
const LoginScreen = (props) => {
  useEffect(() => {
    if(global.token)
    {
      props.navigation.goBack()
    }
  });
  const update = (key, value) => {
    props.update(key, value);
  };
  const login = ()=>{
    axios({
      url:Tools.URL(`/login`),
      method:"POST",
      data:{
        email:props.auth.email,
        password:props.auth.password
      }
    }).then(({data})=>{
      global.token = data.message
      props.setAccountId()
      props.navigation.goBack()
    })
    .catch(({response})=>{
      Alert.alert("Invalide","les informations d'identification invalides");
      props.update("password","")
    })
  }
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
          <Button onPress={login} color={Colors.tintColor} title="S'identifier" />
          <View style={{marginTop:8}}></View>
          <Button onPress={()=>{
            props.navigation.navigate("Signup");
          }} color={Colors.tintColor} title="Créer un compte" />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({});
export default LoginRedux(LoginScreen);
