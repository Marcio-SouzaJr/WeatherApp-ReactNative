import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../utilities/weatherType";
import moment from "moment";

const ListItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { dt_txt, min, max, condition } = props;
  const { dateTextWrapper, item, date, temp } = styles;
  return (
    <View style={[item, {backgroundColor: weatherType[condition].backgroundColor}]}>
      <Feather name={weatherType[condition].icon} size={50} color={"#ffd300"} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("H:mm")}</Text>
      </View>
      <Text style={temp}>{`${min.toFixed(0)}/${max.toFixed(0)}º`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dateTextWrapper: {
    flexDirection: "column",
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    // backgroundColor: "skyblue",
  },
  temp: {
    color: "white",
    fontSize: 20,
  },
  date: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default ListItem;
