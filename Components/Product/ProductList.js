import React from "react";
import styles from "./styles";
import ProductItem from "./ProductItem";
import { View, Text } from "react-native";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem key={product._id} product={product} />
  ));
  return (
    <View style={styles.ProductText}>
      <Text style={styles.detailtext}>Product Detail</Text>
      {productList}
    </View>
  );
};

export default ProductList;
