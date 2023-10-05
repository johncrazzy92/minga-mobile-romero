 import { Index } from './views/Index';
 import { Provider, useSelector } from 'react-redux';
 import { store } from './redux/store';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createStackNavigator } from '@react-navigation/stack';
 import AllMangas from './views/AllMangas';
 import Login from './views/Login';
import { useState } from 'react';
import storage from './utils/asyncStorage';
import { useEffect } from 'react';
import { Perfil } from './views/Perfil';

const StackLogin = createStackNavigator()


 function LoginStack() {

  return(
    <StackLogin.Navigator>
      <StackLogin.Screen options={{headerShown:false}} name='Main' component={Index}/>
   <StackLogin.Screen name="Login"  component={Login}/>
    </StackLogin.Navigator>
  )
 }


 const Tab = createBottomTabNavigator()
 export default function App() {
  const [userToken, setUserToken] = useState(null);

    useEffect(()=>{
      
      const getToken = async () => {
        try {
          const token = await storage.load({key :"token"})
          setUserToken(token)
      } catch (error) {
        console.log(error);
      }
    }
      getToken()
    },[])
  return (
     <NavigationContainer>
       <Provider store={store}>
         <Tab.Navigator >
           <Tab.Screen options={{headerShown:false}} name="Home" userToken={userToken} component={LoginStack} />
           <Tab.Screen name="Mangas" component={AllMangas}/> 
          <Tab.Screen name="Perfil" component={Perfil} />
         </Tab.Navigator>
       </Provider>
     </NavigationContainer>
   );
 }


//  import { Index } from './views/Index';
//  import { Provider } from 'react-redux';
//  import { store } from './redux/store';
//  import { NavigationContainer } from '@react-navigation/native';
//  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//  import AllMangas from './views/AllMangas';
//  import Login from './views/Login';


//  const Tab = createBottomTabNavigator()

//  export default function App() {
//    return (
//      <NavigationContainer>
//        <Provider store={store}>
//          <Tab.Navigator>
//            <Tab.Screen name="Minga Home" component={Index} />
//            <Tab.Screen name="Login"  component={Login}/>
//            <Tab.Screen name="Mangas" component={AllMangas} />
//          </Tab.Navigator>
//        </Provider>
//      </NavigationContainer>
//    );
//  }


 