import react from "react";
import { View , StyleSheet } from "react-native";
import CheckWheather from "./src/components/CheckWheather";
import UpcomingWheather from "./src/components/UpcomingWeather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import City from "./src/components/City";
import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Home  = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CheckWheather} />
        <Tab.Screen name={'Upcoming'} component={UpcomingWheather} />
        <Tab.Screen name={"City"} component={City} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }


})

export default Home