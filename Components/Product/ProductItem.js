import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text style={styles.productText}>{product.name}</Text>
    </View>
  );
};

export default ProductItem;
