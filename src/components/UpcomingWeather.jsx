import { FlatList, SafeAreaView, StatusBar,StyleSheet ,View ,Text , ImageBackground } from "react-native"
import {Feather} from '@expo/vector-icons'

const Data = [
    {
      dt: 1661875200,
      main: {
        temp_min: 296.34,
        temp_max: 298.24,
      },
      weather: [
        {
          main: "Rain",
        }
      ],
    },
    {
      dt: 16618752001,
      main: {
        temp_min: 296.34,
        temp_max: 298.24,
      },
      weather: [
        {
          main: "Rain",
        }
      ],
    },
    {
      dt: 16618752002,
      main: {
        temp_min: 296.34,
        temp_max: 298.24,
      },
      weather: [
        {
          main: "Rain",
        }
      ],
    }
    
  ]

  const Item = ({dt,min,max,condition}) => {
    return(
        <View>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.data}>{dt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    )
  }

const UpcomingWheather = () => {

    const renderItem = ({item}) => {
        return(
        <Item 
        condition={item.weather[0]} dt={item.dt} max={item.main.temp_max}
        min={item.main.temp_min}/>
    )}

    return (
        <SafeAreaView style={styles.container}>
            <Text>Upcoming Wheather</Text>
            <ImageBackground source={require('../../assets/upcomingWeather.jpg')}
            style={styles.image} >
            <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt}
            />
            </ImageBackground>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:'royalblue'
    },
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'pink'
    },
    temp:{
        color:'white',
        fontSize:20
    },
    data:{
        color:'white',
        fontSize:15
    },
    image:{
      flex:1
    }
})

export default UpcomingWheather