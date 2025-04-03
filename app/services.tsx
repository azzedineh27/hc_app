import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native"; // ✅ ajouté Animated
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function ServicesScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* ✅ Animation titre + sous-titre */}
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Nos Services</Animated.Text>
        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
          Découvrez les solutions digitales que nous proposons.
        </Animated.Text>

        {/* Section des services */}
        <View style={styles.serviceCard}>
          <Ionicons name="globe-outline" size={40} color="#5da9e9" style={styles.serviceIcon} />
          <Text style={styles.serviceTitle}>Développement Web</Text>
          <Text style={styles.serviceDescription}>
            Création de sites web performants, modernes et responsifs pour booster votre présence en ligne.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Ionicons name="phone-portrait-outline" size={40} color="#5da9e9" style={styles.serviceIcon} />
          <Text style={styles.serviceTitle}>Développement Mobile</Text>
          <Text style={styles.serviceDescription}>
            Applications mobiles natives et adaptées sur iOS et Android pour toucher plus d'utilisateurs.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Ionicons name="bar-chart-outline" size={40} color="#5da9e9" style={styles.serviceIcon} />
          <Text style={styles.serviceTitle}>Analyse de Données & Outils Sur Mesure</Text>
          <Text style={styles.serviceDescription}>
            Collecte, traitement et visualisation de vos données pour en tirer des dashboards stratégiques.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Ionicons name="help-circle-outline" size={40} color="#5da9e9" style={styles.serviceIcon} />
          <Text style={styles.serviceTitle}>Support sur Nos Outils & Produits</Text>
          <Text style={styles.serviceDescription}>
            Assistance technique, formation et accompagnement sur l’utilisation de nos solutions numériques internes.
          </Text>
        </View>

        {/* Section Pourquoi Nous Choisir */}
        <View style={styles.whyChooseContainer}>
          <Text style={styles.sectionTitle}>Pourquoi nous choisir ?</Text>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#5da9e9" />
            <Text style={styles.benefitText}>Équipe expérimentée & passionnée</Text>
          </View>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#5da9e9" />
            <Text style={styles.benefitText}>Solutions adaptées à votre business</Text>
          </View>
          <View style={styles.benefitItem}>
            <Ionicons name="checkmark-circle-outline" size={24} color="#5da9e9" />
            <Text style={styles.benefitText}>Accompagnement et support continu</Text>
          </View>
        </View>

        {/* Section Notre Processus de Travail */}
        <View style={styles.processContainer}>
          <Text style={styles.sectionTitle}>Notre Processus de Travail</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.processScroll}>
            <View style={styles.processStep}>
              <Ionicons name="chatbubble-outline" size={28} color="#5da9e9" />
              <Text style={styles.processText}>📞 Étape 1: Contactez-nous pour discuter de votre projet.</Text>
            </View>
            <View style={styles.processStep}>
              <Ionicons name="document-text-outline" size={28} color="#5da9e9" />
              <Text style={styles.processText}>📝 Étape 2: Rédaction d’un cahier des charges détaillé.</Text>
            </View>
            <View style={styles.processStep}>
              <Ionicons name="construct-outline" size={28} color="#5da9e9" />
              <Text style={styles.processText}>⚙️ Étape 3: Développement de la solution.</Text>
            </View>
            <View style={styles.processStep}>
              <Ionicons name="rocket-outline" size={28} color="#5da9e9" />
              <Text style={styles.processText}>🚀 Étape 4: Test et mise en production.</Text>
            </View>
            <View style={styles.processStep}>
              <Ionicons name="shield-checkmark-outline" size={28} color="#5da9e9" />
              <Text style={styles.processText}>🔧 Étape 5: Maintenance et support.</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 40,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#5da9e9",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 20,
    color: "#CCC",
    textAlign: "center",
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  serviceCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  serviceIcon: {
    marginBottom: 10,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 16,
    color: "#CCC",
    textAlign: "center",
  },
  // Pourquoi Nous Choisir
  whyChooseContainer: {
    marginTop: 40,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5da9e9",
    textAlign: "center",
    marginBottom: 15,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  benefitText: {
    fontSize: 18,
    color: "#FFF",
    marginLeft: 10,
  },
  // Notre Processus de Travail (horizontal)
  processContainer: {
    marginTop: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
  },
  processScroll: {
    flexDirection: "row",
    gap: 15,
  },
  processStep: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  processText: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    marginTop: 10,
  },
});
