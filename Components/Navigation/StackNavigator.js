import Home from "../Home";
import React from "react";
import CartIcon from "../Cart/CartIcon";
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
          backgroundColor: "#A9B6BC",
        },
        headerTitleStyle: {
          fontFamily: "Marker Felt",
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
      <Screen name="Shops" component={ShopList} />
      <Screen
        name="Detail"
        component={ShopDetail}
        options={{ headerRight: () => <CartIcon /> }}
      />
    </Navigator>
  );
};

export default StackNavigator;
// options={({route}) => ({title: route.params.shop.name})}
