import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Failure({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon name="wifi-off" size={60} style={styles.icon} />
        <Text style={styles.topText}>No connection !</Text>
      </View>
      <View style={styles.bottom}>
        <Image
          source={require('../../Assets/images/fail.jpg')}
          style={styles.image}
        />

        <View style={styles.orderDetails}>
          <Text style={styles.text}>Please check your network connection</Text>
          <Text style={styles.text}>and try again.</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.done}>
          <Text style={styles.doneText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
