import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import OnboardingScreen from './src/screens/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isOnboarded, setIsOnboarded] = useState(null);

  useEffect(() => {
    (async () => {
      const flag = await AsyncStorage.getItem('onboarded');
      setIsOnboarded(flag === 'true');
    })();
  }, []);

  if (isOnboarded === null) return null; // or a splash

  if (!isOnboarded) {
    return (
      <SafeAreaProvider>
        <OnboardingScreen onDone={() => setIsOnboarded(true)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
