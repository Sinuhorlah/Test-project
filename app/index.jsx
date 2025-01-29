import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet,} from "react-native";
import { useRouter } from "expo-router";

const WelcomeScreen = () => {
  const router = useRouter(); 

  const imageUrl = "https://cdni.iconscout.com/illustration/premium/thumb/welcome-board-illustration-download-in-svg-png-gif-file-formats--welcoming-man-greeting-pack-miscellaneous-illustrations-3231454.png";

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: imageUrl }} style={styles.backgroundImage} resizeMode="cover" >
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Vault App</Text>
          <Text style={styles.subtitle}> Secure your data with the ultimate safety and ease.</Text>
          <TouchableOpacity style={styles.button}
            onPress={() => router.push("/(auth)/Signup")} >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default WelcomeScreen;
