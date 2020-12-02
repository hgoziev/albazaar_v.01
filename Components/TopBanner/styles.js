import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  topBanner: {
    flex: 1,
  },
  img: {
    width: width,
    height: '100%',

    alignItems: 'flex-start',
  },
});

export default styles;
