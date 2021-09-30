import * as React from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';

interface Product {
  id: string;
  title: string;
  image: string;
  avgRating: number;
  ratings: number;
  price: number;
  oldPrice?: number;
}

interface CartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: Product;
  };
}

const CartProductItem = ({cartItem}: CartProductItemProps) => {
  const {quantity: quantityProp, item} = cartItem;
  const {title, image, avgRating, ratings, price, oldPrice} = item;

  const [quantity, setQuantity] = React.useState(quantityProp);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {title}
          </Text>
          <View style={styles.ratingsContainer}>
            {[...Array(5).keys()].map((_, index) => (
              <FontAwesome
                key={`${item.id}-${index}`}
                style={styles.star}
                name={index < Math.floor(avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#e47911'}
              />
            ))}
            <Text>{ratings}</Text>
          </View>
          <Text style={styles.price}>
            from ${price}{' '}
            {oldPrice ? <Text style={styles.oldPrice}>${oldPrice}</Text> : null}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
