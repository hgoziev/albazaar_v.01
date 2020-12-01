import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bestContainer: {
    borderWidth: 1,
    marginLeft: 15,
    borderRadius: 9,
    borderColor: 'grey',
  },
  img: {
    height: width * 0.35,
    width: width * 0.35,
    borderTopLeftRadius: 7.5,
    borderTopRightRadius: 7.5,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },

  viewAllContainer: {
    backgroundColor: 'lightgrey',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
  },

  itemName: {
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  itemDesc: {
    fontSize: 12,
    color: 'rgb(60,60,60)',
    paddingHorizontal: 10,
    paddingTop: 3,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '700',
    paddingLeft: 10,
    paddingTop: 10,
  },
  addBtn: {
    backgroundColor: 'rgb(28, 202, 96)',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  addBtnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
