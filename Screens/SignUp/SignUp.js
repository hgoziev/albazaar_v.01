import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ADD_USER} from '../../Actons/types';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp({navigation}) {
  const {width, height} = Dimensions.get('screen');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (
      (username === '' || null) &&
      (email === '' || null) &&
      (password === '' || null)
    ) {
      setErrorMessage('Please type your credientials.');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('Home'))
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setErrorMessage('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            setErrorMessage('That email address is invalid!');
          } else if (error.code == 'auth/weak-password') {
            setErrorMessage(
              'Weak Password. Password should be at least 6 characters.',
            );
          } else {
            setErrorMessage(error);
          }
        });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'android' ? null : 'padding'}
      style={styles.container}
      keyboardVerticalOffset={60}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.topNav}
          onPress={() => navigation.goBack()}>
          <Ionicon name="arrow-back" style={styles.icon} size={34} />
        </TouchableOpacity>
        <Image
          source={require('../../Assets/images/logo1.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <View style={styles.inputWrapper}>
          <Ionicon name="person-sharp" style={styles.inputIcon} size={18} />
          <TextInput
            placeholder="Username"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            value={username}
            onChangeText={(text) => setUserName(text)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={16} style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicon name="key" size={18} style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SignUp;
