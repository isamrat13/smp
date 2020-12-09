import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// add this after other import statements
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import HomeScreen from '../screens/components/HomeScreen';
import SampleScreen from '../screens/components/SampleScreen';
import SMP from '../screens/components/SMP';
// add this after other import statements

const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{ showLabel: false }}>
      <Tab.Screen
        name="Meals"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Meals',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SampleScreen"
        component={SampleScreen}
        options={{
          tabBarLabel: 'SMC',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SMP"
        component={SMP}
        options={{
          tabBarLabel: 'SMP',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="inbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SampleScreen2"
        component={SampleScreen}
        options={{
          tabBarLabel: 'users',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
function StackComponents() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={MainTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackComponents;
