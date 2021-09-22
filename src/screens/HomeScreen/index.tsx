import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {products.map(product => (
        <ProductItem key={product.id} item={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
