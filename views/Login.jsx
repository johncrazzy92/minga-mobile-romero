import React, { useState,useEffect } from 'react';
import { View, TextInput, Image,Button, StyleSheet, Alert, ImageBackground,Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import storage from '../utils/asyncStorage';
import { loginAction } from '../redux/actions/loginAction.js';
import { errorFalse } from '../redux/actions/errorFalse';
import Backlogin from  "../assets/Backlogin.jpeg"
import LogoDos from "../assets/LogoDos.png"


const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token, error, rejected } = useSelector((store) => store.userLogin);

  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(email, password);
    dispatch(loginAction(data));
  };

  useEffect(() => {
    if (!rejected && token) {
      storage.save({ key: "token", data: token });
      navigation.navigate("Mangas");
    } else if (rejected && error) {
      Alert.alert(error);
      dispatch(errorFalse());
    }
  }, [token, error, rejected]);

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={Backlogin}>
        <View style={styles.form}>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Minga</Text>
                <Text style={styles.textLogo}>雪</Text>
            </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.button}>
            <Text onPress={() => handleLogin()} style={styles.text}>
              Login
            </Text>
          </View>
          <Text style={styles.subText}>or</Text>
          <Button title="Register now!"/>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor:"white"
  },
  image:{
    flex:1,
    height: "100%",
    width: "100%"
  },
  form:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: "20%",
    backgroundColor: "#0c0d1ed7"
  },
    button:{
        borderRadius: 5,
        backgroundColor: "white",
        height: 50,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
        
    },
    text:{
        fontSize: 30,
        color: "#ff2222"
    },
    img:{
        width:"30%"
    },
    subText:{
        color: "white",
        fontSize:15,
        paddingTop:15
    },
    containerTitle:{
            flexDirection:'row',
            height: "20%"
    },
    textTitle:{
        fontSize: 80,
        color: "#ff2222"
    },
    textLogo:{
        fontSize: 80,
        color: "white"
    }
    
  });


export default Login;

