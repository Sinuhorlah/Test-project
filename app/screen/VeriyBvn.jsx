import { View, Text, TextInput } from 'react-native'
import React from 'react'

const VeriyBvn = () => {
  return (
   <View style={styles.container}>
         <Text styles={styles.title}>Verify BVN?</Text>

         <Text style={styles.input}>We need to confirm that thi bvn belongs to the customer. Continue?</Text>
         </View>
  )
}

export default VeriyBvn