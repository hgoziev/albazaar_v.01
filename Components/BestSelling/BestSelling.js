import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_TO_BASKET} from '../../Actons/types';

function BestSelling({navigation}) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const database = useSelector((state) => state.database);

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
          },
        });
      }
    };

    if (item.category === 'best') {
      return (
        <View style={styles.bestContainer}>
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
            <Image source={{uri: item.image}} style={styles.img} />
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
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>BEST SELLING</Text>
        <TouchableOpacity
          style={styles.viewAllContainer}
          onPress={() =>
            navigation.navigate('byCategory', {keyword: 'show_best'})
          }>
          <Text>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={database}
        renderItem={renderItem}
        keyExtractor={(item) => item.i}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={true}
      />
    </View>
  );
}

export default BestSelling;
