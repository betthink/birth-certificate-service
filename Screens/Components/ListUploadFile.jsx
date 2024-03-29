import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {hijau, ungu} from '../../Assets/StylingComponent/Coloring';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from './Icons';
const ListUploadFile = ({titleList, MaterialIconName, onPressAction, warna}) => {
  return (
    <View
      style={[
        {
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          padding: 20,
          elevation: 3,
          alignItems: 'center',
          borderRightWidth: 2,
          borderRightColor: ungu,
        },
      ]}>
      <View style={[{flexDirection: 'row', alignItems: 'center', width: "50%"}]}>
        <AntDesign name={MaterialIconName} size={30} color={warna} />
        {/* <TextInput editable={false} value={titleList} /> */}
        <Text>{titleList}</Text>
      </View>
      <TouchableOpacity onPress={onPressAction}>
        <AntDesign name={'upload'} size={30} color={hijau} />
      </TouchableOpacity>
    </View>
  );
};

export default ListUploadFile;
