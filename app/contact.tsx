import { View, Text, StyleSheet } from "react-native";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactez-nous</Text>
      <Text style={styles.text}>📞 Téléphone : +33 6 12 34 56 78</Text>
      <Text style={styles.text}>📧 Email : contact@buildcorp.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a192f",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5da9e9",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: "#FFF",
  },
});
