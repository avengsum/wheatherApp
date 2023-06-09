import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import { useState } from "react";
import { View , StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";

const Tab = createBottomTabNavigator()


const Home  = () => {

  const [loading , setLoading] = useState(true)

  if(loading) {
    return (
      <View style={}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1
  }
})


export default Home