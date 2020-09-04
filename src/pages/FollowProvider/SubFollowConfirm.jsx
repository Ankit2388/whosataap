import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Avatar } from "react-native-elements";
import { CustomText } from "../../components/CommonText";
import { Button } from "native-base";
import { CommonButtons } from "../../components/Button";

const SubFollowConfirm = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            marginTop: 24,
            marginLeft: 10,
            flexDirection: "column",
          }}
        >
          <Avatar
            size="large"
            rounded
            source={{
              uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy",
            }}
          />
        </View>
        <View
          style={{ marginTop: 24, marginLeft: 19, flexDirection: "column" }}
        >
          <CustomText name="Freddy M." style={styles.mainText} />
          <CustomText
            name="I'm a great bartender with fun and flare!"
            style={styles.firstText}
          />
          <CustomText
            name="Often at John's TapHouse & Tea Room"
            style={styles.secondText}
          />
          <View style={{ marginTop: 11, flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Image
                source={require("../../../src/assets/images/round_01.png")}
                style={{ height: 19, width: 19, opacity: 1 }}
              />
            </View>
            <View style={{ flexDirection: "column", marginLeft: 8 }}>
              <Image
                source={require("../../../src/assets/images/round_02.png")}
                style={{ height: 19, width: 19, opacity: 1 }}
              />
            </View>
            <View style={{ flexDirection: "column", marginLeft: 8 }}>
              <Image
                source={require("../../../src/assets/images/calender_01.png")}
                style={{ height: 17, width: 17, opacity: 1 }}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 23 }}>
        <View style={{ marginLeft: 16 }}>
          <Image
            source={require("../../../src/assets/images/logo_01.png")}
            style={{ height: 15, width: 13, opacity: 1 }}
          />
        </View>
        <View style={{ marginLeft: 16 }}>
          <CustomText
            name="John's TapHouse & Tea Room"
            style={styles.firstName}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 22 }}>
        <View style={{ marginLeft: 16 }}>
          <Image
            source={require("../../../src/assets/images/logo_01.png")}
            style={{ height: 15, width: 13, opacity: 1 }}
          />
        </View>
        <View style={{ marginLeft: 16 }}>
          <CustomText name="Suzy Q's" style={styles.firstName} />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 22 }}>
        <View style={{ marginLeft: 16 }}>
          <Image
            source={require("../../../src/assets/images/logo_01.png")}
            style={{ height: 15, width: 13, opacity: 1 }}
          />
        </View>
        <View style={{ marginLeft: 16 }}>
          <CustomText
            name="John's TapHouse & Tea Room"
            style={styles.firstName}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 58,
          flexDirection: "row",
          // marginLeft: 28,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View>
          <CommonButtons style={styles.declineBtn} btnName={"Decline"} />
        </View>
        <View style={{ marginLeft: 7 }}>
          <CommonButtons style={styles.followBtn} btnName={"Decline"} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
  },
  firstText: {
    fontSize: 12,
    marginTop: 5,
  },
  secondText: {
    fontSize: 12,
    marginTop: 5,
  },
  firstName: {
    fontSize: 14,
    opacity: 1,
  },
  declineBtn: {
    width: 156,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1BC6E5",
  },
  followBtn: {
    width: 156,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1BC6E5",
  },
});

export default SubFollowConfirm;
