import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Transaction from "../Screens/Transaction";
import Search from "../Screens/Search";
import Ionicons from "react-native-vector-icons/Ionicons";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Transaction") {
          iconName = "book";
        } else if (route.name === "Search") {
          iconName = "search";
        }

        // Você pode devolver qualquer componente que desejar aqui!
        return (
          <Ionicons
            name={iconName}
            size={size}
            color={color}
            size={size}
          />
        );
      }
    })}
    tabBarOptions={{
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "black",
      style: {
        height: 130,
        borderTopWidth: 0,
        backgroundColor: "#5653d4"
      },
      labelStyle: {
        fontSize: 20,
      },
      labelPosition: "beside-icon",
      tabStyle: {
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#5653d4"
      }
    }}
    >
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
