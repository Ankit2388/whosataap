import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "native-base";

export const CommonButton = (props) => {
  const { style } = props;
  return (
    <View style={[style]}>
      <Button
        rounded
        style={{
          width: 150,
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#1BC6E5'
        }}
      >
        <Text>{props.btnName}</Text>
      </Button>
    </View>
  );
};
