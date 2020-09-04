import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Text from "../components/Elements/Text";
import CustomInput from "../components/Elements/Inputs/CustomInput";
import { BackButton, ConfirmButton } from "../components/Elements/CustomButton";
import TimePicker from "../components/Elements/Inputs/TimePicker";
import Row from "../components/Elements/Containers/Row";
import Form from "../components/Elements/Containers/Form";
import PageLoadingIndicator from "../components/Elements/PageLoadingIndicator";
import useAlert from "../Hooks/useAlert";
import { my_axios } from "../http-common";
import { POST } from "../Config/URLs";
import { get } from 'lodash';

const ProviderCheckinAt = ( { navigation } ) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(false);
    const [{ generalError }] = useAlert();

    // Form values
    const handleStateUpdate = ( name, value ) => setState({ ...state, [name]: value })
    const getValue = ( name, default_value = '' ) => get(state, name, default_value)

    const confirmBtnHandler = async () => {
        setLoading(true);
        try {
            await my_axios('my/check_in', { method: POST, params: state });
            navigation.push("ProviderSuccess");
        } catch (err) {
            generalError()
        }
        setLoading(false);
    }
    // Links
    const backBtnHandler = () => navigation.goBack();

    return (
        <PageLoadingIndicator loading={loading}>
            <Form>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ marginTop: 25, marginLeft: 10 }}>Check-in @</Text>
                        <CustomInput
                            value={getValue('schedule')}
                            onChangeText={value => handleStateUpdate('schedule', value)}
                            style={styles.scheduleTitleStyle}
                        />

                        <Text style={{ marginLeft: 10, marginTop: 10 }}>Here Until:</Text>

                        <Row>
                            <TimePicker
                                label="Start time"
                                value={getValue('start_date')}
                                onChange={value => handleStateUpdate('start_date', value)}
                            />
                            <TimePicker
                                label="End time"
                                value={getValue('end_date')}
                                onChange={value => handleStateUpdate('end_date', value)}
                            />
                        </Row>

                        <Text style={{ marginLeft: 10, marginTop: 20, marginBottom: 8 }}>
                            What's Up
                        </Text>

                        <CustomInput
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            value={getValue('whats_up')}
                            onChangeText={value => handleStateUpdate('whats_up', value)}
                        />

                        <ConfirmButton onPress={confirmBtnHandler}/>
                        <BackButton onPress={backBtnHandler}/>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </Form>
        </PageLoadingIndicator>
    );
};

const styles = StyleSheet.create({
    scheduleTitleStyle: {
        height: 50,
        marginHorizontal: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 4,
        marginVertical: 10,
        padding: 10,
    },
});

export default ProviderCheckinAt;
