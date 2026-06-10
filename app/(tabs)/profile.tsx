import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Flame, PersonStanding, Timer, UserRound } from 'lucide-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function history() {

  return (
    
    <SafeAreaView >


        <ImageBackground 
        style={styles.headerText}
              source={require("../../assets/imgs/imgsport.jpg")}
      resizeMode="cover"
      borderBottomLeftRadius={10}
      borderBottomRightRadius={10}
      blurRadius={4}

        >
                 <View style={styles.container}>
          <UserRound color={'white'} size={100} />
        </View>

        <Text style={{ fontSize: 30, fontWeight: 'bold' , color: 'white' }}>Youssef Almona</Text>
        <Text style={{ fontWeight: 'medium',color: 'white' }}>Premium Member since Jan 2024</Text> 
        </ImageBackground>





      <View style={{ padding: 20, gap: 18 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Activity History</Text>

        <View style={styles.card}>

          <PersonStanding size={40} style={{ backgroundColor: '#2DB7F2', borderRadius: 8 }} />

          <View style={styles.cardDetails}>

            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Morning Trail Run</Text>

            <View style={{ flexDirection: 'row', gap: 4 }}>

              <Timer color={'green'} size={16} />
              <Text style={{ color: 'green' }}>45m</Text>
              <Flame color={'green'} size={16} />
              <Text style={{ color: 'green' }}>360 kcal</Text>

            </View>

          </View>

        </View>

      </View>





    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  headerText: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#c9e7f3',
    
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

  },
  container: {
    backgroundColor: '#2DB7F2',
    borderRadius: 110,
    borderColor: 'white',
    borderWidth: 4,

  },

  card: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,

  },
  cardDetails: {
    flex: 1,
    gap: 4,

  }

})