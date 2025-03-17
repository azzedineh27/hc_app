import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ContactScreen() {
  const handleEmailContact = () => {
    const subject = "Demande de contact - Projet BuildCorp";
    const body = `Bonjour,%0D%0A%0D%0AJe souhaite discuter de mon projet avec vous.%0D%0A%0D%0AMerci de me recontacter.%0D%0A%0D%0ACordialement.`;
    const mailtoURL = `mailto:contact@buildcorp.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    Linking.openURL(mailtoURL).catch(() => alert("Impossible d'ouvrir l'application e-mail."));
  };

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.container}>
      <Text style={styles.title}>Discutons de votre projet</Text>
      <Text style={styles.subtitle}>
        Expliquez-nous brièvement votre projet et contactez-nous pour en discuter.
      </Text>

      {/* ✅ Section Pourquoi Nous Contacter ? */}
      <View style={styles.whyContactContainer}>
        <Text style={styles.sectionTitle}>Pourquoi nous contacter ?</Text>
        <Text style={styles.whyText}>✅ Besoin d’un devis personnalisé</Text>
        <Text style={styles.whyText}>✅ Vous avez un projet digital en tête ?</Text>
        <Text style={styles.whyText}>✅ Conseils sur la meilleure solution pour votre entreprise</Text>
        <Text style={styles.whyText}>✅ Collaboration et partenariats</Text>
      </View>

      {/* ✅ Bouton de Contact MailTo */}
      <TouchableOpacity style={styles.button} onPress={handleEmailContact}>
        <Text style={styles.buttonText}>📧 Nous Contacter</Text>
      </TouchableOpacity>

      {/* ✅ Section Nos Réseaux Sociaux */}
      <View style={styles.socialContainer}>
        <Text style={styles.sectionTitle}>Suivez-nous</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/company/buildcorp")}>
            <Text style={styles.socialIcon}>🔗 LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.twitter.com/buildcorp")}>
            <Text style={styles.socialIcon}>🐦 Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/buildcorp")}>
            <Text style={styles.socialIcon}>📸 Instagram</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#5da9e9",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ccc",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  // ✅ Section Pourquoi Nous Contacter ?
  whyContactContainer: {
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
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
});
