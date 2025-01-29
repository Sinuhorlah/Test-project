import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
// import { Icon } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AddCustomer = () => {
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

      <View style={StyleSheet.container}>
        <Text style={styles.title}>Add Customer</Text>
      </View>;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.profilePicContainer}
          onPress={pickImage}
        >
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
          ) : (
            <Icon name="camera-plus" size={40} color="#6C63FF" />
          )}
        </TouchableOpacity>
        <Text style={styles.label}>BVN</Text>
        <TextInput
          style={styles.input}
          placeholder="12345678"
          keyboardType="numeric"
        />

        <Text style={styles.label}>NIN</Text>
        <TextInput
          style={styles.input}
          placeholder="2233445566773"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Surname</Text>
        <TextInput style={styles.input} placeholder="Faluyi Micheal" />

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} placeholder="5th July 1977" />

        <Text style={styles.label}>Gender</Text>
        <TextInput style={styles.input} placeholder="Female" />

        <Text style={styles.label}>Phone 1</Text>
        <TextInput
          style={styles.input}
          placeholder="08041999"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Phone 2</Text>
        <TextInput
          style={styles.input}
          placeholder="0810236508"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="akinrinolaabisolaa@gmail.com"
          keyboardType="email-address"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 40,
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  cameraButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAEA",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  cameraText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  profilePic: {
    width: "100%",
    height: "100%",
  },
  formContainer: {
    backgroundColor: "#FFFF",
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.1,
    paddingTop: 24,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 7,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#F9F9F9",
  },
});

export default AddCustomer;
