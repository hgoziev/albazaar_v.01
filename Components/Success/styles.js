import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  top: {
    alignItems: 'center',
  },
  bottom: {
    borderColor: 'black',
    alignItems: 'center',
    marginVertical: 30,
  },
  topText: {
    color: 'rgb(39, 39, 39)',
    fontWeight: '700',
    fontSize: 24,
    marginTop: 15,
  },
  icon: {color: 'rgb(0, 219, 228)'},
  image: {width: 200, height: 200},
  orderDetails: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  text: {fontSize: 16, color: 'rgb(39, 39, 39)'},
  delveryTime: {
    fontSize: 18,
    color: 'rgb(46, 65, 61)',
    marginTop: 10,
    fontWeight: '700',
  },
  done: {
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'rgb(0, 219, 228)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  doneText: {color: 'white', fontSize: 20, fontWeight: '700'},
});
export default styles;
