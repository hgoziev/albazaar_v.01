import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {getBasketTotal, getSavedTotal} from '../../Reducer/Reducer';

function OrderDetails({deliveryFee, fromSaved}) {
  const basket = useSelector((state) => state.basket);
  const saved = useSelector((state) => state.saved);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Details</Text>
      {fromSaved == true
        ? saved.map((item) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name} x</Text>
              <Text style={styles.itemName}>{item.qty} : </Text>
              <Text style={styles.itemPrice}>₩{item.price}</Text>
            </View>
          ))
        : basket.map((item) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name} x</Text>
              <Text style={styles.itemName}>{item.qty} : </Text>
              <Text style={styles.itemPrice}>₩{item.price}</Text>
            </View>
          ))}
      <Text style={styles.tax}>
        Tax : <Text style={styles.itemPrice}>₩0</Text>
      </Text>
      <Text style={styles.tax}>
        Delivery Fee : <Text style={styles.itemPrice}>₩{deliveryFee}</Text>
      </Text>
      <View style={styles.lineBreaker} />
      <Text style={styles.total}>
        Total :{' '}
        <Text style={{color: 'black'}}>
          ₩
          {fromSaved == true
            ? deliveryFee + getSavedTotal(saved)
            : deliveryFee + getBasketTotal(basket)}
        </Text>
      </Text>
    </View>
  );
}

export default OrderDetails;
