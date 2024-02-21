/* eslint-disable prettier/prettier */
/* call react libraries */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* custom modules */
import About from './android/app/src/views/about';
import MyNavigator from './android/app/src/components/MyNavigator';
import Details from './android/app/src/views/details';
import Index from './android/app/src/views';
import PokemonDetails from './android/app/src/views/PokemonDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerBackVisible: false }}>

      <Stack.Screen
          name="Index"
          component={Index}
          options={{
            headerTitle: props => (
              <MyNavigator navigation={undefined} {...props} />
            ),
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitle: props => (
              <MyNavigator navigation={undefined} {...props} />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: props => (
              <MyNavigator navigation={undefined} {...props} />
            ),
          }}
        />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetails}
          options={{
            headerTitle: props => (
              <MyNavigator navigation={undefined} {...props} />
            ),
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
