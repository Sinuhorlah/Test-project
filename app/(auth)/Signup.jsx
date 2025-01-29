import React, { useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity,TextInput, Image,} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

const SignUp = () => {
  const router = useRouter();
  const [profilePic, setProfilePic] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access the gallery is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setProfilePic(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join Vault Mobile today</Text>
      <TouchableOpacity style={styles.profilePicContainer} onPress={pickImage}>
        {profilePic ? (
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
        ) : (
          <Icon name="camera-plus" size={40} color="#6C63FF" />
        )}
      </TouchableOpacity>

      <View style={styles.inputGroup}>
        <Icon name="account-outline"size={20} color="#6C63FF"style={styles.icon} />
        <TextInput style={styles.input} placeholder="First Name" />
      </View>
      <View style={styles.inputGroup}>
        <Icon name="account-outline"size={20} color="#6C63FF"style={styles.icon} />
        <TextInput style={styles.input} placeholder="Last Name" />
      </View>
      <View style={styles.inputGroup}>
        <Icon
          name="email-outline"
          size={20}
          color="#6C63FF"
          style={styles.icon}
        />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      </View>
      <View style={styles.inputGroup}>
        <Icon name="lock-outline" size={20} color="#6C63FF" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/ChoosePassword")} >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/SignIn")}>
        <Text style={styles.link}>Already have an account?{" "}
          <Text style={styles.linkHighlight}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  profilePicContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E6E6FA",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    marginVertical: 8,
    paddingHorizontal: 10,
    width: "100%",
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
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#666",
    fontSize: 14,
  },
  linkHighlight: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
});

export default SignUp;
