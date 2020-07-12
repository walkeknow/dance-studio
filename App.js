import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Header from './components/Header'
import { primary, accent, dark, white } from './utils/colors'
import About from './components/mockComponents/About'
import Schedule from './components/mockComponents/Schedule'
import Gallery from './components/mockComponents/Gallery'
import Contact from './components/mockComponents/Contact'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerStyle={{
          backgroundColor: primary,
        }}
        drawerContentOptions={{
          activeBackgroundColor: accent,
          activeTintColor: dark,
          inactiveTintColor: white,
        }}
      >
        {/* All components in Drawer are mapped to Header currently, but can be 
        changed once other screens are implemented*/}
        <Drawer.Screen name='Home' component={Header} />
        <Drawer.Screen name='About' component={Header} />
        <Drawer.Screen name='Schedule' component={Header} />
        <Drawer.Screen name='Gallery' component={Header} />
        <Drawer.Screen name='Contact' component={Header} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
