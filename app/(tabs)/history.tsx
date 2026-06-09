import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Flame, PersonStanding, Timer } from 'lucide-react-native'

export default function history() {
  return (
    <ScrollView>
      <View style={styles.headerText}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Youssef Almona</Text>
        <Text style={{ fontWeight: 'medium' }}>Premium Member since Jan 2024</Text>

      </View>



      <View style={{ padding: 20, gap: 18 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Activity History</Text>

        <View style={styles.card}>

          <PersonStanding size={40} style={{ backgroundColor: '#b9e0ff', borderRadius: 8 }} />

          <View style={styles.cardDetails}>

            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Morning Trail Run</Text>

            <View style={{ flexDirection: 'row' }}>

              <Timer color={'green'} size={16} />
              <Text style={{ color: 'green' }}>45m</Text>
              <Flame color={'green'} size={16} />
              <Text style={{ color: 'green' }}>360 kcal</Text>

            </View>

          </View>

        </View>





      </View>

    </ScrollView>

  )
}

const styles = StyleSheet.create({
  headerText: {
    flex: 1,
    alignItems: 'center',
    padding: 20,

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

  }

})