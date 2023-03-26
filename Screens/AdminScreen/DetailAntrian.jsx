import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {putih, putihGelap} from '../../Assets/StylingComponent/Coloring';
import {stylesDariGaya} from '../Components/Gayaaja';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ipAdress} from '../Components/Url';
import axios from 'axios';
const DetailAntrian = ({navigation, route}) => {
  const {detailAntrian} = route.params;
  // console.log(IdAntrian, "ini Id antrian");
  const [IdAntrianState, setIdAntrianState] = useState(detailAntrian.IdAntrian);
  const [KK, setKK] = useState(detailAntrian.KK);
  const [KtpBapakState, setKtpBapakState] = useState(detailAntrian.KTPBapak);
  const [KTPIbu, setKTPIbu] = useState(detailAntrian.KTPIbu);
  const [BukuNikah, setBukuNikah] = useState(detailAntrian.BukuNikah);
  const [KeteranganLahir, setKeteranganLahir] = useState(detailAntrian.KeteranganLahir,
  );
  const [FormulirAkta, setFormulirAkta] = useState(detailAntrian.FormulirAktaKelahiran,
  );
  const [ktpsaksi, setktpsaksi] = useState(detailAntrian.KTPSaksi);
  const [Pemberitahuan, setPemberitahuan] = useState(detailAntrian.Pemberitahuan,
  );
  const [WaktuPendaftaran, setWaktuPendaftaran] = useState(
    detailAntrian.WaktuPendaftaran,
  );
  const [WaktuSelesai, setWaktuSelesai] = useState(detailAntrian.WaktuSelesai);
  // * Fungsi tampilkan data user by id

  return (
    <View style={[{flex: 1, backgroundColor: putihGelap}]}>
      {/* header box */}
      <View
        style={[
          stylesDariGaya.headerBox,
          {justifyContent: 'center', paddingHorizontal: 22},
        ]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <MaterialIcon color={putih} name="chevron-left" size={30} />
          <Text style={[stylesDariGaya.TextMediumBoldP]}>Detail Antrian</Text>
        </TouchableOpacity>
      </View>
      {/* end of header box */}
      <View style={[stylesDariGaya.containerBoxHijau]}>
        <View style={[{flexDirection: 'row'}]}>
          <View>
            <Text style={[stylesDariGaya.lineSpaceStyle]}>Nama</Text>
            <Text style={[stylesDariGaya.lineSpaceStyle]}>Id Antrian</Text>
            <Text style={[stylesDariGaya.lineSpaceStyle]}>
              Waktu Pendaftaran
            </Text>
            <Text style={[stylesDariGaya.lineSpaceStyle]}>Waktu Layanan S</Text>
          </View>
          <View style={[{marginLeft: 40}]}>
            <Text
              style={[
                stylesDariGaya.BorderLeftHijau,
                stylesDariGaya.lineSpaceStyle,
              ]}>
              nama
            </Text>
            <Text
              style={[
                stylesDariGaya.BorderLeftHijau,
                stylesDariGaya.lineSpaceStyle,
              ]}>{IdAntrianState}</Text>
            <Text
              style={[
                stylesDariGaya.BorderLeftHijau,
                stylesDariGaya.lineSpaceStyle,
              ]}>
              {WaktuPendaftaran}
            </Text>
            <Text
              style={[
                stylesDariGaya.BorderLeftHijau,
                stylesDariGaya.lineSpaceStyle,
              ]}>
              {WaktuSelesai}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailAntrian;
