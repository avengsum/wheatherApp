import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";
import { useEffect, useState } from "react";
import { View , StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import * as Location from 'expo-location'
import {WHEATHER_API_KEY} from '@env'

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
  const [wheatherData , setWheatherData] = useState([])
  const [lat , setLat] = useState([])
  const [lon , setLon] = useState([])

  const fetchData = async () => {
    try {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${WHEATHER_API_KEY}`)
    const data = await res.json()
    setWheatherData(data)
    setLoading(false)
    } catch (error) {
      setErr('Could not fetch weather')
    } finally {
      setLoading(false)
    }
    
  }


  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  if(location) {
    console.log(location)
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