import react from "react";
import { View , StyleSheet } from "react-native";
import CheckWheather from "./src/components/CheckWheather";
import UpcomingWheather from "./src/components/UpcomingWeather";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import City from "./src/components/City";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

const Home  = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'tomato',
        tabBarInactiveTintColor:'grey'
      }}>
        <Tab.Screen name={'Current'} component={CheckWheather}
        options={{
          tabBarIcon:({focused}) => (
            <Feather 
            name='droplet'
            size={25}
            color={focused ? 'tomato' : 'black' } />
          )
        }} />
        <Tab.Screen name={'Upcoming'} component={UpcomingWheather}
         options={{
          tabBarIcon:({focused}) => (
            <AntDesign
             name="clockcircleo"
              size={24}
              color={focused ? 'tomato' : 'black' } 
              />
          
          )
        }}  />
        <Tab.Screen name={"City"} component={City} 
         options={{
          tabBarIcon:({focused}) => (
            <AntDesign 
            name={'home'}
            size={25}
            color={focused ? 'tomato' : 'black' } />
          )
        }} />
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