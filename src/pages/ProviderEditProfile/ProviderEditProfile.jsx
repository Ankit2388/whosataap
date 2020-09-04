import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Icon } from "native-base";
import user from "../../assets/images/Ellipse.png";
import uploadImg from '../../assets/images/uploadImg.png';

const ProviderEditProfile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <View style={styles.header}>
          <View>
            <Image source={user} />
            <Image source={uploadImg} style = {{position : 'absolute' , bottom : 15, right : 5}} />
          </View>
          <Text style={styles.headerTitle}>User Name Here</Text>
          <Text style={styles.headerTxt}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.left}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.inputTxt}>JohnDoe@gmail.com</Text>
            </View>
            <View style={styles.Right}>
              <Icon type="FontAwesome5" name="edit" style={{ fontSize: 17 }} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.left}>
              <Text style={styles.label}>Date of Birth</Text>
              <Text style={styles.inputTxt}>May 22, 1996</Text>
            </View>
            <View style={styles.Right}>
              <Icon type="FontAwesome5" name="edit" style={{ fontSize: 17 }} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.left}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.inputTxt}>000-000-0000</Text>
            </View>
            <View style={styles.Right}>
              <Icon type="FontAwesome5" name="edit" style={{ fontSize: 17 }} />
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.left}>
              <Text style={styles.label}>Password</Text>
              <Text style={styles.inputTxt}>***************</Text>
            </View>
            <View style={styles.Right}>
              <Icon type="FontAwesome5" name="edit" style={{ fontSize: 17 }} />
            </View>
          </View>
          {/* <View style = {styles.section}>
                    <View style = {styles.row}>
                        <Text>Date of Birth</Text>
                    </View>
                    <Text>May 22, 1996</Text>
                </View>
                <View style = {styles.section}>
                    <View style = {styles.row}>
                        <Text>Phone</Text>
                    </View>
                    <Text>000-000-0000</Text>
                </View>
                <View style = {styles.section}>
                    <View style = {styles.row}>
                        <Text>Password</Text>
                    </View>
                    <Text>***************</Text>
                </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
  },
  headerTxt: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 30,
    marginTop: 7,
  },
  content: {
    width: "95%",
    // backgroundColor : 'yellow',
    alignSelf: "center",
    marginTop: 50,
  },
  section: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 25,
    // backgroundColor : 'yellow',
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  left: {
    width: "85%",
    alignItems: "flex-start",
  },
  Right: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputTxt: {
    fontSize: 14,
  },
});

export default ProviderEditProfile;
