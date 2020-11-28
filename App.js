import React, {useEffect, useState} from 'react';
import AppNavigator from './Navigation/AppNavigator';
import store from './Store/Store';
import {Provider} from 'react-redux';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const [data, setData] = useState([]);
  let arr = [];
  const show = async () => {
    try {
      const response = await axios
        .get('https://localhost:9999/api')
        .then((res) => res.data)
        .then(() => alert('downloading'));
      arr = Object.assign(response);
      setData(arr);
      console.log('response tpe , ', arr);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <View>
        <TouchableOpacity onPress={show} style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24}}>Show me</Text>
        </TouchableOpacity>
        {data.map((item) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.short}</Text>
            <Text>{item.long}</Text>
            <Text>{item.price}</Text>
            <Image source={item.imageUrl} />
          </View>
        ))}
        <Text>{data}</Text>
      </View>
    </Provider>
  );
}

export default App;
