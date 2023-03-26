import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {hijau, putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/Gayaaja';
// import {TouchableOpacity} from 'react-native-gesture-handler/lib/typescript/components/touchables';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fotoUrl } from '../../Assets/Url';
const HomeAdminScreen = ({navigation, route}) => {
   // * ambil Id user
   const {idUser} = route.params; 

   console.log(idUser,"ini data route di HomeAdmin");
  return (
    <View style={{flex: 1, backgroundColor: putihGelap}}>
      <View
        style={[
          stylesDariGaya.headerBox,
          {paddingHorizontal: 22, justifyContent: 'center'},
        ]}>
        {/* textt */}
        <View style={[{flexDirection: 'row'}]}>
          <View>
            <Text style={[stylesDariGaya.TextMediumBold, {color: putih}]}>
              Selamat datang Admin
            </Text>
            <Text style={[stylesDariGaya.TextBold]}>Username!</Text>
          </View>
          {/* fotoProfile */}
          <View style={{padding: 2, backgroundColor: '#fff', borderRadius: 30}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProfileAdminScreen', {Id: idUser})
              }>
              <Image
                style={[stylesDariGaya.fotoProfile]}
                // source={require('../../Assets/Images/album.png')}
                source={{
                  uri: fotoUrl,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[{alignItems: 'flex-end', padding: 20}]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DownloadFormulirScreen')}
          style={[
            {
              flexDirection: 'row',
              width: 150,
              backgroundColor: hijau,
              padding: 10,
              borderRadius: 10,
            },
          ]}>
          <Text>Upload Formulir</Text>
          <MaterialIcon name="file-document-outline" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeAdminScreen;
