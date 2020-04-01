import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { MonoText } from "../components/StyledText";
import MoonText from "../components/MoonText";
import SearchField from '../components/SearchField'
export default function HomeScreen(props) {
  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/login_background.jpg")}
        style={styles.backgroundImage}
      >
        <KeyboardAvoidingView style={[styles.flex,styles.overlay]}>
          <MoonText white size={23} bold align={"center"}>
            Choisir un emplacement pour
          </MoonText>
          <MoonText white size={19} align={"center"}>
            Trouver un hôtel
          </MoonText>
          <SearchField/>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
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
  overlay:{
    backgroundColor:"rgba(10, 14, 240, 0.31)"
  }
});
