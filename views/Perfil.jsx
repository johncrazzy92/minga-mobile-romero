import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import storage from '../utils/asyncStorage';
import { signout } from '../redux/actions/signout';

export const Perfil = () => {
    const dispatch = useDispatch();
    const signoutHandle = async () => {
      try {
        const token = await storage.load({key :"token"})
        dispatch(signout(token));
        await storage.remove({ key: "token" });
      } catch (error) {
        console.log("error de errores ", error);
      }
    };
  return (
    <View>
        <Text onPress={()=>signoutHandle() } >
            Sign Out
        </Text>
    </View>
  )
}

