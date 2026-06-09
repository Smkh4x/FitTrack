import { Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "Fitness Tracker",
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#00A74B",
        },

        headerRight: () => (
          <View style={{ marginRight: 15 }}>
            <TouchableOpacity onPress={() => console.log("Go to profile")}>
            <View style={{backgroundColor: '#555454', width: 35, height: 35, borderRadius: '100%',}}></View>
            </TouchableOpacity>
          </View>
        ),
      }}
    />
  );
}