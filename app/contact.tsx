import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Animated } from "react-native"; // ✅ ajouté Animated
import { LinearGradient } from "expo-linear-gradient";

export default function ContactScreen() {
  const fadeAnim = useState(new Animated.Value(0))[0]; // ✅ Animation

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleEmailContact = () => {
    const subject = "Demande de contact - Projet HC Digital";
    const body = `Bonjour,%0D%0A%0D%0AJe souhaite discuter de mon projet avec vous.%0D%0A%0D%0AMerci de me recontacter.%0D%0A%0D%0ACordialement.`;
    const mailtoURL = `mailto:contact@HCDigital.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    Linking.openURL(mailtoURL).catch(() => alert("Impossible d'ouvrir l'application e-mail."));
  };

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.container}>
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>Discutons</Animated.Text>
      <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
        Expliquez-nous brièvement votre projet et contactez-nous pour en discuter.
      </Animated.Text>


      {/* ✅ Section Pourquoi Nous Contacter ? */}
      <View style={styles.whyContactContainer}>
        <Text style={styles.sectionTitle}>Pourquoi nous contacter ?</Text>        
        <Text style={styles.whyText}>✅ Un futur projet digital en tête ?</Text>
        <Text style={styles.whyText}>✅ Besoin d’un devis personnalisé</Text>
        <Text style={styles.whyText}>✅ Collaboration et partenariats</Text>
      </View>

      {/* ✅ Bouton de Contact MailTo */}
      <TouchableOpacity style={styles.button} onPress={handleEmailContact}>
        <Text style={styles.buttonText}>📧 Nous Contacter</Text>
      </TouchableOpacity>

      {/* ✅ Section Site Web */}
      <View style={styles.websiteContainer}>
        <Text style={styles.sectionTitle}>🌐 Découvrez notre site web</Text>
        <Text style={styles.websiteText}>
          Naviguez sur notre site pour explorer nos services, nos projets, et en savoir plus sur notre vision.
        </Text>
        <TouchableOpacity
          style={styles.websiteButton}
          onPress={() => Linking.openURL("https://www.HCDigital.com")}
        >
          <Text style={styles.websiteButtonText}>🔗 Accéder à HC Digital.com</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialIcons}>
        <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL("https://www.linkedin.com/company/HC Digital")}>
          <Text style={styles.socialButtonText}>🔗 LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL("https://www.twitter.com/HC Digital")}>
          <Text style={styles.socialButtonText}>🐦 Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL("https://www.instagram.com/HC Digital")}>
          <Text style={styles.socialButtonText}>📸 Instagram</Text>
        </TouchableOpacity>
      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#5da9e9",
    marginBottom: 10,
    marginTop: 45,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#ccc",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  
  // ✅ Section Pourquoi Nous Contacter ?
  whyContactContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#5da9e9",
    textAlign: "center",
    marginBottom: 10,
  },
  whyText: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 5,
  },
  // ✅ Bouton Contact
  button: {
    backgroundColor: "#007acc",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    width: "90%",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
    // Section Site Web
  websiteContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    alignItems: "center",
    width: "90%",
  },
  websiteText: {
    fontSize: 16,
    color: "#CCC",
    textAlign: "center",
    marginVertical: 10,
    lineHeight: 22,
  },
  websiteButton: {
    backgroundColor: "#007acc",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  websiteButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  // ✅ Section Réseaux Sociaux
  socialContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    width: "90%",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  socialIcon: {
    fontSize: 16,
    color: "#5da9e9",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  // Réseaux sociaux en boutons
socialButton: {
  backgroundColor: "#1e2a3a",
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderRadius: 8,
  marginHorizontal: 5,
},
socialButtonText: {
  color: "#5da9e9",
  fontSize: 14,
  fontWeight: "bold",
},
});
