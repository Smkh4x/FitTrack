import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function history() {
  return (
    <ScrollView>
      <View style={styles.headerText}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Youssef Almona</Text>
        <Text style={{ fontWeight: 'medium' }}>Premium Member since Jan 2024</Text>

      </View>

      

      <View style={{padding: 20}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Activity History</Text>

        <View><Text>1</Text></View>
        <View><Text>1</Text></View>
        <View><Text>1</Text></View>

      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  headerText: {
    flex: 1,
    alignItems: 'center',
    padding: 20,

  }

})