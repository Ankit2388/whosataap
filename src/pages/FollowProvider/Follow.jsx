import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { CustomTitle, SecondTitle } from "../../components/CommonText";
import { CommonButton } from "../../components/Button";

const Follow = () => {
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CustomTitle name={"Follow Someone"} style={styles.follow} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <SecondTitle name="Enter Provider Code : " style={styles.enterCode} />
      </View>
      <View
        style={{ justifyContent: "center", alignItems: "center", marginTop: 8 }}
      >
        <TextInput
          style={{
            borderWidth: 0.5,
            width: "80%",
            height: 45,
            borderRadius: 5,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <CommonButton btnName={"Go"} style={styles.btn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  follow: {
    marginTop: 23,
  },
  enterCode: {
    marginTop: 46,
    width: "80%",
  },
  btn: {
    marginTop: 22,
    width: "80%",
  },
});

export default Follow;
