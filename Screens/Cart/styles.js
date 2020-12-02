import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
console.log('Width: ' + width);
console.log('Height : ' + height);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: '700',
    fontSize: 28,
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 10,
    color: 'rgb(46, 64, 60)',
  },
  header: {
    flex: 0.08,
  },
  body: {
    flex: 0.92,
  },
  totalContainer: {
    marginTop: 30,
  },
  buyContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  lineBreak: {
    height: 2.8,
    width: '100%',
    backgroundColor: 'black',
  },
  buyBtn: {
    backgroundColor: 'rgb(28, 200, 96)',
    paddingVertical: 8,
    paddingHorizontal: 27,
    borderRadius: 8,
  },
  buyBtnText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.18,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgb(23, 23, 23)',
  },
  emptyImage: {
    height: 150,
    width: 150,
  },
});

export default styles;
