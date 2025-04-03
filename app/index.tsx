import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { findNodeHandle, UIManager } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const fadeAnim = useState(new Animated.Value(0))[0];
  const projectsCount = useState(new Animated.Value(0))[0];
  const clientsCount = useState(new Animated.Value(0))[0];
  const translateX = useState(new Animated.Value(0))[0];
  const inspirationRef = React.useRef<View>(null);

  const pulseAnim = useState(new Animated.Value(1))[0];
  const scrollRef = React.useRef<ScrollView>(null);
  
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

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.15,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();    
  }, []);

  // ✅ Liste des icônes dupliquées pour éviter un vide
  const icons: Array<keyof typeof Ionicons.glyphMap> = [
    "globe-outline",
    "phone-portrait-outline",
    "cloud-outline",
    "shield-checkmark-outline",
    "construct-outline",
    "rocket-outline",
  ];
  


  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.gradientContainer}>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Titre animé */}
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>HC Digital</Animated.Text>
          <Text style={styles.subtitle}>Innovation & Digital Solutions</Text>

          {/* Bouton Explorer */}
          <TouchableOpacity style={styles.button} onPress={() => router.push("/services")}>
            <Text style={styles.buttonText}>Explorer</Text>
          </TouchableOpacity>

          {/* Section Présentation de l’entreprise */}
          <View style={styles.presentationContainer}>
            <Text style={styles.presentationTitle}>Qui sommes-nous ?</Text>
            <Text style={styles.presentationText}>
              HC Digital est une entreprise spécialisée dans les solutions numériques avancées.
              Nous aidons les entreprises à transformer leur présence digitale grâce à des technologies
              innovantes et un design sur mesure.
            </Text>
            <Text style={styles.presentationText}>
              De la création de sites web à l'intégration d'applications complexes, nous offrons
              des services adaptés aux besoins des entreprises modernes.
            </Text>
          </View>

          <View style={styles.valuesStrip}>
            <Text style={styles.valueItem}>🧩 Sur-mesure</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.valueItem}>🚀 Modernité</Text>
            <Text style={styles.separator}>•</Text>
            <Text style={styles.valueItem}>🤝 Engagement</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              const inspirationHandle = findNodeHandle(inspirationRef.current);
              const scrollHandle = findNodeHandle(scrollRef.current);

              if (inspirationHandle && scrollHandle) {
                UIManager.measureLayout(
                  inspirationHandle,
                  scrollHandle,
                  () => console.warn("Erreur de scroll"),
                  (_x, y) => {
                    scrollRef.current?.scrollTo({ y, animated: true });
                  }
                );
              }
            }}
          >
            <Animated.View style={[styles.arrowWrapper, { transform: [{ scale: pulseAnim }] }]}>
              <Ionicons name="chevron-down-outline" size={30} color="#5da9e9" />
            </Animated.View>
          </TouchableOpacity>

          <Animated.View
            ref={inspirationRef}
            style={[styles.inspirationContainer, { opacity: fadeAnim }]}>
            <Text style={styles.inspirationTitle}>“Le futur appartient à ceux qui osent l'imaginer.”</Text>
            <Text style={styles.inspirationQuote}>
              Par HC Digital
            </Text>
          </Animated.View>


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
  presentationContainer: {
    marginTop: 50,
    padding: 20,
    borderRadius: 10,
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
  valuesStrip: {
    marginTop: 30,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    borderRadius: 12,
    width: "90%",
  },
  valueItem: {
    fontSize: 16,
    color: "#5da9e9",
    fontWeight: "600",
    marginHorizontal: 8,
  },
  separator: {
    color: "#5da9e9",
    fontSize: 16,
    fontWeight: "bold",
  },
  arrowWrapper: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "rgba(93, 169, 233, 0.15)", // un bleu plus visible
    padding: 14,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#5da9e9", // bordure bleu claire
    shadowColor: "#5da9e9",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  
  inspirationContainer: {
    marginTop: 75,
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 20,
    width: "90%",
    shadowColor: "#00c6ff",
    shadowOpacity: 0.2,
    shadowRadius: 20,
    backdropFilter: "blur(10px)", // ignoré mais visuellement compensé par opacité
    borderWidth: 1.5,
    borderColor: "rgba(0,198,255,0.2)",
  },
  inspirationTitle: {
    fontSize: 24,
    color: "#00c6ff",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    textShadowColor: "rgba(0,198,255,0.3)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  inspirationQuote: {
    fontSize: 20,
    fontStyle: "italic",
    color: "#e0f7ff",
    textAlign: "center",
    marginBottom: 15,
  },
  // ✅ Compteur Dynamique
  counterContainer: {
    marginTop: 50,
    alignItems: "center",
    padding: 20,
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
    width: 260,
    padding: 20,
    borderRadius: 18,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderWidth: 1.2,
    borderColor: "rgba(93, 169, 233, 0.2)",
    shadowColor: "#5da9e9",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    alignItems: "center",
    backdropFilter: "blur(10px)", // pas supporté en natif mais visuellement utile à noter
  },
  testimonialAvatar: {
    fontSize: 42,
    marginBottom: 10,
  },
  testimonialName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5da9e9",
    marginBottom: 6,
    textShadowColor: "rgba(0, 198, 255, 0.2)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4,
  },
  testimonialReview: {
    fontSize: 15,
    color: "#e0f7ff",
    textAlign: "center",
    fontStyle: "italic",
    lineHeight: 22,
  },  
});


