import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

function MP({navigation}) {
  const handle = (word) => {
    navigation.navigate('byCategory', {keyword: 'show_meat', word: word});
  };
  return (
    <View style={styles.firstRow}>
      <Text style={styles.first_text}>MEAT & POULTRY</Text>
      <View style={styles.first_img}>
        <TouchableOpacity onPress={() => handle('beef')}>
          <Image
            source={require('../../Assets/images/meat1.png')}
            style={styles.first_images}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handle('lamb')}>
          <Image
            source={require('../../Assets/images/lamb.png')}
            style={styles.first_images}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handle('chicken')}>
          <Image
            source={require('../../Assets/images/chicken.png')}
            style={styles.first_images}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>BEEF</Text>
        <Text style={{marginLeft: 10}}>LAMB</Text>
        <Text>CHICKEN</Text>
      </View>
    </View>
  );
}

export default MP;
