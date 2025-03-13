import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();
  const fadeAnim = useState(new Animated.Value(0))[0];
  const projectsCount = useState(new Animated.Value(0))[0];
  const clientsCount = useState(new Animated.Value(0))[0];
  const translateX = useState(new Animated.Value(500))[0]; // ✅ Déclaration correcte de translateX

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

    // ✅ Animation continue de la bande défilante
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -500,
          duration: 6000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 500,
          duration: 0, // ✅ Remet immédiatement l'animation au début
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Titre animé */}
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>BuildCorp</Animated.Text>
          <Text style={styles.subtitle}>Innovation & Digital Solutions</Text>

          {/* Bouton Explorer */}
          <TouchableOpacity style={styles.button} onPress={() => router.push("/services")}>
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

          {/* ✅ Bande défilante d'icônes */}
          <View style={styles.marqueeContainer}>
            <Animated.View style={[styles.marquee, { transform: [{ translateX }] }]}>
              <Ionicons name="globe-outline" size={32} color="#5da9e9" style={styles.marqueeIcon} />
              <Ionicons name="phone-portrait-outline" size={32} color="#5da9e9" style={styles.marqueeIcon} />
              <Ionicons name="cloud-outline" size={32} color="#5da9e9" style={styles.marqueeIcon} />
              <Ionicons name="shield-checkmark-outline" size={32} color="#5da9e9" style={styles.marqueeIcon} />
              <Ionicons name="construct-outline" size={32} color="#5da9e9" style={styles.marqueeIcon} />
              <Ionicons name="rocket-outline" size={32} color="#5da9e9" style={styles.marqueeIcon} />
            </Animated.View>
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

          {/* ✅ Section Avis Clients */}
          <View style={styles.testimonialsContainer}>
            <Text style={styles.sectionTitle}>Nos Clients Témoignent</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.testimonialsScroll}>
              <View style={styles.testimonialCard}>
                <Text style={styles.testimonialAvatar}>👩‍💻</Text>
                <Text style={styles.testimonialName}>Alice Dupont</Text>
                <Text style={styles.testimonialReview}>"Une équipe incroyable qui a su transformer notre vision en réalité !"</Text>
              </View>
              <View style={styles.testimonialCard}>
                <Text style={styles.testimonialAvatar}>👨‍💼</Text>
                <Text style={styles.testimonialName}>Jean Martin</Text>
                <Text style={styles.testimonialReview}>"Un service rapide et efficace. Je recommande à 100% !"</Text>
              </View>
              <View style={styles.testimonialCard}>
                <Text style={styles.testimonialAvatar}>👩‍🎨</Text>
                <Text style={styles.testimonialName}>Sophie Leclerc</Text>
                <Text style={styles.testimonialReview}>"Une collaboration enrichissante et un site magnifique."</Text>
              </View>
            </ScrollView>
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
    paddingVertical: 40, // ✅ Ajout d'espace en haut
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
    marginTop: 40, // ✅ Ajout d’espace en haut du titre
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
  // ✅ Ajout de sectionTitle pour éviter l'erreur
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5da9e9",
    textAlign: "center",
    marginBottom: 15,
  },
  // ✅ Bande défilante animée
  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
    paddingVertical: 15,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  marquee: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20, // ✅ Ajout d'un espacement pour remplir la largeur
  },
  marqueeIcon: {
    fontSize: 36, // ✅ Augmentation de la taille des icônes pour un meilleur impact visuel
  },
  // ✅ Présentation de l'entreprise
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
  // ✅ Compteur Dynamique
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
  // ✅ Avis Clients
  testimonialsContainer: {
    marginTop: 50,
    alignItems: "center",
    paddingVertical: 20,
    width: "90%",
  },
  testimonialsScroll: {
    flexDirection: "row",
    gap: 15,
  },
  testimonialCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  testimonialAvatar: {
    fontSize: 40,
    marginBottom: 5,
  },
  testimonialName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  testimonialReview: {
    fontSize: 16,
    color: "#CCC",
    textAlign: "center",
  },
});


