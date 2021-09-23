import * as React from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = React.useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = React.useState(1);

  const {price, oldPrice, description, options} = product;
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>

      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, _) => setSelectedOption(itemValue)}>
        {options.map(option => (
          <Picker.Item label={option} value={option} />
        ))}
      </Picker>

      <Text style={styles.price}>
        from ${price}{' '}
        {oldPrice ? <Text style={styles.oldPrice}>${oldPrice}</Text> : null}
      </Text>

      <Text style={styles.description}>{description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <Button text="Add To Cart" onPress={() => console.warn('Add To Card')} />
      <Button text="Buy Now" onPress={() => console.warn('Buy Now')} />
    </View>
  );
};

export default ProductScreen;
