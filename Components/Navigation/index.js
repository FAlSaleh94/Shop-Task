import Home from "../Home";
import React from "react";
import CartList from "../Cart/CartList";
import CartButton from "../Buttons/CartButton";
import ShopList from "../Shop/ShopList";
import ShopDetail from "../Shop/ShopList/ShopDetail";
import { createStackNavigator } from "@react-navigation/stack";

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000000",
        },
        headerTitleStyle: {
          fontFamily: "Palatino",
          color: "#e9967a",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name="Detail"
        component={ShopDetail}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen name="Cart" component={CartList} />
    </Navigator>
  );
};

export default StackNavigator;
// options={({route}) => ({title: route.params.shop.name})}
