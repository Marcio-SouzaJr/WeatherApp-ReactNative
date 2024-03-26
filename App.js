import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useGetWeather } from "./src/hooks/useGetWeather";
const App = () => {
  const [loading, error, weather] = useGetWeather()


  if (weather && weather.list){
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }

    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"#0000ff"} />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
export default App;
