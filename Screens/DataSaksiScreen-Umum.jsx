import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ButtonBack from './Components/ButtonBack';
import {stylesDariGaya} from './Components/ImportedStyles';
import TextInputBox from './Components/TextInputBox';
import {putih, ungu} from '../Assets/StylingComponent/Coloring';
import DateSelect from './Components/DateSelect';
import DefaultButtonBox from './Components/DefaultButtonBox';
import DropdownSelect from './Components/DropdownSelect';
import ModalCompon from './Components/ModalCompon';
import axios from 'axios';
import {ipAdress} from './Components/Url';
import {IonIcon} from './Components/Icons';

const DataSaksiScreen = ({navigation, route}) => {
  // Id raouter
  const {IdAnak, IdUser} = route.params;
  // const IdAnak = 15;
  // const IdUser = 1;
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
  // const newDateString = dateFormated.replace('/', '-').replace('/', '-');
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
  async function addDataSaksi() {
    try {
      if (
        !NIk ||
        !Nama ||
        !TempatKelahiran ||
        !Alamat ||
        !vKewarganegaraan ||
        !newDateString ||
        !Kebangsaan
      ) {
        // Menampilkan pesan kesalahan jika ada input yang kosong
        alert('Mohon lengkapi semua input');
        setkonfirmasi(false);
        return;
      }
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
          IdUser,
        },
        url: `${ipAdress}/aplikasiLayananAkta/addData/addDataSaksi1.php`,
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
        IdUser,
      );
      // console.log(res.data);
      if (value == 1) {
        alert('Data Berhasil Didaftarkan');
        setkonfirmasi(false);
        navigation.navigate('DataSaksi2Screen', {IdAnak, IdUser});
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
    console.log(
      IdAnak,
      NIk,
      Nama,
      TempatKelahiran,
      Alamat,
      vKewarganegaraan,
      newDateString,
      Kebangsaan,
      IdUser,
    );
  }, [
    NIk,
    Nama,
    TempatKelahiran,
    Alamat,
    vKewarganegaraan,
    newDateString,
    Kebangsaan,
  ]);
  return (
    <SafeAreaView style={[{backgroundColor: putih, flex: 1}]}>
      <View style={[stylesDariGaya.headerBox, {justifyContent: 'center'}]}>
        <ButtonBack buttontext={'Input Data Saksi 1'} />
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
          InputType={'numeric'}
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
        <View
          style={[
            {
              zIndex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            },
          ]}>
          <IonIcon style={[{color: ungu}]} name="ios-flag-sharp" size={20} />
          <DropdownSelect
            placeholder={'Pilih Kewarganegaraan'}
            Label="Kewarganegaraan"
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
          placeholderTitle={'*Negara asal'}
          onChangeText={text => setKebangsaan(text)}
          value={Kebangsaan}
          IconName={'flag'}
        />

        {/* button */}
        <DefaultButtonBox
          onClickAction={() => setkonfirmasi(true)}
          Title={'Selanjutnya'}
        />
      </ScrollView>
      <ModalCompon
        cancel={() => setkonfirmasi(false)}
        stateValueModal={konfirmasi}
        onPresAction={async () => {
          try {
            await addDataSaksi();
          } catch (error) {}
        }}
      />
    </SafeAreaView>
  );
};

export default DataSaksiScreen;
