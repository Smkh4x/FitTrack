import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AnimatedCircularProgress } from "react-native-circular-progress";
import React from 'react'
import { Flame, Footprints, MapPinPlusInside, Play, Timer } from 'lucide-react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';
import { push } from 'expo-router/build/global-state/routing';


export default function dashboard() {
  return (
<ScrollView>
    <SafeAreaView style={styles.container}>
      
          <AnimatedCircularProgress
        size={220}
        width={10}
        fill={78}
        tintColor="#2DB7F2"
        backgroundColor="#e2d2d2"
      >
        
        {(fill: any) => (
          <View style={styles.CircularCentent}>
            <Footprints color={'blue'}/>
               <Text style={{fontSize: 30, fontWeight: 'bold'}}>{fill}</Text>
               <Text>Steps / 10.000</Text>
          </View> 
        )}
        </AnimatedCircularProgress>

        <View style={styles.cards}>

          <View style={styles.card}>

            <View style={styles.items}>
              <MapPinPlusInside color={'green'} />
              <Text style={{color: 'green'}}>Distance</Text>
            </View>
            <View style={styles.items}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>5.2</Text>
              <Text>km</Text>
            </View>

          </View>

          <View style={styles.card}>

            <View style={styles.items}>
              <Flame  color={'red'}/>
              <Text style={{color: 'red'}}>Calories</Text>
            </View>
            <View style={styles.items}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>5.2</Text>
              <Text>km</Text>
            </View>

          </View>

        </View>

        <View style={styles.card2}>

          <View style={styles.items}>
            <Timer  color={'gray'}/>
            <Text style={{color: 'gray'}}>Activite Time</Text>
          </View>
          <View style={styles.items}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>45</Text>
            <Text>munites totale</Text>
          </View>

        </View>

        <View style={styles.button}>
          <TouchableOpacity 
          style={styles.buttonContent}
          onPress={() => {
            push('/start')

          }}
          >
            <Play size={18}/>
            <Text style={{fontWeight: 'bold', fontSize: 16,}}>Start session</Text>
          </TouchableOpacity>
        </View>
        
   
    </SafeAreaView>
       </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  CircularCentent: {
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  cards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    gap: 10,
      
   },
   card: {
    width: '48%',
    height: 120,
    padding: 20,
    gap: 8,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
   },
   card2: {
    width: '100%',
    height: 120,
    padding: 20,
    gap: 8,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,

   },
   items: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',

   },
   button: {
    backgroundColor: '#2DB7F2',
    width: '100%',
    height: 60,
    borderRadius: 20,
    top: 20,

   },
   buttonContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
   }
})