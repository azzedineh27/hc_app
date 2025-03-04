import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const router = useRouter();
  const fadeAnim = useState(new Animated.Value(0))[0]; // Animation d'apparition du texte
  const projectsCount = useState(new Animated.Value(0))[0];
  const clientsCount = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Animation des compteurs dynamiques
    Animated.timing(projectsCount, {
      toValue: 50,
      duration: 3000,
      useNativeDriver: false,
    }).start();

    Animated.timing(clientsCount, {
      toValue: 30,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Titre animé */}
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>BuildCorp</Animated.Text>
          <Text style={styles.subtitle}>Innovation & Digital Solutions</Text>

          {/* Bouton Explorer */}
          <TouchableOpacity style={styles.button} onPress={() => router.push("/explore")}>
            <Text style={styles.buttonText}>Explorer</Text>
          </TouchableOpacity>

          {/* Section Présentation de l’entreprise */}
          <View style={styles.presentationContainer}>
            <Text style={styles.presentationTitle}>Qui sommes-nous ?</Text>
            <Text style={styles.presentationText}>
              BuildCorp est une entreprise spécialisée dans les solutions numériques avancées.
              Nous aidons les entreprises à transformer leur présence digitale grâce à des technologies
              innovantes et un design sur mesure.
            </Text>
            <Text style={styles.presentationText}>
              De la création de sites web à l'intégration d'applications complexes, nous offrons
              des services adaptés aux besoins des entreprises modernes.
            </Text>
          </View>

          {/* Section Nos Services */}
          <View style={styles.servicesContainer}>
            <Text style={styles.sectionTitle}>Nos Services</Text>
            <View style={styles.serviceRow}>
              <View style={styles.serviceItem}>
                <Text style={styles.serviceIcon}>💻</Text>
                <Text style={styles.serviceTitle}>Développement Web</Text>
              </View>
              <View style={styles.serviceItem}>
                <Text style={styles.serviceIcon}>📱</Text>
                <Text style={styles.serviceTitle}>Apps Mobiles</Text>
              </View>
            </View>
            <View style={styles.serviceRow}>
              <View style={styles.serviceItem}>
                <Text style={styles.serviceIcon}>☁️</Text>
                <Text style={styles.serviceTitle}>Solutions Cloud</Text>
              </View>
              <View style={styles.serviceItem}>
                <Text style={styles.serviceIcon}>🤖</Text>
                <Text style={styles.serviceTitle}>Intelligence Artificielle</Text>
              </View>
            </View>
          </View>

          {/* Section Compteur Dynamique */}
          <View style={styles.counterContainer}>
            <Text style={styles.sectionTitle}>Nos Réalisations</Text>
            <View style={styles.counterRow}>
              <View style={styles.counterItem}>
                <Animated.Text style={styles.counterNumber}>
                  {projectsCount.interpolate({
                    inputRange: [0, 50],
                    outputRange: ["0+", "50+"],
                  })}
                </Animated.Text>
                <Text style={styles.counterText}>Projets réalisés</Text>
              </View>
              <View style={styles.counterItem}>
                <Animated.Text style={styles.counterNumber}>
                  {clientsCount.interpolate({
                    inputRange: [0, 30],
                    outputRange: ["0+", "30+"],
                  })}
                </Animated.Text>
                <Text style={styles.counterText}>Clients satisfaits</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#FFF",
    fontFamily: "Lobster",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#CCC",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007acc",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  // Présentation
  presentationContainer: {
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "90%",
  },
  presentationTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5da9e9",
    textAlign: "center",
    marginBottom: 10,
  },
  presentationText: {
    fontSize: 16,
    color: "#f0f8ff",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 24,
  },
  // Services
  servicesContainer: {
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    width: "90%",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5da9e9",
    textAlign: "center",
    marginBottom: 15,
  },
  serviceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  serviceItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  serviceIcon: {
    fontSize: 40,
    marginBottom: 5,
  },
  serviceTitle: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  // Compteur Dynamique
  counterContainer: {
    marginTop: 50,
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 15,
    width: "90%",
    maxWidth: 500,
  },
  counterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 15,
  },
  counterItem: {
    alignItems: "center",
  },
  counterNumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFF",
  },
  counterText: {
    fontSize: 16,
    color: "#CCC",
  },
});
