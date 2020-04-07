import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native";
import MoonText from "../components/MoonText";
import Colors from "../constants/Colors";
import InputField from "../components/InputField";
import DatePicker from "react-native-datepicker";
import RNPickerSelect from "react-native-picker-select";

const SearchScreen = (props) => {
  return (
    <ScrollView alwaysBounceVertical>
      <KeyboardAvoidingView
        style={{
          margin: 5,
        }}
      >
        <View>
          <MoonText size={16} color={Colors.mediumLightGray}>
            Choisissez un lieu
          </MoonText>
          <InputField placeholder="Trouver un lieu" />
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            borderTopColor: "#F2F2F2",
            borderTopWidth: 3,
            padding: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              alignSelf: "center",
            }}
          >
            <MoonText size={16} color={Colors.mediumLightGray}>
              De
            </MoonText>
            <DateP />
          </View>
          <View
            style={{
              backgroundColor: "white",
              alignSelf: "center",
            }}
          >
            <MoonText size={16} color={Colors.mediumLightGray}>
              à
            </MoonText>
            <DateP />
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              width: 120,
            }}
          >
            <MoonText color={Colors.mediumLightGray} icon="md-people">
              Réservé pour
            </MoonText>
            <InputField keyboardType="number-pad" placeholder="1" />
          </View>
          <View
            style={{
              width: 120,
            }}
          >
            <MoonText color={Colors.mediumLightGray} icon="md-home">
              Chambres
            </MoonText>
            <InputField keyboardType="number-pad" placeholder="1" />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "stretch",
            }}
          >
            <Button style={{}} title="Rechercher" />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <MoonText color={Colors.mediumLightGray}>Recherche Avancée</MoonText>
          <View
            style={{
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <MoonText>Minimum d'étoiles</MoonText>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              placeholder={{
                label: "N'importe quel nombre d'étoiles",
                value: 0,
              }}
              items={[
                { label: "1 étoile", value: "1" },
                { label: "2 étoile", value: "2" },
                { label: "3 étoile", value: "3" },
                { label: "4 étoile", value: "4" },
                { label: "5 étoile", value: "5" },
              ]}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <View
              style={{
                width: 120,
              }}
            >
              <MoonText color={Colors.mediumLightGray} icon="md-cash">
                Min prix (DH)
              </MoonText>
              <InputField keyboardType="number-pad" placeholder="0" />
            </View>
            <View
              style={{
                width: 120,
              }}
            >
              <MoonText color={Colors.mediumLightGray} icon="md-cash">
                Max prix (DH)
              </MoonText>
              <InputField keyboardType="number-pad" placeholder="0" />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const DateP = (props) => {
  let d = new Date();
  let dataText = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  const [date, setDate] = useState(dataText);
  return (
    <DatePicker
      style={{ width: 200 }}
      date={date}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      minDate={dataText}
      confirmBtnText="Confirmer"
      cancelBtnText="Annuler"
      customStyles={{
        dateIcon: {
          position: "absolute",
          left: 0,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          marginLeft: 36,
        },
        // ... You can check the source to find the other keys.
      }}
      onDateChange={(date) => {
        console.log(date);
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
