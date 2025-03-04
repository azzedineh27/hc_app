import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Bienvenue sur le Dashboard 📊</Text>
      <Button title="Retour à l'accueil" onPress={() => router.push("/")} />
    </View>
  );
}
