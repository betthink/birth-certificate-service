import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonBack from '../Components/ButtonBack';
import {stylesDariGaya} from '../Components/ImportedStyles';
import axios from 'axios';
import {ipAdress} from '../Components/Url';
import {Grey, hijau, putih, ungu} from '../../Assets/StylingComponent/Coloring';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Image } from 'react-native-svg';
const FormulirScreen = ({route}) => {
  const [showDataBayi, setshowDataBayi] = useState(false);
  const [showDataIbu, setshowDataIbu] = useState(false);
  const [showDataAyah, setshowDataAyah] = useState(false);
  const [showDataSaksi1, setshowDataSaksi1] = useState(false);
  const [showDataSaksi2, setshowDataSaksi2] = useState(false);
  const [dataBayi, setdataBayi] = useState(null);
  const [dataUbu, setdataUbu] = useState(null);
  const [dataAyah, setdataAyah] = useState(null);
  const [dataSaksi1, setdataSaksi1] = useState(null);
  const [dataSaksi2, setdataSaksi2] = useState(null);
  const {IdAntrian} = route.params;
  const getDataBayi = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataBayi.php`,
    });
    const data = res.data;

    const datafilter = data.filter(d => d.IdAnak == IdAntrian);
    console.log(datafilter[0], 'Ini data bayi filter');
    setdataBayi(datafilter[0]);
  };
  const getDataIbu = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataIbu.php`,
    });
    const data = res.data;

    const datafilter = data.filter(d => d.Id == IdAntrian);
    console.log(datafilter[0], 'Ini data Ibu filter');
    setdataUbu(datafilter[0]);
  };
  const getDataAyah = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataAyah.php`,
    });
    const data = res.data;

    const datafilter = data.filter(d => d.Id == IdAntrian);
    console.log(datafilter[0], 'Ini data ayah filter');
    setdataAyah(datafilter[0]);
  };
  const getDataSaksi1 = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataSaksi1.php`,
    });
    const data = res.data;

    const datafilter = data.filter(d => d.Id == IdAntrian);
    console.log(datafilter[0], 'Ini data Saksi1 filter');
    setdataSaksi1(datafilter[0]);
  };
  const getDataSaksi2 = async () => {
    const res = await axios({
      method: 'POST',
      url: `${ipAdress}/aplikasiLayananAkta/api/apiDataSaksi2.php`,
    });
    const data = res.data;

    const datafilter = data.filter(d => d.Id == IdAntrian);
    console.log(datafilter[0], 'Ini data Saksi2 filter');
    setdataSaksi2(datafilter[0]);
  };
  useEffect(() => {
    getDataBayi();
    getDataIbu();
    getDataAyah();
    getDataSaksi1();
    getDataSaksi2();
  }, []);
  return (
    <View>
      <View style={[stylesDariGaya.headerBox]}>
        <ButtonBack buttontext={'Detil Data Formulir'} />
      </View>
      <View>
        {dataBayi == null ? (
          <View>
            <Text>Tidak ada data</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={[{paddingBottom: 230}]}>
            {/* content bayi */}
            {/* image header */}
            <View style={[{flex: 1, backgroundColor: putih}]}>
              <Image
                style={[{width: 200, height: 200, alignSelf: 'center'}]}
                resizeMode="cover"
                source={require('../../Assets/Images/ReviewData.png')}
              />
            </View>
            <View style={[style.borderList, {marginTop: 20}]}>
              <TouchableOpacity
                onPress={() => setshowDataBayi(!showDataBayi)}
                style={[style.styleList]}>
                <Text style={[style.normalFont]}>Data Bayi</Text>
                <MaterialIcon
                  color={putih}
                  name={!showDataBayi ? 'chevron-right' : 'chevron-down'}
                  size={20}
                />
              </TouchableOpacity>
              {showDataBayi && (
                <ScrollView>
                  {/* Nama */}
                  <View style={[style.containerEachData]}>
                    <Text>Nama : </Text>
                    <Text style={[style.fontstyle]}>{dataBayi.Nama}</Text>
                  </View>
                  {/* Jenis kelamin */}
                  <View style={[style.containerEachData]}>
                    <Text>Jenis Kelamin : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.JenisKelamin}
                    </Text>
                  </View>
                  {/* TempatPersalinan */}
                  <View style={[style.containerEachData]}>
                    <Text>Tempat Persalinan : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.TempatPersalinan}
                    </Text>
                  </View>

                  {/* TempatKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tempat Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.TempatKelahiran}
                    </Text>
                  </View>
                  {/* DateKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tanggal Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.DateKelahiran}
                    </Text>
                  </View>
                  {/* TimeKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Waktu Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.TimeKelahiran}
                    </Text>
                  </View>
                  {/* UrutanKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Urutan Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.UrutanKelahiran}
                    </Text>
                  </View>
                  {/* PenolongBayi */}
                  <View style={[style.containerEachData]}>
                    <Text>Penolong Bayi : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.PenolongBayi}
                    </Text>
                  </View>
                  {/* BeratBayi */}
                  <View style={[style.containerEachData]}>
                    <Text>Berat Bayi : </Text>
                    <Text style={[style.fontstyle]}>{dataBayi.BeratBayi}</Text>
                  </View>
                  {/* PanjangBayi */}
                  <View style={[style.containerEachData]}>
                    <Text>Panjang Bayi : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataBayi.PanjangBayi}
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
            {/* content Ibu */}
            <View style={[style.borderList]}>
              <TouchableOpacity
                onPress={() => setshowDataIbu(!showDataIbu)}
                style={[style.styleList]}>
                <Text style={[style.normalFont]}>Data Ibu</Text>
                <MaterialIcon
                  color={putih}
                  name={!showDataIbu ? 'chevron-right' : 'chevron-down'}
                  size={20}
                />
              </TouchableOpacity>
              {showDataIbu && (
                <ScrollView>
                  {/* Nama */}
                  <View style={[style.containerEachData]}>
                    <Text>Nama : </Text>
                    <Text style={[style.fontstyle]}>{dataUbu.Nama}</Text>
                  </View>
                  {/* NIK */}
                  <View style={[style.containerEachData]}>
                    <Text>NIK : </Text>
                    <Text style={[style.fontstyle]}>{dataUbu.NIK}</Text>
                  </View>
                  {/* TempatKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tempat Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataUbu.TempatKelahiran}
                    </Text>
                  </View>

                  {/* DateKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tanggal Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataUbu.DateKelahiran}
                    </Text>
                  </View>
                  {/* Alamat */}
                  <View style={[style.containerEachData]}>
                    <Text>Alamat : </Text>
                    <Text style={[style.fontstyle]}>{dataUbu.Alamat}</Text>
                  </View>
                  {/* Pekerjaan */}
                  <View style={[style.containerEachData]}>
                    <Text>Pekerjaan : </Text>
                    <Text style={[style.fontstyle]}>{dataUbu.Pekerjaan}</Text>
                  </View>
                  {/* Kewarganegaraan */}
                  <View style={[style.containerEachData]}>
                    <Text>Kewarganegaraan : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataUbu.Kewarganegaraan}
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
            {/* content Ayah */}
            <View style={[style.borderList]}>
              <TouchableOpacity
                onPress={() => setshowDataAyah(!showDataAyah)}
                style={[style.styleList]}>
                <Text style={[style.normalFont]}>Data Ayah</Text>
                <MaterialIcon
                  color={putih}
                  name={!showDataAyah ? 'chevron-right' : 'chevron-down'}
                  size={20}
                />
              </TouchableOpacity>
              {showDataAyah && (
                <ScrollView>
                  {/* Nama */}
                  <View style={[style.containerEachData]}>
                    <Text>Nama : </Text>
                    <Text style={[style.fontstyle]}>{dataAyah.Nama}</Text>
                  </View>
                  {/* NIK */}
                  <View style={[style.containerEachData]}>
                    <Text>NIK : </Text>
                    <Text style={[style.fontstyle]}>{dataAyah.NIK}</Text>
                  </View>
                  {/* TempatKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tempat Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataAyah.TempatKelahiran}
                    </Text>
                  </View>

                  {/* DateKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tanggal Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataAyah.DateKelahiran}
                    </Text>
                  </View>
                  {/* Alamat */}
                  <View style={[style.containerEachData]}>
                    <Text>Alamat : </Text>
                    <Text style={[style.fontstyle]}>{dataAyah.Alamat}</Text>
                  </View>
                  {/* Pekerjaan */}
                  <View style={[style.containerEachData]}>
                    <Text>Pekerjaan : </Text>
                    <Text style={[style.fontstyle]}>{dataAyah.Pekerjaan}</Text>
                  </View>
                  {/* Kewarganegaraan */}
                  <View style={[style.containerEachData]}>
                    <Text>Kewarganegaraan : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataAyah.Kewarganegaraan}
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
            {/* content Saksi 1 */}
            <View style={[style.borderList]}>
              <TouchableOpacity
                onPress={() => setshowDataSaksi1(!showDataSaksi1)}
                style={[style.styleList]}>
                <Text style={[style.normalFont]}>Data Saksi 1</Text>
                <MaterialIcon
                  color={putih}
                  name={!showDataSaksi1 ? 'chevron-right' : 'chevron-down'}
                  size={20}
                />
              </TouchableOpacity>
              {showDataSaksi1 && (
                <ScrollView>
                  {/* Nama */}
                  <View style={[style.containerEachData]}>
                    <Text>Nama : </Text>
                    <Text style={[style.fontstyle]}>{dataSaksi1.Nama}</Text>
                  </View>
                  {/* NIK */}
                  <View style={[style.containerEachData]}>
                    <Text>NIK : </Text>
                    <Text style={[style.fontstyle]}>{dataSaksi1.NIK}</Text>
                  </View>
                  {/* TempatKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tempat Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataSaksi1.TempatKelahiran}
                    </Text>
                  </View>

                  {/* DateKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tanggal Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataSaksi1.DateKelahiran}
                    </Text>
                  </View>
                  {/* Alamat */}
                  <View style={[style.containerEachData]}>
                    <Text>Alamat : </Text>
                    <Text style={[style.fontstyle]}>{dataSaksi1.Alamat}</Text>
                  </View>

                  {/* Kewarganegaraan */}
                  <View style={[style.containerEachData]}>
                    <Text>Kewarganegaraan : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataSaksi1.Kewarganegaraan}
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
            {/* content Saksi 2 */}
            <View style={[style.borderList]}>
              <TouchableOpacity
                onPress={() => setshowDataSaksi2(!showDataSaksi2)}
                style={[style.styleList]}>
                <Text style={[style.normalFont]}>Data Saksi 2</Text>
                <MaterialIcon
                  color={putih}
                  name={!showDataSaksi2 ? 'chevron-right' : 'chevron-down'}
                  size={20}
                />
              </TouchableOpacity>
              {showDataSaksi2 && (
                <ScrollView>
                  {/* Nama */}
                  <View style={[style.containerEachData]}>
                    <Text>Nama : </Text>
                    <Text style={[style.fontstyle]}>{dataSaksi2.Nama}</Text>
                  </View>
                  {/* NIK */}
                  <View style={[style.containerEachData]}>
                    <Text>NIK : </Text>
                    <Text style={[style.fontstyle]}>{dataSaksi2.NIK}</Text>
                  </View>
                  {/* TempatKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tempat Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataSaksi2.TempatKelahiran}
                    </Text>
                  </View>

                  {/* DateKelahiran */}
                  <View style={[style.containerEachData]}>
                    <Text>Tanggal Kelahiran : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataSaksi2.DateKelahiran}
                    </Text>
                  </View>
                  {/* Alamat */}
                  <View style={[style.containerEachData]}>
                    <Text>Alamat : </Text>
                    <Text style={[style.fontstyle]}>{dataSaksi2.Alamat}</Text>
                  </View>

                  {/* Kewarganegaraan */}
                  <View style={[style.containerEachData]}>
                    <Text>Kewarganegaraan : </Text>
                    <Text style={[style.fontstyle]}>
                      {dataSaksi2.Kewarganegaraan}
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default FormulirScreen;
const style = StyleSheet.create({
  containerEachData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //   height: 30,
    padding: 10,
    backgroundColor: putih,
    elevation: 1,
  },
  fontstyle: {
    fontSize: 16,
    fontWeight: '400',
    color: ungu,
  },
  normalFont: {
    color: putih,
  },
  styleList: {
    flexDirection: 'row',
    backgroundColor: ungu,
    padding: 20,
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  borderList: {
    borderLeftWidth: 3,
    borderColor: hijau,
    marginHorizontal: 20,
  },
});
