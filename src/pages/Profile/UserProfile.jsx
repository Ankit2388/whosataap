import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import { CustomTitle, SecondTitle } from "../../components/CommonText";

const UserProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        paddingTop: 35,
      }}
    >
      <Avatar
        size="xlarge"
        rounded
        source={{
          uri:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        }}
      />
      <CustomTitle name={"Vidish Atulkumar Shah"} style={styles.design} />
      <SecondTitle name={"All - Rounder"} style={styles.secondDesign} />
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    marginTop: 41,
  },
  secondDesign: {
    marginTop: 14,
  },
});

export default UserProfile;
