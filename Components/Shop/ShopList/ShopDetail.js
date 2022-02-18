import React from "react";
import styles from "./styles";
import { observer } from "mobx-react";
import { baseURL } from "../../../stores/api";
import shopStore from "../../../stores/shopStore";
import ProductList from "../../Product/ProductList";
import { Button, Card, Spinner } from "native-base";
import { View, Text, Image, ImageBackground, SafeAreaView } from "react-native";

const ShopDetail = ({ route }) => {
  if (shopStore.loding)
    return (
      <SafeAreaView>
        <Spinner size="lg" color="warning.900" />
      </SafeAreaView>
    );
  const shop = route.params.shop;
  const types = shop.type.map((_type) => (
    <Button style={styles.btn} key={_type}>
      {_type}
    </Button>
  ));

  return (
    <ImageBackground
      style={styles.BackGround1}
      source={{
        uri: "https://wallpaperaccess.com/full/2037836.jpg",
      }}
    >
      <View style={styles.View}>
        <Text style={styles.text}>{shop.name}</Text>
        <Image source={{ uri: baseURL + shop.image }} style={styles.Img} />
        <Card style={styles.Card}>
          {types}
          <ProductList products={shop.products} />
        </Card>
      </View>
    </ImageBackground>
  );
};

export default observer(ShopDetail);
