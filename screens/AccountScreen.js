import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
const AccountScreen = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 5,
        margin:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1
      }}
    >
      <MoonText color={Colors.mediumLightGray} align="center" size={15}>
        Vous n'êtes pas connecté, veuillez vous connecter,Ou si vous n'avez pas
        de compte, vous pouvez en créer un
      </MoonText>
      <View style={
          {
              marginTop:10,
              margin:5,
          }
      }>
        <Button color="#B84BFF" title="S'identifier" />
        <View style={{marginTop:8}}></View>
        <Button color="#B84BFF" title="Créer un compte" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({});
export default AccountScreen;
