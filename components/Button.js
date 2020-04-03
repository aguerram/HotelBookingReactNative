import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

const Button = props => {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["#B84BFF", "#72B5FE"]}
        style={
            {
                padding:8,
                display:"flex"
            }
        }
      >
        <Text style={[styles.buttonText,{
            alignItems:"center",
            display:"flex"
        }]}>{props.title}<Ionicons name="md-checkmark-circle" size={24} color="green" /></Text>
        
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontFamily: "moon",
    fontSize: 18
  }
});
export default Button;
