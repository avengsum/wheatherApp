import react from "react";
import { View , StyleSheet } from "react-native";
import CheckWheather from "./src/components/CheckWheather";
import UpcomingWheather from "./src/components/UpcomingWeather";

const Home  = () => {
  return (
   <View style={styles.container}>
    <UpcomingWheather />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }


})

export default Home