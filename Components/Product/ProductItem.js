import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text style={styles.productText}>{product.name}</Text>
    </View>
  );
};

export default ProductItem;
