// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './Screens/LandingPage';
import HomeUmum from './Screens/HomePage-umum';
import SyaratScreen from './Screens/SyaratdaninfoPage-umum';
import PemberitahuanScreen from './Screens/PemberitahuanPage-umum';
import ProfileUmumScreen from './Screens/ProfilePage-umum';
import MenuUmum from './Screens/Components/MenuUmum';
import AntrianLayananScreen from './Screens/InfoAntrianPage-umum';
import AdminPageNavigation from './Screens/AdminScreen/AdminPageNavigation';
import DetailAntrian from './Screens/AdminScreen/DetailAntrian';
import ProfileAdminScreen from './Screens/AdminScreen/ProfileAdminScreen';
import EditDataUserUmum from './Screens/AdminScreen/EditDataUserUmum';
import SplashScreen from './Screens/SplashScreen';
import Login from './Screens/Login';
import RegisterAkunScreen from './Screens/RegisterAkunScreen';
import InputDataBayi from './Screens/InputDataBayi-umum';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: true, }}
        initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="HomeUmum" component={HomeUmum} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SyaratScreen" component={SyaratScreen} />
        <Stack.Screen
          name="PemberitahuanScreen"
          component={PemberitahuanScreen}
        />
        <Stack.Screen name="ProfileUmumScreen" component={ProfileUmumScreen} />
        <Stack.Screen name="MenuUmum" component={MenuUmum} />
        <Stack.Screen
          name="AntrianLayananScreen"
          component={AntrianLayananScreen}
        />
        <Stack.Screen
          name="RegisterAkunScreen"
          component={RegisterAkunScreen}
        />
        <Stack.Screen name="InputDataBayi" component={InputDataBayi} />
        <Stack.Screen
          name="AdminPageNavigation"
          component={AdminPageNavigation}
        />
        <Stack.Screen name="DetailAntrian" component={DetailAntrian} />
        <Stack.Screen
          name="ProfileAdminScreen"
          component={ProfileAdminScreen}
        />
        <Stack.Screen name="EditDataUserUmum" component={EditDataUserUmum} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
