import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tabs from "./src/components/Tabs";

const Tab = createBottomTabNavigator()

const Home  = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}


export default Home