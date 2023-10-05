import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllMangas from '../views/AllMangas';

const Tab = createBottomTabNavigator()


export const TabNav = () => {
  return (
        <Tab.Navigator>
          <Tab.Screen name="Mangas" component={AllMangas} />
        </Tab.Navigator>
  )
}
