import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transaction from "../Screens/Transaction";
import Search from "../Screens/Search";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
