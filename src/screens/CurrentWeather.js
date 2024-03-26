/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = ({ weatherData }) => {

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  
  const {
    wrapper,
    container1,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor },
      ]}
    >
      <ScrollView
      showsVerticalScrollIndicator={false}
       contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        
      <View
        style={[
          container1,
          { backgroundColor: weatherType[weatherCondition].backgroundColor2 },
        ]}
      >
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color={"white"}
        />
        <Text style={tempStyles}>{`${temp.toFixed(0)}°C`}</Text>
        <Text style={feels}>{`Feels like ${feels_like.toFixed(0)}°C`}</Text>
        <RowText
          messageOne={`High: ${temp_max.toFixed(0)}°C `}
          messageTwo={` Low: ${temp_min.toFixed(0)}°C `}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "45%",
    width: 250,
    marginTop: "25%",
    marginBottom: "10%",
    borderBlockColor: "black",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.78,
    elevation: 15,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: weatherType["Tunderstorm"].backgroundColor,
  },
  tempStyles: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: "black",
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    paddingBottom: 0,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center"
    
  }
});
export default CurrentWeather;
