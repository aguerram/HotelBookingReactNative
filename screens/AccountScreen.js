import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
import axios from "../utils/axios";
import { Tools } from "../utils/Tools";
import { AccountRedux } from "../data/connect";
import { ScrollView } from "react-native-gesture-handler";
const AccountScreen = (props) => {
  useEffect(() => {
    console.log(props.account);
    if (global.token && (!props.account?.id || props.account.id == 0)) {
      axios({
        url: Tools.URL(`/profile`),
        method: "GET",
      })
        .then(({ data }) => {
          props.setAccount(data);
        })
        .catch(({ response }) => {
          if (response.status == 401) {
            props.navigation.navigate("Login");
          }
        });
    }
  }, [props.account?.id]);
  if (!global.token)
    return (
      <View
        style={{
          backgroundColor: "white",
          padding: 5,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <MoonText color={Colors.mediumLightGray} align="center" size={15}>
          Vous n'êtes pas connecté, veuillez vous connecter,Ou si vous n'avez
          pas de compte, vous pouvez en créer un
        </MoonText>
        <View
          style={{
            marginTop: 10,
            margin: 5,
          }}
        >
          <Button
            color="#B84BFF"
            title="S'identifier"
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          />
          <View style={{ marginTop: 8 }}></View>
          <Button
            onPress={() => {
              props.navigation.navigate("Signup");
            }}
            color="#B84BFF"
            title="Créer un compte"
          />
        </View>
      </View>
    );
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        padding: 5,
        margin: 10,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: "white",
          padding: 5,
          borderRightColor: "#C2BBBB",
          borderRightWidth: 2,
          justifyContent: "space-between",
        }}
      >
        <View>
          <MoonText color={Colors.Gray} icon="md-person" size={16} align="left">
            {props.account?.name}
          </MoonText>
          <MoonText color={Colors.Gray} icon="md-call" size={16} align="left">
            {props.account?.telephone}
          </MoonText>
          <MoonText color={Colors.Gray} icon="md-mail" size={16} align="left">
            {props.account?.email}
          </MoonText>
        </View>
        <Button
          onPress={() => {
            global.token = null;
            props.signout();
          }}
          color="#DC463C"
          title="Déconnexion"
        />
      </View>
      <ScrollView
        style={{
          width: "60%",
          backgroundColor: "white",
          padding: 5,
        }}
      >
        <MoonText size={14} bold>
          Réservations
        </MoonText>
        {props.account.reservations.map((r) => (
          <View
            style={{
              margin: 5,
              borderWidth: 1,
              borderColor: Colors.Gray,
              padding:5
            }}
          >
            <MoonText bold>{r.hotel?.title}</MoonText>
            <MoonText>Pour {r.guests} personne</MoonText>
            <MoonText>ET {r.rooms} chambres</MoonText>
            <MoonText>
              De {r.from} à {r.to}
            </MoonText>
          </View>
        ))}
        <View style={{ marginTop: 8 }}></View>
        <MoonText size={14} bold>
          Votes
        </MoonText>
        {props.account.reviews.map((r) => (
          <View
            style={{
              margin: 5,
              borderWidth: 1,
              borderColor: Colors.mediumLightGray,
              padding:5
            }}
            key={r.id}
          >
            <MoonText>{r.hotel.title}</MoonText>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({});
export default AccountRedux(AccountScreen);
