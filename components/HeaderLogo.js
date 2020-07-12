import React from 'react'
import { View, Text, Image } from 'react-native'

const HeaderLogo = () => {
  return (
    <Image
      style={{ height: 36, resizeMode: 'contain' }}
      source={require('../assets/icons/logo.png')}
    />
  )
}

export default HeaderLogo
