import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, Animated, Modal, ImageSourcePropType } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ExploreScreen() {
  const router = useRouter();
  const fadeAnim = useState(new Animated.Value(0))[0];
  const [selectedImage, setSelectedImage] = useState<ImageSourcePropType | null>(null);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  // Liste des projets avec typage correct
  const projects: { image: ImageSourcePropType; title: string; description: string }[] = [
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
    {
      image: require("../assets/images/etudeplus_project.png"),
      title: "Plateforme de Formation pour Étude Plus",
      description: "Développement d’un site web pour une association pour accompagner son nouveau centre de formation.",
    },    
  ];

  // Afficher l'aperçu de l'image
  const openPreview = (image: ImageSourcePropType) => {
    setSelectedImage(image);
  };

  // Fermer l'aperçu
  const closePreview = () => {
    setSelectedImage(null);
  };

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.gradientContainer}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {/* Titre animé */}
          <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Notre Parcours</Animated.Text>
          <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
            Découvrez nos projets les plus emblématiques, réalisés avec expertise et passion.
          </Animated.Text>

          {/* Liste des projets */}
          <FlatList
            data={projects}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => openPreview(item.image)}>
                <View style={styles.projectCard}>
                  <Image source={item.image} style={styles.projectImage} />
                  <View style={styles.projectDetails}>
                    <Text style={styles.projectTitle}>{item.title}</Text>
                    <Text style={styles.projectDescription}>{item.description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
          />

          {/* Aperçu d'image */}
          <Modal visible={selectedImage !== null} transparent animationType="fade">
            <TouchableOpacity style={styles.modalContainer} onPress={closePreview}>
              {selectedImage && <Image source={selectedImage} style={styles.fullImage} />}
            </TouchableOpacity>
          </Modal>

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
  // Aperçu d'image
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "90%",
    height: "70%",
    resizeMode: "contain",
  },
});
