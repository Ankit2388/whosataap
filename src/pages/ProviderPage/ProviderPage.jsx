import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { RadiusButton, LargeBtn } from "../../components/Elements/CustomButton";
import { Container, Header, Content, Button } from "native-base";

const ProviderPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to block this user?
            </Text>

            <View style={{ width: Dimensions.get("window").width - 110 }}>
              <RadiusButton
                title="No, Go Back"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{ marginVertical: 10, borderRadius: 25 }}
              />
              <RadiusButton
                title="Yes"
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={{ marginVertical: 10, borderRadius: 25 }}
              />
            </View>

            {/* <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight> */}
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  bttn: {
    width: "50%",
  },
});

export default ProviderPage;
