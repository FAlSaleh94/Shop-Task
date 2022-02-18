import React from "react";
import styles from "./Styles";
import { Image, Text } from "react-native";
import { HStack, VStack } from "native-base";

const CartItem = ({ item }) => {
  const cost = item.product.price * item.quantity;
  return (
    <HStack>
      <Image style={styles.img} source={{ uri: item.product.image }} />
      <VStack>
        <Text style={styles.font}>{item.product.name}</Text>
        <Text style={styles.price}>
          {item.product.price} KD x {item.quantity} = {cost} KD
        </Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;
