import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import Ionicon from 'react-native-vector-icons/Ionicons';

function DrawerCom({navigation, props}) {
  const user = useSelector((state) => state.user);
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../Assets/images/avatar.jpg')}
        />

        {auth().currentUser ? (
          <View style={styles.textContainer}>
            <Text style={styles.text}>{user.username}</Text>
          </View>
        ) : (
          <View style={styles.textContainer}>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate('signup')}>
              Guest |{' '}
            </Text>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate('login')}>
              Sign In
            </Text>
          </View>
        )}
      </View>
      <DrawerContentScrollView {...props}>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Home"
            onPress={() => navigation.navigate('home')}
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Meat, Poultry & Seafood "
            onPress={() =>
              navigation.navigate('byCategory', {
                keyword: 'show_meat',
                word: 'none',
              })
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item}
          />
        </View>

        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Rice Flour, Pulses & Grains"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_rice'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item}
          />
        </View>

        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Fruits & Vegetables"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_fruits'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item}
          />
        </View>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Bread, Noodle & Pasta"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_bread'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item}
          />
        </View>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Dairy"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_dairy'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>

        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Cans & Jars"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_cans'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Drinks & Beverages"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_drinks'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Sweets & Snacks"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_sweet'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>
        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Spices & Packets"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_spice'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>

        <View style={styles.viewContainer}>
          <Ionicon name="home" color="rgb(28, 200, 95)" size={20} />
          <DrawerItem
            label="Frozen Foods"
            onPress={() =>
              navigation.navigate('byCategory', {keyword: 'show_frozen'})
            }
            activeTintColor="red"
            inactiveTintColor="rgb(30,30,30)"
            style={styles.item2}
          />
        </View>
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerCom;
