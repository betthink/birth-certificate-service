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
// import DetailAntrian from './Screens/AdminScreen/DetailAntrian';
import ProfileAdminScreen from './Screens/AdminScreen/ProfileAdminScreen';
import EditDataUserUmum from './Screens/AdminScreen/EditDataUserUmum';
import SplashScreen from './Screens/SplashScreen';
import Login from './Screens/Login';
import RegisterAkunScreen from './Screens/RegisterAkunScreen';
import { LogBox } from 'react-native';
import DataBayiScreenUmum from './Screens/DataBayiScreen-Umum';
import DataIbuScreen from './Screens/DataIbuScreen-Umum';
import DataAyahScreen from './Screens/DataAyahScreen-Umum';
import DataSaksiScreen from './Screens/DataSaksiScreen-Umum';
import DataSaksi2Screen from './Screens/DataSaksi2Screen-Umum';
import DataFileUploadScreen from './Screens/DataFileUploadScreen-Umum';
import DataFormulir from './Screens/ListFormulir-Umum';
import DetailScreenFormulir from './Screens/Components/DetailScreenFormulir-umum';
import DetailDataAntrian from './Screens/AdminScreen/CekDataPage';
import DetailProsesAntrian from './Screens/AdminScreen/DetailProsesAntrian';
import CekDataPage from './Screens/AdminScreen/CekDataPage';
import FormulirScreen from './Screens/AdminScreen/FormulirScreen-Admin';
import ListFormulir from './Screens/ListFormulir-Umum';
import InformasiSyarat from './Screens/InformasiSyarat-Umum';
import DetailRiwayat from './Screens/AdminScreen/DetailRiwayat';

// import TimePicker from './Screens/datetime-component';
const Stack = createNativeStackNavigator();
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);

//Ignore all log notifications
LogBox.ignoreAllLogs();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: true,}}
        initialRouteName="SplashScreen">
        {/* <Stack.Screen name="DataFileUploadScreen" component={DataFileUploadScreen} /> */}
        <Stack.Screen name="FormulirScreen" component={FormulirScreen} />
        <Stack.Screen name="DetailRiwayat" component={DetailRiwayat} />
        <Stack.Screen name="DetailProsesAntrian" component={DetailProsesAntrian} />
        <Stack.Screen name="ListFormulir" component={ListFormulir} />
        <Stack.Screen name="DetailDataAntrian" component={DetailDataAntrian} />
        <Stack.Screen name="DetailScreenFormulir" component={DetailScreenFormulir} />
        <Stack.Screen name="DataAyahScreen" component={DataAyahScreen} />
        <Stack.Screen name="DataSaksi2Screen" component={DataSaksi2Screen} />
        <Stack.Screen name="DataSaksiScreen" component={DataSaksiScreen} />
        <Stack.Screen name="DataBayiScreenUmum" component={DataBayiScreenUmum} />
        <Stack.Screen name="DataIbuScreen" component={DataIbuScreen} />
        {/* <Stack.Screen name="DateSelect" component={DateSelect} /> */}
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
        <Stack.Screen name="DataFileUploadScreen" component={DataFileUploadScreen} />
        <Stack.Screen
          name="AntrianLayananScreen"
          component={AntrianLayananScreen}
        />
        <Stack.Screen
          name="RegisterAkunScreen"
          component={RegisterAkunScreen}
        />
        <Stack.Screen
          name="AdminPageNavigation"
          component={AdminPageNavigation}
        />
        <Stack.Screen name="CekDataPage" component={CekDataPage} />
        <Stack.Screen
          name="ProfileAdminScreen"
          component={ProfileAdminScreen}
        />
        <Stack.Screen name="EditDataUserUmum" component={EditDataUserUmum} />
        <Stack.Screen name="InformasiSyarat" component={InformasiSyarat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
