import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { primary, white, accent } from '../utils/colors'

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{ height: 36, resizeMode: 'contain' }}
        source={require('../assets/icons/logo.png')}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </Text>
      <View style={styles.icons}>
        <View style={styles.iconContainer}>
          <Image style={styles.icon} source={require('../assets/icons/fb-black.png')} />
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.icon}  source={require('../assets/icons/twitter-black.png')} />
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.icon}  source={require('../assets/icons/instagram.png')} />
        </View>
        <View style={styles.iconContainer}>
          <Image style={styles.icon}  source={require('../assets/icons/dribble-black.png')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingTop: 30,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: primary,
  },
  text: {
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
    color: white,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
  },
  iconContainer: {
    height: 30,
    width: 30,
    backgroundColor: accent,
    margin: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: 15,
    width: 15
  }
})

export default About
