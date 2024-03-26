/* eslint-disable react/prop-types */
import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from "react-native";
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    rowLayout,
    imgLayout,
    darkness
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={imgLayout}
      >
        <View style={darkness}>
        <Text style={[cityName, cityText]}>{weatherData.city.name}</Text>
        <Text style={[countryName, cityText]}>{weatherData.city.country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={weatherData.city.population}
            bodyTextStyles={populationText}
            />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(weatherData.city.sunrise).format("LT")}
            bodyTextStyles={riseSetText}
            />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(weatherData.city.sunset).format("LT")}
            bodyTextStyles={riseSetText}
            />
        </View>
            </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgLayout: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  cityName: {
    fontSize: 40,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
  },
  countryName: {
    fontSize: 30,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11.78,
    elevation: 15,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "white",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  darkness: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      height: "100%"
  }
});
export default City;
