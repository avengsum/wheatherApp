import CheckWheather from "./CheckWheather";
import UpcomingWheather from "./UpcomingWeather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import City from "./City";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: 'tomato',
        tabBarInactiveTintColor:'grey',
        tabBarBadgeStyle:{
            backgroundColor: 'lightblue'
        },
        headerStyle:{
            backgroundColor:'lightblue'
        },
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize:25,
            color:'tomato'
        }
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
    )
}

export default Tabs