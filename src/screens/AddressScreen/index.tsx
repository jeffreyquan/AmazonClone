import {Picker} from '@react-native-picker/picker';
import * as React from 'react';
import {View} from 'react-native';
import countryList from 'country-list';
import styles from './styles';

const countries = countryList.getData();

interface Country {
  code: string;
  name: string;
}

const AddressScreen = () => {
  const [country, setCountry] = React.useState(countries[0].code);
  return (
    <View>
      <View style={styles.row}>
        <Picker selectedValue={country} onValueChange={setCountry}>
          {countries.map((countryItem: Country) => (
            <Picker.Item value={countryItem.code} label={countryItem.name} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default AddressScreen;
