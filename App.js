import react from "react";
import { View , StyleSheet } from "react-native";
import CheckWheather from "./src/components/CheckWheather";

const Home  = () => {
  return (
   <View style={styles.container}>
    <CheckWheather />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }


})

export default Home