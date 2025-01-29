import { View, Text, StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import React from 'react'

const Pin = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Akinrinola Abisola</Text>
      <TextInput style={styles.input} placeholder='Enter Pin' keyboardType='number-pad' secureTextEntry />
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 18, marginBottom: 20 },
    input: {
      width: '50%',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      textAlign: 'center',
      padding: 10,
      fontSize: 24,
    },
  });

export default Pin;