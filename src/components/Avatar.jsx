import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

export const CommonAvatar = (props) => {
    const {style} = props;
  return (
      <Avatar
        size={props.size}
        rounded
        source={props.source}
        style={[style]}
      />
  );
};
