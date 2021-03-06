import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Header from './components/Header'
import { primary, accent, dark, white } from './utils/colors'

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
        <Drawer.Screen name='Home' component={Header} />
        <Drawer.Screen name='About' component={Header} />
        <Drawer.Screen name='Schedule' component={Header} />
        <Drawer.Screen name='Gallery' component={Header} />
        <Drawer.Screen name='Contact' component={Header} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
