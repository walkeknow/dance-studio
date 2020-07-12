import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { dark, primary, white } from '../utils/colors'

const CARDS = [
  {
    id: 'address',
    title: require(`../assets/icons/location.png`),
    description: ` Mr. Walter C. Brown
    49 Featherstone Street, LONDON`,
  },
  {
    id: 'phone',
    title: require(`../assets/icons/phoner.png`),
    description: '+44 (0)7123 123456',
  },
  {
    id: 'email',
    title: require(`../assets/icons/mail.png`),
    description: `info@dancestudio.com\ncontact@dancestudio.com`,
  },
]

function Card({ item }) {
  return (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 20,
        }}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            resizeMode: 'contain',
            marginTop: 30,
          }}
          source={item.title}
        />
        <Text style={{ fontSize: 10, textAlign: 'center', marginTop: 5 }}>
          {item.id}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingBottom: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 6, textAlign: 'center', color: dark }}>
          {item.description}
        </Text>
      </View>
    </View>
  )
}

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <FlatList
          data={CARDS}
          numColumns='3'
          renderItem={Card}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.formText}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: primary }}>
            Contact Us
          </Text>
          <Text style={{ fontSize: 10, marginTop: 5 }}>
            Please fill this from in a decent manner
          </Text>
        </View>
        <View style={styles.formInput}>
          <TextInput
            style={styles.input}
            placeholder='Name'
            placeholderTextColor={dark}
          />
          <TextInput
            style={styles.input}
            placeholder='Email Address'
            autoCompleteType='email'
            textContentType='emailAddress'
            placeholderTextColor={dark}
          />
          <TextInput
            style={[styles.input, { height: 60 }]}
            placeholder='Message'
            placeholderTextColor={dark}
            multiline={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 8, color: white }}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 100,
    height: 100,
    color: 'blue',
    backgroundColor: 'white',
    borderStyle: 'solid',
    shadowColor: 'black',
    margin: 10,
  },
  form: {
    flex: 1,
    marginTop: 25,
  },
  formText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formInput: {
    flex: 5,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: white,
    color: 'black',
    paddingStart: 10,
    fontSize: 10,
    margin: 5,
    borderRadius: 8,
    borderColor: 'rgb(226, 226, 226)',
  },
  button: {
    marginTop: 10,
    backgroundColor: primary,
    borderRadius: 10,
    padding: 5,
    paddingStart: 15,
    paddingEnd: 15,
  },
})

export default Contact
