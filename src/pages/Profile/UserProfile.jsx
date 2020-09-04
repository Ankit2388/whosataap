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
      <View style={styles.design}>
        <CustomTitle name={"Provider Name"} style={styles.mainText} />
      </View>
      <View style={styles.secondDesign}>
        <SecondTitle name={"15-32-18-24"} style={styles.secondText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  design: {
    marginTop: 41,
  },
  mainText: {
    fontSize: 20,
    opacity: 1,
  },
  secondDesign: {
    marginTop: 14,
  },
  secondText: {
    fontSize: 14,
    opacity: 1,
  },
});

export default UserProfile;
