import React from "react";
import {View,Text,TextInput,TouchableOpacity, StyleSheet, FlatList,} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";

const customers = [
  {
    id: "1",
    name: "Faluyi Michael",
    date: "10-Jul-24",
    progress: "80%",
    initials: "FM",
  },
];

const MyCustomers = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <TouchableOpacity onPress={() => router.back()}>
       <Icon name="arrow-left" size={24} color="#333" />
       </TouchableOpacity>
      <Text style={styles.headerText}>My Customers</Text>
       <Icon name="plus" size={24} color="#333" onPress={() => router.push("/screen/AddCustomer")} />
       <Icon name="dots-horizontal" size={24} color="#333" />
      </View>

      <View style={styles.filterSearchContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Label ▼</Text>
        </TouchableOpacity>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>


      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.customerCard}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{item.initials}</Text>
            </View>
            <View style={styles.customerInfo}>
              <Text style={styles.customerName}>{item.name}</Text>
              <Text style={styles.customerDate}>{item.date}</Text>
            </View>
            <Text style={styles.progress}>{item.progress}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  filterSearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: "#EDE7F6",
    padding: 8,
    borderRadius: 6,
    marginRight: 10,
  },
  filterText: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  customerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E5F5",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D1C4E9",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
  customerInfo: {
    flex: 1,
    marginLeft: 10,
  },
  customerName: {
    fontWeight: "bold",
    color: "#333",
  },
  customerDate: {
    color: "#666",
  },
  progress: {
    color: "#6C63FF",
    fontWeight: "bold",
  },
});

export default MyCustomers;