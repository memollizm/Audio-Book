// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Cart, Details, Search } from './screens';
import SearchDetails from './screens/SearchDetails';
import Details2 from './screens/Details2';
import Details3 from './screens/Details3';
import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTintColor: 'white',
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: '#FF7754' },
            headerTitle: () => (
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>
                Sepet
              </Text>
            ),
            headerLeft: () => {
              const navigation = useNavigation();
              return (
                <TouchableOpacity style={{ paddingLeft: 8 }} onPress={() => navigation.goBack()}>
                  <Ionicons name="close" size={26} color="white" />
                </TouchableOpacity>
              );
            },
            headerRight: () => (
              <TouchableOpacity style={{ paddingRight: 8 }}>
                <Ionicons name="trash" size={24} color="white" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details2"
          component={Details2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details3"
          component={Details3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
