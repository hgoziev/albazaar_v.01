import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  REMOVE_FROM_BASKET,
  ADD_TO_BASKET,
  INCREMENT,
  DECREMENT,
} from '../../Actons/types';

function SavedItems({name, price, image, descShort, id, qty}) {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch({type: REMOVE_FROM_BASKET, id: id});
    dispatch({type: 'QTY_REMOVE'});
  };

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.itemDetails}>
        <Image source={{uri: image}} style={styles.image} />

        <View>
          <Text style={styles.name}>
            {name.length < 14 ? name : name.substring(0, 15)}
          </Text>
          <Text style={styles.price}>₩{price}</Text>
          <Text style={styles.desc}>
            {descShort.length < 16 ? descShort : descShort.substring(0, 17)}
          </Text>
        </View>
      </TouchableOpacity>

      <View>
        <View style={styles.addDelContainer}>
          <TouchableOpacity
            style={styles.qBtn}
            onPress={() => dispatch({type: DECREMENT, id: id})}>
            <Ionicon name="remove" size={26} />
          </TouchableOpacity>

          <Text style={styles.counter}>{qty}</Text>
          <TouchableOpacity
            style={styles.qBtn}
            onPress={() => dispatch({type: INCREMENT, id: id})}>
            <Ionicon name="add-outline" size={26} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={removeFromBasket} style={styles.remove}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SavedItems;
