import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (tel: string): boolean => {
    return /^\d{10}$/.test(tel);
  };

  const handleSend = () => {
    if (!name || !email || !tel || !message) {
      Alert.alert("Erreur", "Veuillez remplir tous les champs.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Erreur", "Veuillez entrer un email valide.");
      return;
    }

    if (!validatePhone(tel)) {
      Alert.alert("Erreur", "Veuillez entrer un numéro de téléphone valide (10 chiffres).");
      return;
    }

    Alert.alert("Message Envoyé", "Merci de nous avoir contactés, nous vous répondrons bientôt !");

    // Réinitialiser le formulaire
    setName("");
    setEmail("");
    setTel("");
    setMessage("");
  };

  return (
    <LinearGradient colors={["#0a192f", "#000"]} style={styles.container}>
      <Text style={styles.title}>Contactez-nous</Text>
      <Text style={styles.subtitle}>Nous sommes à votre écoute !</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Votre Nom"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Votre Email"
          placeholderTextColor="#ccc"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Votre Téléphone"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={tel}
          onChangeText={setTel}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Votre Message"
          placeholderTextColor="#ccc"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>

        {/* Bouton Appeler Maintenant */}
        <TouchableOpacity style={styles.callButton} onPress={() => Linking.openURL("tel:+33749082057")}>
          <Text style={styles.buttonText}>📞 Appeler Maintenant</Text>
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
  },
  form: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 12,
    borderRadius: 8,
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007acc",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  callButton: {
    backgroundColor: "#06145b",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
