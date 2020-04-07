import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MoonText = ({ align, white, bold, ...props }) => {
  const setStyles = () => {
    let style = {};
    if (white || props.color) {
      style = {
        ...style,
        color: props.color ? props.color : "white",
      };
    }
    if (align) {
      style = {
        ...style,
        textAlign: align,
      };
    }
    if (props.size) {
      style = {
        ...style,
        fontSize: props.size,
      };
    }
    if (bold) {
      style = {
        ...style,
        fontWeight: "bold",
      };
    }
    return style;
  };
  return (
    <Text style={
        {
            textAlign:align||"left"
        }
    }>
      {props.icon && (
        <Text style={[{paddingHorizontal:60}, props.iconStyle]}>
          <Ionicons color={setStyles().color} size={16} name={props.icon} />
        </Text>
        
      )}
      {props.icon && <Text> </Text>}
      <Text
        {...props}
        style={[props.style, { fontFamily: "moon" }, setStyles()]}
      />
    </Text>
  );
};
const styles = StyleSheet.create({});
export default MoonText;
