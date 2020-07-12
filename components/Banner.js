import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { white, accent } from '../utils/colors'

const Banner = () => {
  return (
    <ImageBackground
      source={require('../assets/images/banner-bg.png')}
      style={styles.bannerContainer}
    >
      <View style={styles.bannerText}>
        <Text style={{ fontSize: 35, fontWeight: '500', color: white }}>
          Dance
        </Text>
        <Text style={{ fontSize: 35, fontWeight: '500', color: accent }}>
          Studio
        </Text>
        <Text style={{ fontSize: 10, color: white }}>
          A Complete Dance Class
        </Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={{ fontSize: 10 }}>Join Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bannerControls}></View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    height: 250,
    resizeMode: 'contain',
    flexDirection: 'row',
  },
  bannerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerControls: {
    flex: 1,
  },
  bannerButton: {
    margin: 15,
    backgroundColor: accent,
    borderRadius: 10,
    padding: 5,
    paddingStart: 15,
    paddingEnd: 15,
  },
})

export default Banner
