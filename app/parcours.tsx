import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, Animated } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ExploreScreen() {
  const router = useRouter();
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Liste des projets
  const projects = [
    {
      image: require("../assets/images/project1.png"),
      title: "Modernisation d’un site e-commerce",
      description: "Refonte complète d’un site marchand avec une interface utilisateur optimisée.",
    },
    {
      image: require("../assets/images/project2.png"),
      title: "Développement d’une application mobile",
      description: "Application iOS et Android pour la gestion des commandes en ligne.",
    },
    {
      image: require("../assets/images/project3.png"),
      title: "Plateforme SaaS pour entreprises",
      description: "Solution cloud innovante pour la gestion des workflows professionnels.",
    },
  ];

  // Événements de la timeline
  const timelineEvents = [
    { year: "2018", title: "Création de BuildCorp", description: "Naissance de BuildCorp avec une vision d'innovation technologique." },
    { year: "2020", title: "Premier Grand Projet", description: "Nous avons collaboré avec une startup pour développer une plateforme SaaS." },
    { year: "2022", title: "Expansion Internationale", description: "Ouverture de notre premier bureau à l'étranger et croissance de notre équipe." },
    { year: "2024", title: "Innovation & IA", description: "Intégration de l'Intelligence Artificielle dans nos solutions pour optimiser les performances." },
  ];

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.gradientContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Titre animé */}
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Notre Parcours</Animated.Text>
          <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
            Découvrez quelques-uns de nos projets les plus emblématiques, réalisés avec expertise et passion.
          </Animated.Text>

          {/* Liste des projets */}
          <FlatList
            data={projects}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.projectCard}>
                <Image source={item.image} style={styles.projectImage} />
                <View style={styles.projectDetails}>
                  <Text style={styles.projectTitle}>{item.title}</Text>
                  <Text style={styles.projectDescription}>{item.description}</Text>
                </View>
              </View>
            )}
            scrollEnabled={false}
          />

          {/* Section Timeline */}
          <View style={styles.timelineSection}>
            <Text style={styles.timelineTitle}>L'Évolution de BuildCorp</Text>
            <View style={styles.timeline}>
              <FlatList
                data={timelineEvents}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <View style={styles.timelineItem}>
                    <View style={styles.timelineLine} />
                    <View style={[styles.timelineContent, index % 2 === 0 ? styles.alignLeft : styles.alignRight]}>
                      <Text style={styles.timelineYear}>{item.year}</Text>
                      <Text style={styles.timelineEvent}>{item.title}</Text>
                      <Text style={styles.timelineDescription}>{item.description}</Text>
                    </View>
                  </View>
                )}
                scrollEnabled={false}
                ListFooterComponent={<View style={{ height: 50 }} />}
              />
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
    flex: 1,
    paddingTop: 50, // ✅ Ajout d'un espace global en haut
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#5da9e9",
    marginBottom: 10,
    marginTop: 40, // ✅ Ajout d’un espace sous la navbar
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#CCC",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  // Projets
  projectCard: {
    backgroundColor: "#111",
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    overflow: "hidden",
  },
  projectImage: {
    width: "100%",
    height: 180,
  },
  projectDetails: {
    padding: 15,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  projectDescription: {
    fontSize: 16,
    color: "#AAA",
    marginBottom: 10,
  },
  // Timeline
  timelineSection: {
    paddingVertical: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
    borderRadius: 20,
  },
  timelineTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  timeline: {
    width: "90%",
    position: "relative",
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  timelineLine: {
    width: 4,
    height: "100%",
    backgroundColor: "#5da9e9",
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -2 }],
  },
  timelineContent: {
    width: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 15,
    shadowColor: "white",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  alignLeft: {
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  alignRight: {
    alignSelf: "flex-end",
    marginRight: "5%",
  },
  timelineYear: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5da9e9",
  },
  timelineEvent: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginVertical: 5,
  },
  timelineDescription: {
    fontSize: 16,
    color: "#CCC",
  },
});
