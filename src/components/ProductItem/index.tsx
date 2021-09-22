import * as React from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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

interface ProductItemProps {
  item: Product;
}

const ProductItem = ({item}: ProductItemProps) => {
  const {title, image, avgRating, ratings, price, oldPrice} = item;
  return (
    <View style={styles.root}>
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
  );
};

export default ProductItem;
