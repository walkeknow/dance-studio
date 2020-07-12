import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

export class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Text>textInComponent</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Home
