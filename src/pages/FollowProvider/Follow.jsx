import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { CustomTitle, SecondTitle } from "../../components/CommonText";
import { CommonButton } from "../../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const Follow = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 23, }}>
        <CustomTitle name={"Follow Someone"} style={styles.follow} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 46, }}>
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
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <CommonButton
          btnName={"Go"}
          style={styles.btn}
          onPress={() => navigation.navigate("SubFollowConfirm")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  follow: {
    fontSize: 20
  },
  enterCode: {
    fontSize: 14,
    width: "80%",
  },
  btn: {
    marginTop: 22,
    width: "80%",
  },
});

export default Follow;
