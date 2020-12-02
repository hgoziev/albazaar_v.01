import React, {useEffect, useRef} from 'react';
import {ImageBackground, FlatList, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

let CurrentSlide = 0;
let IntervalTime = 2500;
let timerId = null;
function TopBanner() {
  const flatlist = useRef();

  const gotoNextPage = () => {
    if (CurrentSlide >= DATA.length) CurrentSlide = 0;
    flatlist.current.scrollToIndex({
      index: CurrentSlide++,
      animated: true,
    });
  };

  const startAutoPlay = () => {
    timerId = setInterval(gotoNextPage, IntervalTime);
  };

  const stopAutoPlay = () => {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  useEffect(() => {
    stopAutoPlay();
    startAutoPlay();
    return () => {
      stopAutoPlay();
    };
  }, []);
  const DATA = [
    {
      id: '2',
      image: require('../../Assets/images/img3.png'),
      text: 'Order Now',
    },
    {
      id: '1',
      image: require('../../Assets/images/img.png'),
      text: 'Order Now',
    },
    {
      id: '3',
      image: require('../../Assets/images/banner.png'),
      text: 'Order Now',
    },
    {
      id: '4',
      image: require('../../Assets/images/banner1.png'),
      text: 'Order Now',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <ImageBackground source={item.image} style={styles.img}></ImageBackground>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      ref={flatlist}
    />
  );
}

export default TopBanner;
