import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    resizeMode: 'center',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  itemDesc: {
    fontSize: 12,
    color: 'rgb(60,60,60)',
    paddingHorizontal: 10,
    paddingTop: 3,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 10,
    paddingTop: 10,
  },
  addBtn: {
    backgroundColor: 'rgb(28, 202, 96)',
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 15,
  },
  addBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
