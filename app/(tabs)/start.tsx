import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { CirclePause, CircleStop, Flame, MapPinPlusInside, Pause, Timer } from 'lucide-react-native'
import { push } from 'expo-router/build/global-state/routing'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function start() {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <AnimatedCircularProgress
                    size={220}
                    width={10}
                    fill={78}
                    tintColor="#2DB7F2"
                    backgroundColor="#e2d2d2"
                >

                    {() => (
                        <View style={styles.CircularCentent}>

                            <Text style={{ fontSize: 50, fontWeight: 'bold' }}>22:23</Text>

                        </View>
                    )}
                </AnimatedCircularProgress>

                <View style={styles.cards}>

                    <View style={styles.card}>

                        <View style={styles.items}>
                            <MapPinPlusInside color={'green'} />
                            <Text style={{ color: 'green' }}>Distance</Text>
                        </View>
                        <View style={styles.items}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>8.2</Text>
                            <Text>km</Text>
                        </View>

                    </View>

                    <View style={styles.card}>

                        <View style={styles.items}>
                            <Timer color={'gray'} />

                            <Text style={{ color: 'gray' }}>avg/pace</Text>
                        </View>
                        <View style={styles.items}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>522</Text>
                            <Text>min/km</Text>
                        </View>

                    </View>

                    <View style={styles.card}>

                        <View style={styles.items}>
                            <Flame color={'red'} />
                            <Text style={{ color: 'red' }}>Energy/Bum</Text>
                        </View>
                        <View style={styles.items}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>423</Text>
                            <Text>kcal</Text>
                        </View>

                    </View>

                    <View style={styles.card}>

                        <View style={styles.items}>
                            <Flame color={'red'} />
                            <Text style={{ color: 'red' }}>Elevation</Text>
                        </View>
                        <View style={styles.items}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>122</Text>
                            <Text>m</Text>
                        </View>

                    </View>

                    <View style={styles.card2}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <CirclePause />
                            <Text style={{ fontWeight: 'bold' }}>Pause</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={styles.card2}>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <CircleStop color={'red'} />
                            <Text style={{ color: 'red', fontWeight: 'bold' }}>Stop</Text>
                        </TouchableOpacity>


                    </View>

                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.buttonContent}
                        onPress={() => {
                            push('/dashboard')

                        }}
                    >
                        <Pause size={18} />
                        <Text style={{ fontWeight: 'bold', fontSize: 16, }}>Resume Workout</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
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
        padding: 10,

    },
    card: {
        width: '48%',
        height: 100,
        padding: 20,
        gap: 8,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
        elevation: 5,
    },
    card2: {
        flex: 1,
        width: '48%',
        height: 120,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 20,
        borderWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
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