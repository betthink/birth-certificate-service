import {View, Text, Modal, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {hijau, putih, ungu} from '../../Assets/StylingComponent/Coloring';

const ModalCompon = ({stateValueModal, onPresAction, cancel}) => {
  const WIDTH = Dimensions.get('window').width;
  const Heigt = 150;
  return (
    <Modal transparent={true} animationType="fade" visible={stateValueModal}>
      <TouchableOpacity
        style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <View
          style={[
            {
              height: Heigt,
              width: WIDTH - 80,
              paddingTop: 10,
              backgroundColor: ungu,
              borderRadius: 10,
            },
          ]}>
          <View style={[{paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}]}>
            <Text style={[{color: putih, fontSize: 14, textAlign: 'center'}]}> Anda yakin dengan data yang anda masukkan?</Text>
          </View>
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                flex: 1
              },
            ]}>
            <TouchableOpacity onPress={cancel}>
              <Text style={[{padding: 30, backgroundColor:'salmon', borderRadius: 20}]}>Batal </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPresAction} style={[{   alignItems: 'center', justifyContent: 'center',}]}>
              <Text style={[{padding: 30, backgroundColor:hijau, borderRadius: 20, color: putih}]}>Yakin</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalCompon;
