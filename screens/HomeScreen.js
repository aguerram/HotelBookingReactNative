import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Button,
  StatusBar
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import MoonText from "../components/MoonText";
import InputField from "../components/InputField";
import Styles from "../constants/Styles";
import { NavigationRedux } from "../data/connect";
function HomeScreen(props) {
  React.useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView
      style={[styles.container, { marginTop: StatusBar.currentHeight }]}
    >
      <ImageBackground
        source={require("../assets/images/login_background.jpg")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView
          style={[styles.flex, styles.overlay]}
        >
          <Text
            style={{
              fontFamily: "reenie-beanie",
              color: "white",
              fontSize: 96,
              textAlign: "center"
            }}
          >
            BookIT
          </Text>
          <MoonText white size={23} bold align={"center"}>
            Choisir un emplacement pour
          </MoonText>
          <MoonText white size={19} align={"center"}>
            Trouver un hôtel
          </MoonText>
          <View
          style={
            {
              marginHorizontal:10
            }
          }
          >
            <InputField
              containerStyle={{
                marginTop: 10
              }}
              onChange={val => {
                props.update("location",val)
              }}
              placeholder="Trouver un lieu"
              value={props.search?.location}
            />
          </View>
          <View
            style={[Styles.flex, { justifyContent: "flex-end", marginTop: 10 }]}
          >
            <View style={[{ alignSelf: "center" }]}>
              <Button
                onPress={() => {
                  props.navigation.push("App");
                }}
                title="Rechercher"
                color="#B84BFF"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  overlay: {
    backgroundColor: "rgba(10, 14, 240, 0.31)"
  }
});
export default NavigationRedux(HomeScreen)