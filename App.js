import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import { useEffect, useState } from "react";
import { View , StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import * as Location from 'expo-location'

const Tab = createBottomTabNavigator()


const Home  = () => {

  useEffect(() => {
    (async () => {
      let {status} = await loading.requestForeroundPermissionsAsync()
      if(status !== 'granted'){
        setErr("permission to access location was denied")
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })
  },[])

  const [loading , setLoading] = useState(true)
  const [location , setLocation] = useState(null)
  const [err , setErr] = useState(null)


  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
  

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  
)}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    flex:1
  }
})


export default Home