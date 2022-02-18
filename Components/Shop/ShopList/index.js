import React from "react";
import styles from "./styles";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import { ImageBackground } from "react-native";
import shopStore from "../../../stores/shopStore";
import { Box, Center, Heading, VStack } from "native-base";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem key={shop._id} shop={shop} navigation={navigation} />
  ));

  return (
    <ImageBackground
      style={styles.BackGround1}
      source={{
        uri: "https://images.unsplash.com/photo-1600147566401-c2056eb69479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvb2tpZXN8ZW58MHx8MHx8&w=1000&q=80",
      }}
    >
      <Center w="100%">
        <Box maxW="300" w="100%">
          <Heading style={styles.title}>Cookies Shop</Heading>
          <VStack space={2}>{shopList}</VStack>
        </Box>
      </Center>
    </ImageBackground>
  );
};

export default observer(ShopList);
