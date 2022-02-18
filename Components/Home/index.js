import React from "react";
import styles from "./styles";
import { Button } from "native-base";
import { View, ImageBackground, Text } from "react-native";

const Home = ({ navigation }) => {
  console.log(navigation);
  return (
    <ImageBackground
      style={styles.BackGround}
      source={{
        uri: "https://annabanana.co/wp-content/uploads/2020/03/Chocolate-Chip-Cookies-22.jpg",
      }}
    >
      <View style={styles.Box}>
        <Text style={styles.text}>Cookies Shop</Text>
        <Button
          size="lg"
          bg="warning.400"
          borderColor="warning.600"
          borderTopWidth="6"
          onPress={() => navigation.navigate("Shops")}
        >
          Click For More
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Home;
