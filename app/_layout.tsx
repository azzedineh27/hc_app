import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // ✅ Garde uniquement ce qui est utilisé

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#0a192f",
          borderTopWidth: 0,
          paddingBottom: 5,
          height: 60,
        },
        tabBarActiveTintColor: "#5da9e9",
        tabBarInactiveTintColor: "#CCC",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explorer",
          tabBarIcon: ({ color, size }) => <Ionicons name="search-outline" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => <Ionicons name="bar-chart-outline" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => <Ionicons name="call-outline" size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
