import React from "react";
import { View, Text } from "react-native";

export const CustomTitle = (props) => {
  const { style } = props;
  return (
      <Text style={[style]}>{props.name}</Text>
  );
};

export const SecondTitle = (props) => {
  const { style } = props;
  return (
      <Text style={[style]}>{props.name}</Text>
  );
};

export const CustomText = (props) => {
  const { style } = props;
  return (
      <Text style={[style]}>{props.name}</Text>
  );
};
