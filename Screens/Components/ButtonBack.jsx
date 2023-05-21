import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {hitam, putih, ungu} from '../../Assets/StylingComponent/Coloring';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import navigation in another component
import {useNavigation} from '@react-navigation/native';
const ButtonBack = ({buttontext}) => {
  const navigation = useNavigation();
  return (
    <View style={[{flexDirection: 'row'}]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcon
          style={{marginTop: 3, marginHorizontal: 22}}
          size={18}
          color={hitam}
          name="arrow-back-ios"
        />
      </TouchableOpacity>
      <Text style={[styles.textStyle]}>{buttontext}</Text>
    </View>
  );
};

export default ButtonBack;

const styles = StyleSheet.create({
  textStyle: {
    color: hitam,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
