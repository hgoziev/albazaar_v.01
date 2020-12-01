import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: width * 0.25,
  },
  header: {
    height: 60,
    width: width,
    zIndex: 1,
  },
});

export default styles;
