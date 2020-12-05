import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  SAVE_ADDRESS,
  EMPTY_BASKET,
  EMPTY_SAVED,
  EMPTY_ITEMS_INFO,
} from '../../Actons/types';
import Ionicon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {getSavedTotal, getBasketTotal} from '../../Reducer/Reducer';

function Payment({navigation, route}) {
  const {fromSaved} = route.params;
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const saved = useSelector((state) => state.saved);
  const address = useSelector((state) => state.address);
  const items_info = useSelector((state) => state.items_info);

  const [deliveryFee, setDeliveryFee] = useState(null);
  const [shipment, setShipment] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [addr1, setAddr1] = useState('');
  const [addr2, setAddr2] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [err, setErr] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comments, setComments] = useState('');
  const [wire, setWire] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shipmentMethod, setShipmentMethod] = useState('');
  const min = 1000;
  const max = 100000;
  const randonNumber = Math.floor(min + Math.random() * (max - min));

  const Empty = () => {
    if (fromSaved) {
      dispatch({
        type: EMPTY_SAVED,
      });
    } else {
      dispatch({
        type: EMPTY_BASKET,
      });
    }
    dispatch({
      type: EMPTY_ITEMS_INFO,
    });
    navigation.goBack();
  };

  const onNextButton = () => {
    if ((addr1 && addr2 && city && zipCode) === '') {
      alert('Please enter your address .');
      setErr(true);
    } else {
      setErr(false);
      dispatch({
        type: SAVE_ADDRESS,
        payload: {
          firstName: firstName,
          lastName: lastName,
          company: company,
          addr1: addr1,
          addr2: addr2,
          city: city,
          country: country,
          zipCode: zipCode,
          phoneNumber: phoneNumber,
          comments: comments,
        },
      });
    }
  };

  const delivery = () => {
    if (shipment) {
      setDeliveryFee(3500);
      setShipmentMethod('Standart');
    } else {
      setDeliveryFee(5000);
      setShipmentMethod('Express');
    }
  };

  const onSubmitButton = async () => {
    if (wire) {
      setLoading(true);
      const total = fromSaved
        ? deliveryFee + getSavedTotal(saved)
        : deliveryFee + getBasketTotal(basket);
      try {
        await axios
          .post(
            'https://albazaar.herokuapp.com/api/orders',
            {
              items_info,
              total,
              shipment: shipmentMethod,
              address,
              id: randonNumber,
            },
            {timeout: 1000 * 10},
          )
          .then((res) => {
            setLoading(false);
            setWire(false);
          })
          .then(Empty)
          .then(() =>
            navigation.navigate('success', {
              orderNo: randonNumber,
            }),
          );
      } catch (err) {
        setLoading(false);
        navigation.navigate('failure');
      }
    } else {
      alert('Please choose payment method .');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.home}>
          <Ionicon name="home" size={34} color="rgb(28, 200, 95)" />
        </TouchableOpacity>
        <ProgressSteps>
          <ProgressStep label="Address" onNext={onNextButton} errors={err}>
            <View style={styles.addressContainer}>
              <Text style={styles.title}>Address</Text>
              <TextInput
                type="text"
                placeholder="First Name"
                style={styles.input}
                maxLength={40}
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
                placeholderTextColor="rgb(46, 64, 60)"
              />
              <TextInput
                type="text"
                placeholder="Last Name"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={lastName}
                onChangeText={(text) => setLastName(text)}
              />
              <TextInput
                type="text"
                placeholder="Company Name  (optional)"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={company}
                onChangeText={(text) => setCompany(text)}
              />
              <TextInput
                type="text"
                placeholder="House Number and Street Name"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={addr1}
                onChangeText={(text) => setAddr1(text)}
              />
              <TextInput
                type="text"
                placeholder="Apartment and Room Number"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={addr2}
                onChangeText={(text) => setAddr2(text)}
              />
              <TextInput
                type="text"
                placeholder="City or Province"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={city}
                onChangeText={(text) => setCity(text)}
              />
              <TextInput
                type="text"
                placeholder="Country"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={country}
                onChangeText={(text) => setCountry(text)}
              />
              <TextInput
                type="text"
                placeholder="Zip/Postal Code"
                style={styles.input}
                maxLength={6}
                placeholderTextColor="rgb(46, 64, 60)"
                value={zipCode}
                onChangeText={(text) => setZipCode(text)}
              />
              <TextInput
                type="text"
                placeholder="Phone number"
                style={styles.input}
                maxLength={40}
                placeholderTextColor="rgb(46, 64, 60)"
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
              <TextInput
                type="text"
                placeholder="Comments"
                style={styles.input}
                multiline={true}
                placeholderTextColor="rgb(46, 64, 60)"
                value={comments}
                onChangeText={(text) => setComments(text)}
              />
            </View>
          </ProgressStep>

          <ProgressStep label="Shipment Method" onNext={delivery}>
            <Text style={[styles.title, {marginHorizontal: 30, marginTop: 20}]}>
              Shipment Method
            </Text>
            <View style={styles.checkboxMainContainer}>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={shipment}
                  onValueChange={() => setShipment(!shipment)}
                  style={styles.checkbox}
                />
                <Text style={styles.checkLabel}>Standart Shipment</Text>
              </View>

              <View style={styles.checkboxDetailsContainer}>
                <Text style={styles.checkboxText}>Delivery fee : ₩3,500</Text>
                <Text style={styles.checkboxText}>
                  Delivery time : 2-4 days across South Korea
                </Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={!shipment}
                  onValueChange={() => setShipment(!shipment)}
                  style={styles.checkbox}
                />
                <Text style={styles.checkLabel}>Express Shipment</Text>
              </View>

              <View style={styles.checkboxDetailsContainer}>
                <Text style={styles.checkboxText}>Delivery fee : ₩5,000</Text>
                <Text style={styles.checkboxText}>
                  Same day delivery. Cut off at 3pm. Only for Seoul area.
                </Text>
              </View>
            </View>
          </ProgressStep>
          <ProgressStep label="Order Details">
            <OrderDetails deliveryFee={deliveryFee} fromSaved={fromSaved} />
          </ProgressStep>

          <ProgressStep label="Payment" onSubmit={onSubmitButton}>
            <View style={styles.addressContainer}>
              <Text style={styles.title}>Payment Method</Text>
              <View style={styles.paymentCheckboxContainer}>
                {loading === true ? (
                  <Image
                    source={require('../../Assets/images/d.gif')}
                    style={styles.loadimg}
                  />
                ) : (
                  <>
                    <CheckBox
                      value={wire}
                      onValueChange={() => setWire(!wire)}
                      style={styles.checkbox}
                      onAnimationType="bounce"
                    />
                    <View style={styles.wire}>
                      <Text style={styles.wireTransferText}>
                        Direct Wire Transfer
                      </Text>
                      <Text style={styles.wireDetails}>
                        Please make direct wire transfer to our bank account.
                        Once the transaction is clearified , we will ship your
                        prodects immadiately.
                      </Text>
                    </View>
                  </>
                )}
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}

export default Payment;
