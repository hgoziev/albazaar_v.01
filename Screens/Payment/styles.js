import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  checkboxContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  addressContainer: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'rgb(240, 240, 240)',
    paddingLeft: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
    marginVertical: 10,
  },
  title: {
    color: 'rgb(46, 64, 60)',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  checkboxMainContainer: {
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
    paddingLeft: 30,
  },
  checkLabel: {
    margin: 3,
    fontSize: 18,
    fontWeight: '700',
  },
  checkboxDetailsContainer: {
    marginLeft: 50,
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 14,
    color: 'rgb(60, 60, 60)',
  },
  paymentCheckboxContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    // marginHorizontal: 10,
  },
  wire: {
    marginRight: 25,
    marginLeft: 10,
  },
  wireTransferText: {
    fontSize: 20,
    fontWeight: '700',
  },
  home: {marginTop: 20, marginLeft: 30, flexDirection: 'row'},
  loadimg: {
    resizeMode: 'center',
    width: 70,
    height: 70,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    paddingTop: 50,
    flex: 1,
  },

  modal: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
  },

  modal3: {
    height: 300,
    width: 300,
  },

  btn: {
    margin: 10,
    backgroundColor: 'rgb(40,40,40)',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
  btnText: {
    color: 'white',
  },
});

export default styles;
