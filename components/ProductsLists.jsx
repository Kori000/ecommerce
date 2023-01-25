import * as React from 'react';
import { FlatList, Text } from 'react-native';
import { products } from '../products';
import ProductCard from './ProductCard';
const ProductList = () => {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCard {...item} />}
      keyExtractor={products => products.id}
    />
  );
};

export default ProductList;
