import React from "react";
import { View, Text } from "react-native";

export const CustomTitle = (props) => {
    const {style} = props;
  return (
    <View style={[style]}>
      <Text style={{fontSize: 25}}>{props.name}</Text>
    </View>
  );
};

export const SecondTitle = (props) => {
    const {style} = props;
    return (
      <View style={[style]}>
        <Text style={{fontSize: 15}}>{props.name}</Text>
      </View>
    );
  };
