import { Tabs } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { Home, User } from "lucide-react-native"

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        headerTitle: "Fitness Tracker",
        headerTitleStyle: {
          color: "#000000",
          fontWeight: 'normal',
        },

        headerLeft: () => (
          <View style={{ marginLeft: 15 }}>
            <TouchableOpacity onPress={() => console.log("Go to profile")}>
              <View style={{ backgroundColor: '#2DB7F2', width: 35, height: 35, borderRadius: '100%', }}>

              </View>
            </TouchableOpacity>
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'home',
          tabBarIcon: ({ color, size }) => (
            <Home color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'profile',
          tabBarIcon: ({ color, size }) => (
            <User color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="start"
        options={{
          href: null,
        }}
      />


    </Tabs>

  );
};
