import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  Grey,
  greenTea,
  hijau,
  hitam,
  putih,
} from '../../Assets/StylingComponent/Coloring';

const TextInputMassage = ({setValue, valuInput}) => {
  return (
    <View style={[{flex: 1}]}>
      {/* <KeyboardAvoidingView style={[{flex: 1}]} behavior="height"> */}
        {/* <ScrollView
          contentContainerStyle={[{flex: 1}]}
          keyboardShouldPersistTaps="handled"> */}
          <TextInput
            multiline
            style={[
              {
                flex: 1,
                paddingHorizontal: 20,
                color: hitam,
                backgroundColor: putih,
              },
            ]}
            onChangeText={text => setValue(text)}
            value={valuInput}
            placeholderTextColor={Grey}
            placeholder="Isi pesan disini"
          />
        {/* </ScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
export default TextInputMassage;
