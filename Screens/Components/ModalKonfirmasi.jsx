import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {greenTea, hijau, putih, ungu} from '../../Assets/StylingComponent/Coloring';

export const ConfirmationModal = ({visible, onCancel, onConfirm}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styleModal.modalContainer}>
        <View style={styleModal.modalContent}>
          <Text style={[styleModal.modalText, {color: putih}]}>Apakah Anda yakin?</Text>
          <View style={styleModal.buttonContainer}>
            <TouchableOpacity
              onPress={onCancel}
              style={[styleModal.button, {backgroundColor: 'salmon'}]}>
              <Text style={[styleModal.buttonText, {color: putih}]}>Batal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={[styleModal.button, {backgroundColor: hijau}]}>
              <Text style={styleModal.buttonText}>Konfirmasi</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const App = () => {
  //   const [modalVisible, setModalVisible] = useState(false);

  //   const handleCancel = () => {
  //     setModalVisible(false);
  //   };

  //   const handleConfirm = () => {
  //     // Lakukan aksi konfirmasi di sini
  //     setModalVisible(false);
  //   };

  return (
    <View style={styleModal.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styleModal.openButton}>Tampilkan Modal Konfirmasi</Text>
      </TouchableOpacity>
      <ConfirmationModal
        visible={modalVisible}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </View>
  );
};

export const styleModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    padding: 10,
    backgroundColor: ungu,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: ungu,
    padding: 20,
    borderRadius: 8,
    width: 300,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    // backgroundColor: hijau,
    borderRadius: 4,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    // color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
