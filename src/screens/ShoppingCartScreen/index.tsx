import * as React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (total, product) => total + product.item.price * product.quantity,
    0,
  );
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text
              style={{
                fontSize: 18,
              }}>
              Subtotal ({products.length} items):{' '}
              <Text
                style={{
                  color: '#e47911',
                  fontWeight: 'bold',
                }}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={() => console.warn('go to checkout')}
              buttonStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
