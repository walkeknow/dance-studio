import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Home from './Home'
import { dark, accent } from '../utils/colors'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderLogo from './HeaderLogo'

const Stack = createStackNavigator()

function Header({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        if (route.name === 'Home') {
          return {
            headerTitle: (props) => <HeaderLogo {...props} />,
            headerStyle: {
              backgroundColor: dark,
              shadowColor: dark,
            },
            headerLeft: () => (
              <TouchableOpacity
                style={{ marginStart: 20 }}
                onPress={() => navigation.openDrawer()}
              >
                <Ionicons name='ios-menu' size={30} color={accent} />
              </TouchableOpacity>
            ),
          }
        }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}

export default Header
