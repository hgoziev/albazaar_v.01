import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  firstRow: {
    flex: 1,
    backgroundColor: 'white',
  },
  first_text: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginVertical: 10,
  },
  first_img: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  first_images: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: (width * 0.16) / 2,
    resizeMode: 'contain',
  },
});

export default styles;
