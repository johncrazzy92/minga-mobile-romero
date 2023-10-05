import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Background from '../assets/Background.png';
import { SigninButton } from '../components/buttons/SigninButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MangasButton } from '../components/buttons/MangasButton';



export const Index = ({navigation}) => {
  const {userOn} = useSelector(store => store.userLogin)
  useEffect(()=>{
    if (userOn) {
      navigation.navigate("Mangas")
    }
  },[])
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.background} resizeMode='cover'>
        <View style={styles.overlay}>
          <Text style={styles.text}>For the love of manga</Text>
          <Text style={styles.subtitle}>Explore our varieties</Text>
          {!userOn?<SigninButton navigation={navigation}/>:<MangasButton navigation={navigation}/>}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'normal',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    gap: 50
  },
});
