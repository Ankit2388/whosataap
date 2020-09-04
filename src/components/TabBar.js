import React from "react";
import { View, StyleSheet, Text } from "react-native";
// import {Colors, FontSize} from '../constant';
import Colors from "../Config/Colors";

const TabView = (props) => {
  const { titleOne, titleTwo, titleThree, active, onChangeTab } = props;
  var isactive1 = [style.singeltab, active == 1 ? style.active : {}];
  var isactive2 = [style.singeltab, active == 2 ? style.active : {}];
  var isactive3 = [style.singeltab, active == 3 ? style.active : {}];
  var isactiveText1 = [style.Tabtext, active == 1 ? style.activeText : {}];
  var isactiveText2 = [style.Tabtext, active == 2 ? style.activeText : {}];
  var isactiveText3 = [style.Tabtext, active == 3 ? style.activeText : {}];
  return (
    <View style={style.tabview}>
      <View style={isactive1} onStartShouldSetResponder={() => onChangeTab(1)}>
        <Text style={isactiveText1}> {titleOne}</Text>
      </View>
      <View style={isactive2} onStartShouldSetResponder={() => onChangeTab(2)}>
        <Text style={isactiveText2}> {titleTwo} </Text>
      </View>
      <View style={isactive3} onStartShouldSetResponder={() => onChangeTab(3)}>
        <Text style={isactiveText3}> {titleThree} </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  tabview: {
    height: 60,
    width: "90%",
    backgroundColor: "#F0F0F0",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 10,
    padding: 7,
  },
  singeltab: {
    flexDirection: "column",
    width: "33.33%",
    alignItems: "center",
    justifyContent: "center",
  },
  Tabtext: {
    color: "#000",
    fontSize: 15,
  },
  active: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  activeText: {
    color: Colors.buttonColor,
    fontSize : 16
  },
});
export default TabView;
