import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const ChoosePassword = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Icon name="arrow-left" size={24} color="#6C63FF" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Choose Password</Text>


      <Text style={styles.label}>New Password</Text>
      <View style={styles.inputGroup}>
        <Icon name="lock-outline" size={20} color="#6C63FF" style={styles.icon} />
        <TextInput style={styles.input} secureTextEntry placeholder="Enter new password" />
      </View>

 
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputGroup}>
        <Icon name="lock-outline" size={20} color="#6C63FF" style={styles.icon} />
        <TextInput style={styles.input}secureTextEntry placeholder="Confirm new password" />
      </View>

      <TouchableOpacity style={styles.button}
      onPress={() => router.push('/(auth)/SignIn')}>
        <Text style={styles.buttonText}>Set Password</Text>
      </TouchableOpacity>

     
      <Text style={styles.success}>Password Set successfully. Please log in with your  account.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: "#6C63FF",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
    color: "#333",
  },
  button: {
    backgroundColor: "#6C63FF",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  success: {
    color: "green",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});

export default ChoosePassword;
