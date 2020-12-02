import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import AuthNavigator from '../../Navigation/AuthNavigator';

function Profile({navigation}) {
  const signOutUser = () => {
    auth()
      .signOut()
      .then(() => {
        alert('Logged out');
      })
      .catch((error) => {
        if (error) {
          return null;
        }
      });
    navigation.navigate('Home');
  };

  if (!auth().currentUser) {
    return <AuthNavigator />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../../Assets/images/avatar.jpg')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.logoutBtn} onPress={signOutUser}>
            <Text style={styles.logText}>Log Out</Text>
            <Ionicon name="exit-outline" size={22} color="rgb(28, 200, 95)" />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="document-text" size={24} color="rgb(60,60,60)" />
              <Text style={styles.itemText}>Orders</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="settings" size={22} color="rgb(60,60,60)" />
              <Text style={styles.itemText}>Account Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="megaphone" size={22} color="rgb(60,60,60)" />
              <Text style={styles.itemText}>Recommend</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="settings-outline" size={22} />
              <Text style={styles.itemText}>Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="settings-outline" size={22} />
              <Text style={styles.itemText}>Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="settings-outline" size={22} />
              <Text style={styles.itemText}>Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsContainer}>
            <View style={styles.items}>
              <Ionicon name="settings-outline" size={22} />
              <Text style={styles.itemText}>Settings</Text>
            </View>
            <FontAwesome name="angle-right" size={26} style={{}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Profile;
