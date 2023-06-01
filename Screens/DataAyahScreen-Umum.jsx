import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonBack from './Components/ButtonBack';
import {stylesDariGaya} from './Components/ImportedStyles';
import TextInputBox from './Components/TextInputBox';
import {putih} from '../Assets/StylingComponent/Coloring';
import DateSelect from './Components/DateSelect';
import DefaultButtonBox from './Components/DefaultButtonBox';
import DropdownSelect from './Components/DropdownSelect';
import ModalCompon from './Components/ModalCompon';
import axios from 'axios';
import { ipAdress } from './Components/Url';

const DataAyahScreen = ({navigation,route}) => {
  // Id dari router
  const {IdAnak, IdUser} = route.params;
  // NIk atribute
  const [NIk, setNIK] = useState('');
  // Nama atribute
  const [Nama, setNama] = useState('');
  // TempatKelahiran atribute
  const [TempatKelahiran, setTempatKelahiran] = useState('');
  // Alamat atribute
  const [Alamat, setAlamat] = useState('');
  // atribute  Kewrganegaraan
  const [openKW, setopenKW] = useState(false);
  const [vKewarganegaraan, setvKewarganegaraan] = useState('');
  const [dataKewarganegaraan, setdataKewarganegaraan] = useState([
    {label: 'WNI', value: 'WNI'},
    {label: 'WNA', value: 'WNA'},
  ]);
  // atribute Kebangsaan
  const [Kebangsaan, setKebangsaan] = useState('');
  // atribute Pekerjaan
  const [Pekerjaan, setPekerjaan] = useState('');
  // date select atribute
  const [date, setDate] = useState(new Date());
  const [DatePickerVisibility, setDatePickerVisibility] = useState(false);
  const dateFormated = date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  const partsDate = dateFormated.split('/'); // ['25', '05', '2023']
  const newDateString = `${partsDate[2]}-${partsDate[1]}-${partsDate[0]}`;
  const OpenDate = () => {
    setDatePickerVisibility(true);
  };
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDatePickerVisibility(false);
  };

  // Modal Atribute
  const [konfirmasi, setkonfirmasi] = useState(false);

  // function add data ibu
  async function addDataAyah() {
    try {
      const res = await axios({
        method: 'POST',
        data: {
          Id: IdAnak,
          Nama,
          NIK: NIk,
          TempatKelahiran: TempatKelahiran,
          DateKelahiran: newDateString,
          Alamat,
          Kewarganegaraan: vKewarganegaraan,
          Kebangsaan,
          Pekerjaan,
          IdUser,
        },
        url: `${ipAdress}/aplikasiLayananAkta/addData/addDataAyah.php`,
        headers: {'Content-Type': 'multipart/form-data'},
      });
      const {value, message} = res.data;
      console.log(
        IdAnak,
        NIk,
        Nama,
        TempatKelahiran,
        Alamat,
        vKewarganegaraan,
        newDateString,
        Kebangsaan,
        Pekerjaan,
        IdUser,
      );
      // console.log(res.data);
      if (value == 1) {
        alert('Akun Berhasil Didaftarkan');
        setkonfirmasi(false);
        navigation.navigate('DataSaksiScreen', {IdAnak, IdUser});
      } else {
        alert(message);
        setkonfirmasi(false);
      }
    } catch (error) {
      alert('koneksi sedang tidak bagus, sihlakan coba lagi?');
      console.log(error);
    }
    // console.log(res.data['message']);
  }
  useEffect(() => {
    // console.log(IdAnak, "Dialahalamn data ibu");
    console.log(NIk);
    console.log(Nama);
    console.log(TempatKelahiran);
  }, []);
  return (
    <SafeAreaView style={[{backgroundColor: putih, flex: 1}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Data Ayah'} />
      </View>
      <ScrollView
        contentContainerStyle={{paddingVertical: 20}}
        style={[{paddingHorizontal: 20, paddingBottom: 50}]}>
        {/* NIK */}
        <TextInputBox
          Label={'NIK'}
          placeholderTitle={'*62130xxxxxx'}
          onChangeText={text => setNIK(text)}
          value={NIk}
          IconName={'id-card'}
          InputType={"numeric"}
        />
        {/* Nama */}
        <TextInputBox
          Label={'Nama'}
          placeholderTitle={'*Nama Lengkap'}
          onChangeText={text => setNama(text)}
          value={Nama}
          IconName={'user'}
        />
        {/* TempatKelahiran */}
        <TextInputBox
          Label={'Tempat Kelahiran'}
          placeholderTitle={'*kabupaten/kota/kecamatan'}
          onChangeText={text => setTempatKelahiran(text)}
          value={TempatKelahiran}
          IconName={'user'}
        />
        {/* date Select */}
        <DateSelect
          openCalendar={() => OpenDate()}
          onChange={onChangeDate}
          valueinTextInput={newDateString}
          value={date}
          visible={DatePickerVisibility}
          IconName="calendar"
          placeholder={'yyyy-mm-dd'}
          mode={'date'}
          display={'calendar'}
        />
        {/* Alamat */}
        <TextInputBox
          Label={'Alamat'}
          placeholderTitle={'*Jalan/street'}
          onChangeText={text => setAlamat(text)}
          value={Alamat}
          IconName={'house-user'}
        />
        <View style={[{zIndex: 1}]}>
          <DropdownSelect
            placeholder={'Pilih Kewarganegaraan'}
            Label="*Kewarganegaraan"
            open={openKW}
            setOpen={setopenKW}
            data={dataKewarganegaraan}
            setData={setdataKewarganegaraan}
            value={vKewarganegaraan}
            setvalue={setvKewarganegaraan}
          />
        </View>
        {/* Kebangsaan */}
        <TextInputBox
          Label={'Kebangsaan'}
          placeholderTitle={'*nagara asal'}
          onChangeText={text => setKebangsaan(text)}
          value={Kebangsaan}
          IconName={'flag'}
        />
        {/* Pekerjaan */}
        <TextInputBox
          Label={'Pekerjaan'}
          placeholderTitle={'*pekerjaan'}
          onChangeText={text => setPekerjaan(text)}
          value={Pekerjaan}
          IconName={'user'}
        />
        {/* button */}
        <DefaultButtonBox
          onClickAction={() => setkonfirmasi(true)}
          Title={'Submit'}
        />
      </ScrollView>
      <ModalCompon
        stateValueModal={konfirmasi}
        onPresAction={async () => {
          try {
            await addDataAyah();
          } catch (error) {}
        }}
      />
    </SafeAreaView>
  );
};

export default DataAyahScreen;
