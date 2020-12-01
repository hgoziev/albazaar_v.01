import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Image,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import BestSelling from '../../Components/BestSelling/BestSelling';
import Dairy from '../../Components/Dairy/Dairy';
import Cans from '../../Components/Cans/Cans';
import Header from '../../Components/Header/Header';
import MP from '../../Components/MP/MP';
import TopBanner from '../../Components/TopBanner/TopBanner';
import {DATABASE_FILL} from '../../Actons/types';

function Home({navigation}) {
  const searching = useSelector((state) => state.searching);
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);
  const database = useSelector((state) => state.database);
  const dispatch = useDispatch();

  //load data from mongodb
  const load = async () => {
    try {
      setLoading(true);
      const response = await axios
        .get('https://albazaar.herokuapp.com/api')
        .then((res) => res.data);

      //store data to Asyncstorage
      await AsyncStorage.setItem('BIG_DATA', JSON.stringify(response));

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  //get data from Asyncstorage
  const getFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('BIG_DATA');
      const gotValues = JSON.parse(value);

      if (gotValues !== null) {
        //store data to redux store
        gotValues.map((item, index) => {
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
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    load();
    getFromStorage();
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}>
      <View style={searching ? styles.header : styles.header1}>
        <Header navigation={navigation} />
      </View>
      {loading ? (
        <Image
          source={require('../../Assets/images/gif.gif')}
          width={70}
          height={70}
          resizeMode="center"
        />
      ) : (
        <View style={{flex: 0.92}}>
          <ScrollView>
            <View style={{height: 200}}>
              <TopBanner navigation={navigation} />
            </View>
            <View style={{height: 170}}>
              <MP navigation={navigation} />
            </View>
            <View style={styles.category}>
              <BestSelling navigation={navigation} />
            </View>

            <View style={styles.category}>
              <Dairy navigation={navigation} />
            </View>
            <View style={styles.category}>
              <Cans navigation={navigation} />
            </View>
          </ScrollView>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  category: {
    height: 330,
    marginBottom: 20,
  },
  header: {
    flex: 0.1,
  },
  header1: {
    flex: 0.08,
  },
});
