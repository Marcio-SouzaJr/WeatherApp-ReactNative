import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = (props) => {
    // eslint-disable-next-line react/prop-types
    const {iconName, iconColor, bodyText, bodyTextStyles} = props
    const {container, textTheme} = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    textTheme: {
        fontWeight: "bold"
    },
    container: {
        alignItems: "center",
    }
});
export default IconText;
