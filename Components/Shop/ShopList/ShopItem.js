import React from "react";
import styles from "./styles";
import { Image, Pressable, Text } from "react-native";
import { Center, HStack } from "native-base";
import { baseURL } from "../../../stores/api";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Detail", { shop: shop })}>
      <Center>
        <HStack
          mb={4}
          w="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image style={styles.img} source={{ uri: baseURL + shop.image }} />
          <Text style={styles.textstyling}>{shop.name}</Text>
        </HStack>
      </Center>
    </Pressable>
  );
};

export default ShopItem;
