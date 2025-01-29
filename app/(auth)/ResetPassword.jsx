import { View, Text,StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'

const ResetPassword = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Reset Password</Text>
    <Text style={styles.label}>Email</Text>
    <TextInput style={styles.Input} placeholder='akinrinolaabisolaa@gmail.com' />
    <Text style={StyleSheet.error}> Invalid email</Text>
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
    </TouchableOpacity>
    <Text style={StyleSheet.success}>A password link has been sent to your email </Text> 
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
    label: { fontSize: 16, marginVertical: 10 },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
    },
    error: { color: 'red', fontSize: 12 },
    success: { color: 'green', fontSize: 12, marginTop: 10 },
    button: {
      backgroundColor: '#6C63FF',
      padding: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginVertical: 20,
    },
    buttonText: { color: 'white', fontSize: 16 },
  });

export default ResetPassword