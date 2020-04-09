import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import HotelView from "../components/HotelView";
import MoonText from "../components/MoonText";
import { NavigationRedux } from "../data/connect";
import axios from "../utils/axios";
import { Tools } from "../utils/Tools";
const AllHotelsScreen = (props) => {
  useEffect(() => {}, [props.hotels]);
  const setHotelId = (id) => {
    axios({
      url: Tools.URL(`/hotel/${id}`),
      method: "GET",
    })
      .then(({ data }) => {
        props.setHotel(data)
        props.navigation.navigate("Hotel");
      })
      .catch((err) => {
        console.log(err.response.status);
      });
    
  };
  const fetchAllHotels = () => {
    axios({
      url: Tools.URL(`/hotel/`),
      method: "GET",
    })
      .then(({ data }) => {
        props.setHotels(data);
        props.allHotelTitle("Tous les hôtel");
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  };
  return (
    <ScrollView>
      <View
        style={{
          padding: 8,
          backgroundColor: "white",
        }}
      >
        <Button
          onPress={fetchAllHotels}
          color="#DC463C"
          title="Effacer les résultats"
        />
        <View style={{ marginTop: 5 }}></View>
        <MoonText>{props.hotels.length} résultats trouvés</MoonText>
      </View>
      <View>
        {props.hotels?.map((e) => (
          <HotelView key={e.id} data={e} onPress={setHotelId} />
        ))}
        {!props.hotels || props.hotels.length == 0 ? (
          <View
            style={{
              marginTop: 8,
            }}
          >
            <MoonText align="center" size={16}>
              Aucune donnée
            </MoonText>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({});
export default NavigationRedux(AllHotelsScreen);
