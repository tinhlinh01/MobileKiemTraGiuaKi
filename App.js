import React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';

// Kích thước màn hình
const { width, height } = Dimensions.get('window');

// Màn hình Onboarding
const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/8140 1.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image
          source={require('./assets/Carrot.png')}
          style={styles.carrotIcon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to our store</Text>
        </View>
        <Text style={styles.subtext}>Get your groceries in as fast as one hour</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function IconButton({ name, text, backgroundColor }) {
  return (
    <TouchableOpacity style={[styles.iconButton, { backgroundColor }]}>
      <Icon name={name} size={20} color="white" style={styles.iconLeft} />
      <Text style={styles.iconButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}

// Màn hình SignIn
const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = React.createRef();

  return (
    <View style={styles.signInContainer}>
      <Image
        source={require('./assets/Mask Group (1).png')}
        style={styles.signInImage}
      />
      <View style={styles.signInTitleContainer}>
        <Text style={styles.signInTitle}>Get your groceries with nectar</Text>
      </View>
      <View style={styles.inputContainer}>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="VN" // Bangladesh default country code (+880)
          layout="first"
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
        />
      </View>
      <Text style={styles.socialText}>Or connect with social media</Text>
      <IconButton name="google" text="Continue with Google" backgroundColor="#4B70F5" />
      <IconButton name="facebook" text="Continue with Facebook" backgroundColor="#3B5998" />
    </View>
  );
};

// Cấu hình điều hướng
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Các kiểu dáng
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: height * 0.55, // Adjusted to be more centered for iPhone
    width: width * 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  carrotIcon: {
    top: -10,
    width: width * 0.12, // Scaled dynamically
    height: width * 0.12,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  titleContainer: {
    width: 200, // Scaled for responsiveness
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Gilroy', 
    fontWeight: '600',
    fontSize: 40, // Reduced size to better fit iPhone
    textAlign: 'center',
    color: '#fff',
    lineHeight: 45,
  },
  subtext: {
    fontFamily: 'Gilroy-Medium', 
    fontSize: 16,
    textAlign: 'center',
    color: "#fff",
    marginBottom: 30,
    marginTop:5,
  },
  button: {
    width: width * 0.85, // Scaled dynamically
    height: height * 0.08, // Scaled dynamically for screen height
    backgroundColor: '#53b175',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  signInContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  signInImage: {
    width: '100%',
    height: height * 0.35, // Adjusted for iPhone screens
    resizeMode: 'cover',
  },
  signInTitleContainer: {
    width: '90%',
    marginTop: 20,
    alignItems: 'flex-start',
  },
  signInTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '85%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  phoneIcon: {
    height: 20,
    width: 25,
    marginRight: 10,
  },
  phoneText: {
    fontSize: 18,
    color: 'black',
  },
  socialText: {
    color: 'gray',
    fontSize: 12,
    marginVertical: 20,
    textAlign: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: width * 0.85, // Adjusted for screen width
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    height: height * 0.08,
  },
  iconLeft: {
    marginRight: 30,
  },
  iconButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default App;
