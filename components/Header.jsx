import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View,StyleSheet } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}>
        <StatusBar style='auto' translucent={false} backgroundColor='white'/>    
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        
    }
})
