import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import Banner from './Banner'
import Subscribe from './Subscribe'
import Gallery from './Gallery'
import Schedule from './Schedule'
import Contact from './Contact'
import About from './About'

export class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Banner/>
        <Gallery/>
        <Subscribe/>
        <Schedule/>
        <Contact/>
        <About/>
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
