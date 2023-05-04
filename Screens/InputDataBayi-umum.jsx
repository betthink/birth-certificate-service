import { View, Text } from 'react-native'
import React from 'react'
import { stylesDariGaya } from './Components/ImportedStyles'
import ButtonBack from './Components/ButtonBack'

const InputDataBayi = () => {
  return (
    <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
      <ButtonBack buttontext={"Pendaftaran Layanan"} />
    </View>
  )
}

export default InputDataBayi