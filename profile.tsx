import { Flame, PersonStanding, Timer, UserRound } from 'lucide-react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function profile() {
  return (
    <View style={{alignItems: 'center', padding: 20}}>
      <View style={styles.container}> <UserRound  color={'black'} size={100} /></View>

      <Text style={styles.text}>Youssef Al mona</Text>

            <View style={{ top: 40, gap: 18 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>History</Text>

        <View style={styles.card}>

          <PersonStanding size={40} style={{ backgroundColor: '#b9e0ff', borderRadius: 8 }} />

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2DB7F2',
    borderRadius: 110,
    borderWidth: 4,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    top: 10,
  },
  card: {
    width: '100%',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 0.8,
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