import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Platform,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if ((email == '' || null) && (password == '' || null)) {
      setErrorMessage('Please type your email and password.');
    } else {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => navigation.navigate('Home'))
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            setErrorMessage('That email address is already in use!');
          } else if (error.code === 'auth/invalid-email') {
            setErrorMessage('That email address is invalid!');
          } else if (error.code == 'auth/user-not-found') {
            setErrorMessage('No user found for this email.');
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
          <Ionicon name="arrow-back" size={34} style={styles.icon} />
        </TouchableOpacity>
        <Image
          source={require('../../Assets/images/logo1.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <View style={styles.inputWrapper}>
          <FontAwesome name="envelope" size={18} style={styles.inputIcon} />
          <TextInput
            placeholder="Email"
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputWrapper}>
          <Ionicon name="key" size={20} style={styles.inputIcon} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor="rgb(80,80,80)"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('forgot')}>
          <Text style={styles.forgotText}>Forgot Password ?</Text>
        </TouchableOpacity>

        <View style={styles.signContainer}>
          <Text style={styles.forgotText}>Already have accont ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.signText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
