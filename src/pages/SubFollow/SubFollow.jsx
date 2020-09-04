import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ListItem, Icon, Avatar } from "react-native-elements";
import { CustomTitle, SecondTitle } from "../../components/CommonText";
import { CommonButton } from "../../components/Button";
import { Button } from "native-base";

const SubFollow = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: 320,
          height: 201,
          justifyContent: "center",
          alignItems: "center",
          elevation: 0.5,
          shadowRadius: 10,
          opacity: 1,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
        }}
      >
        <Text style={styles.text}>
          Congratulations! You are now following {"\n"} Freddy M.
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            marginTop: 23,
          }}
        >
          <Button
            rounded
            style={{
              width: '100%',
              height: 55,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1BC6E5",
            }}
          >
            <Text>Home</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 16,
  },
  btn: {
    marginTop: 23,
    width: "50%",
  },
});

export default SubFollow;
