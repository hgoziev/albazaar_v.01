import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';

export default function Success({navigation, route}) {
  const {orderNo} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon name="check-circle" size={60} style={styles.icon} />
        <Text style={styles.topText}>We have recieved your order!</Text>
      </View>
      <View style={styles.bottom}>
        <Image
          source={require('../../Assets/images/d2.jpg')}
          style={styles.image}
        />

        <View style={styles.orderDetails}>
          <Text style={styles.text}>Products are preparing for you.</Text>
          <Text style={styles.text}>
            Please refer your order number when making
          </Text>
          <Text style={styles.text}>a wire transfer!</Text>
          <Text style={styles.delveryTime}>Order Number : {orderNo}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.done}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
