import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

import styles from './styles';
import BestSelling from '../../Components/BestSelling/BestSelling';
import Dairy from '../../Components/Dairy/Dairy';
import Cans from '../../Components/Cans/Cans';
import Header from '../../Components/Header/Header';
import MP from '../../Components/MP/MP';
import TopBanner from '../../Components/TopBanner/TopBanner';
import Bread from '../../Components/Bread/Bread';
import Drinks from '../../Components/Drinks/Drinks';
import Fruit from '../../Components/Fruit/Fruit';
import Frozen from '../../Components/Frozen/Frozen';
import Sweet from '../../Components/Sweet/Sweet';
import Spice from '../../Components/Spice/Spice';

function Home({navigation}) {
  const searching = useSelector((state) => state.searching);
  const loading = useSelector((state) => state.loading);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}>
      <View style={searching ? styles.header : styles.header1}>
        <Header navigation={navigation} />
      </View>
      {loading ? (
        <Image
          source={require('../../Assets/images/d.gif')}
          width={'100%'}
          height={'100%'}
          resizeMode="center"
          style={{alignSelf: 'center', justifyContent: 'center', flex: 1}}
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
            <View style={styles.category}>
              <Bread navigation={navigation} />
            </View>
            <View style={styles.category}>
              <Drinks navigation={navigation} />
            </View>
            <View style={styles.category}>
              <Fruit navigation={navigation} />
            </View>
            <View style={styles.category}>
              <Frozen navigation={navigation} />
            </View>
            <View style={styles.category}>
              <Sweet navigation={navigation} />
            </View>
            <View style={styles.category}>
              <Spice navigation={navigation} />
            </View>
          </ScrollView>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

export default Home;
