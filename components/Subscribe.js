import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { primary, white, light } from '../utils/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Subscribe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={{ fontSize: 20, fontWeight: '500', color: white }}>
          Stay In Touch
        </Text>
        <View style={{ width: 320 }}>
          <Text
            style={{
              fontSize: 10,
              textAlign: 'center',
              margin: 5,
              color: white,
            }}
          >
            Sign-up with your email address to receive news and updates.
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Email Address' />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { padding: 10 }]}>
            <Text style={{ fontSize: 10, fontWeight: '500' }}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: white,
    color: 'black',
    paddingStart: 10,
    fontSize: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    backgroundColor: light,
  },
})

export default Subscribe
