import {ADD_TO_BASKET} from '../../Actons/types';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {FlatList, Text, Image, TouchableOpacity, View} from 'react-native';

function Show_Meat({navigation, word}) {
  const basket = useSelector((state) => state.basket);
  const database = useSelector((state) => state.database);
  const dispatch = useDispatch();
  let Arr = [];
  basket.map((item) => {
    Arr.push(item.id);
  });

  const renderItem = ({item}) => {
    const addToBasket = () => {
      if (!Arr.includes(item.id)) {
        dispatch({
          type: ADD_TO_BASKET,
          itemData: {
            id: item.id,
            image: item.image,
            name: item.name,
            descShort: item.descShort,
            price: item.price,
            qty: item.qty,
            descLong: item.descLong,
            rating: item.rating,
          },
        });
      }
    };
    if (word == 'none') {
      if (
        item.category === 'beef' ||
        item.category === 'chicken' ||
        item.category === 'lamb'
      ) {
        return (
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('selectedItem', {
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  descShort: item.descShort,
                  price: item.price,
                  qty: item.qty,
                  descLong: item.descLong,
                  rating: item.rating,
                })
              }>
              <Image source={{uri: item.image}} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.descShort}</Text>
            <Text style={styles.itemPrice}>₩{item.price}</Text>
            <TouchableOpacity style={styles.addBtn} onPress={addToBasket}>
              <Text style={styles.addBtnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else if (word == 'beef') {
      if (item.category == 'beef') {
        return (
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('selectedItem', {
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  descShort: item.descShort,
                  price: item.price,
                  qty: item.qty,
                  descLong: item.descLong,
                  rating: item.rating,
                })
              }>
              <Image source={{uri: item.image}} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.descShort}</Text>
            <Text style={styles.itemPrice}>₩{item.price}</Text>
            <TouchableOpacity style={styles.addBtn} onPress={addToBasket}>
              <Text style={styles.addBtnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else if (word == 'lamb') {
      if (item.category == 'lamb') {
        return (
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('selectedItem', {
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  descShort: item.descShort,
                  price: item.price,
                  qty: item.qty,
                  descLong: item.descLong,
                  rating: item.rating,
                })
              }>
              <Image source={{uri: item.image}} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.descShort}</Text>
            <Text style={styles.itemPrice}>₩{item.price}</Text>
            <TouchableOpacity style={styles.addBtn} onPress={addToBasket}>
              <Text style={styles.addBtnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        );
      }
    } else if (word === 'chicken') {
      if (item.category === 'chicken') {
        return (
          <View style={styles.scrollContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('selectedItem', {
                  id: item.id,
                  image: item.image,
                  name: item.name,
                  descShort: item.descShort,
                  price: item.price,
                  qty: item.qty,
                  descLong: item.descLong,
                  rating: item.rating,
                })
              }>
              <Image source={{uri: item.image}} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDesc}>{item.descShort}</Text>
            <Text style={styles.itemPrice}>₩{item.price}</Text>
            <TouchableOpacity style={styles.addBtn} onPress={addToBasket}>
              <Text style={styles.addBtnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }
  };

  return (
    <FlatList
      data={database}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      horizontal={false}
    />
  );
}

export default Show_Meat;
