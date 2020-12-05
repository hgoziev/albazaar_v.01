import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../Screens/Profile/Profile';

const Stack = createStackNavigator();
const ProfileNavigator = () => (
  <Stack.Navigator headerMode="none" initialRouteName="profile_nav">
    <Stack.Screen name="profile_nav" component={Profile} />
  </Stack.Navigator>
);

export default ProfileNavigator;
