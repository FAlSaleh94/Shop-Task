import React from "react";
import { Badge } from "native-base";
import cartStore from "../../stores/cartStore";
import { useNavigation } from "@react-navigation/native";
import IonIcons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const CartButton = () => {
  const navigation = useNavigation();
  let total = 0;
  cartStore.items.forEach((item) => (total = total + item.quantity));
  return (
    <>
      <Badge
        bg="#cd5c5c"
        rounded="full"
        mb={-2}
        mr={5}
        zIndex={1}
        variant="soled"
        alignSelf="flex-end"
        _text={{
          fontSize: 10,
        }}
      >
        {total}
      </Badge>
      {total === 0 ? (
        <IonIcons name="md-cart-outline" style={styles.cart} size={30} />
      ) : (
        <IonIcons name="md-cart-sharp" style={styles.cart} size={30} />
      )}
    </>
  );
};

export default CartButton;
