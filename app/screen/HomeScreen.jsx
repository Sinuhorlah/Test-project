import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
  import { useRouter } from "expo-router";

const HomeScreen = () => {
   const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="cog-outline" size={24} color="#333" style={styles.settingsIcon} />
        <Text style={styles.title}>Vault Mobile</Text>
      </View>

  
      <TouchableOpacity style={styles.card}  
       onPress={() => router.push("/screen/MyCustomer")}  >  
        <Icon name='account-outline' size={24} color='#6C63FF' />
        <Text style={styles.cardText}>Customers</Text>
        <Icon name='chevron-right' size={24} color='#6C63FF' />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Icon name='car-outline' size={24} color='#6C63FF' />
        <Text style={styles.cardText}>Visitation Log</Text>
        <Icon name='chevron-right' size={24} color='#6C63FF' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    position: "relative",
  },
  settingsIcon: {
    position: "absolute",
    left: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9F1FF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
});

export default HomeScreen;
