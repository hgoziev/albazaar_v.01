import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {DATABASE_FILL, LOADING} from '../Actons/types';
import axios from 'axios';

import ProfileNavigator from './ProfileNavigator';
import DrawerNavigator from './DrawerNavigator';
import Cart from '../Screens/Cart/Cart';
import MyList from '../Screens/MyList/MyList';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    const load = async () => {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const response = await axios
        .get('https://albazaar.herokuapp.com/api')
        .then((res) => res.data);
      response.map((item, index) => {
        dispatch({
          type: DATABASE_FILL,
          payload: {
            id: item._id,
            image: item.imageUrl,
            name: item.title,
            descShort: item.short,
            descLong: item.long,
            price: item.price,
            category: item.category,
            qty: item.qty,
          },
        });
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
    };

    load();
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'home') {
              (iconName = focused ? 'home' : 'home-outline'), (size = 28);
            } else if (route.name === 'cart') {
              iconName = focused ? 'cart' : 'cart-outline';
              size = 32;
            } else if (route.name === 'mylist') {
              iconName = focused ? 'heart' : 'heart-outline';
              size = 30;
            } else if (route.name === 'profile') {
              iconName = focused ? 'md-person' : 'md-person-outline';
              size = 30;
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
          borderColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: 'white',
            height: 60,
            borderTopWidth: 1,
          },
          keyboardHidesTabBar: true,
        }}>
        <Tab.Screen name="home" component={DrawerNavigator} />
        <Tab.Screen name="cart" component={Cart} />
        <Tab.Screen name="mylist" component={MyList} />
        <Tab.Screen name="profile" component={ProfileNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
