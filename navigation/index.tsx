import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import LoginView from 'screens/LoginView'
import SplashView from 'screens/SplashView'
import { MessageDialog } from 'components'

const Stack = createNativeStackNavigator<{
  Splash: undefined
  Signin: undefined
}>()

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'Splash'}>
      <Stack.Screen name="Splash" component={SplashView} />
      <Stack.Screen name="Signin" component={LoginView} />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <MessageDialog />
    </NavigationContainer>
  )
}
