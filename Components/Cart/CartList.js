import React from "react";
import styles from "./Styles";
import { VStack } from "native-base";
import CartItem from "./CartItem";
import cartStore from "../../stores/cartStore";
import { View, Text, ImageBackground } from "react-native";

const CartList = () => {
  const cartItems = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));
  return (
    <ImageBackground
      style={styles.bg}
      source={{
        uri: "https://wallpaperaccess.com/full/2037838.jpg",
      }}
    >
      <View>
        <VStack>{cartItems}</VStack>
      </View>
    </ImageBackground>
  );
};

export default CartList;
