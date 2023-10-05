import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export const SigninButton = ({navigation}) => {
  return (
    <View style={styles.button}>
        <Text onPress={()=> navigation.navigate("Login") } style={styles.text}>Sign In!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 5,
        backgroundColor: "white",
        height: 50,
        width: "22%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
        
    },
    text:{
        fontSize: 30,
        color: "#ff2222"
    }
  });
