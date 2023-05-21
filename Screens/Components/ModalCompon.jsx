import {View, Text, Modal, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {ungu} from '../../Assets/StylingComponent/Coloring';

const ModalCompon = ({stateValueModal, onPresAction}) => {
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
          <View
            style={[
              {
                flexDirection: 'row',
                justifyContent: 'center',
              },
            ]}>
            <TouchableOpacity onPress={onPresAction} style={[{height: 30, backgroundColor: 'white', alignItems: 'center'}]}>
              <Text>Ini Modal?</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalCompon;
