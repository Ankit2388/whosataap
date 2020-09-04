import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default ( props ) => {
  const { title = "Enter", style = {}, textStyle = {}, onPress } = props;

  return (
      // <View style={styles.textAreaContainer} {...props}>
      //   {props.children}
      //   <TextInput
      //     style={styles.textArea}
      //     underlineColorAndroid="transparent"
      //     placeholder="Type something"
      //     placeholderTextColor="grey"
      //     numberOfLines={10}
      //     multiline={true}
      //   />
      // </View>
      <TextInput style={styles.textArea} {...props}>
        {props.children}
      </TextInput>
  );
};

export const styles = StyleSheet.create({
  textAreaContainer: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    marginHorizontal: 10,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    justifyContent: "flex-start",
    textAlignVertical: "top",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 10,
  },
});
