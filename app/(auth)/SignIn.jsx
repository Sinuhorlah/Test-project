import { View, Text, StyleSheet, TouchableOpacity, TextInput,} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title} Vault Mobile>
        {""}
      </Text>
      <Text style={styles.subtitle} SignIn></Text>
      <Text style={styles.label} Email></Text>
      <TextInput style={styles.input} placeholder="Enter your e-mail" />
      <Text style={styles.label} password></Text>
      <TextInput style={styles.input} secureTextEntry placeholder="?" />
      <TouchableOpacity style={styles.button}
        onPress={() => router.push("/screen/HomeScreen")} >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.link}>Forgot password</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 30 },
  label: { fontSize: 16, marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  error: { color: "red", fontSize: 12 },
  success: { color: "green", fontSize: 12, marginTop: 10 },
  button: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: { color: "white", fontSize: 16 },
});

export default SignIn;
