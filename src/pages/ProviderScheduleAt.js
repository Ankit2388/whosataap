import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, } from "react-native";
import Text from "../components/Elements/Text";
import CustomInput from "../components/Elements/Inputs/CustomInput";
import { BackButton, ConfirmButton } from "../components/Elements/CustomButton";
import TimePicker from "../components/Elements/Inputs/TimePicker";
import Form from "../components/Elements/Containers/Form";
import Row from "../components/Elements/Containers/Row";
import PageLoadingIndicator from "../components/Elements/PageLoadingIndicator";
import { POST } from "../Config/URLs";
import useAlert from "../Hooks/useAlert";
import { my_axios } from "../http-common";
import DatePicker from "../components/Elements/Inputs/CustomDatePicker";
import { get } from 'lodash';

const ProviderScheduleAt = ( { navigation } ) => {
    const [state, setState] = useState({});
    const [{ generalError }] = useAlert();
    const [loading, setLoading] = useState(false);

    // Links
    const backBtnHandler = () => navigation.goBack();

    // Form values
    const handleStateUpdate = ( name, value ) => setState({ ...state, [name]: value })
    const getValue = ( name, default_value = '' ) => get(state, name, default_value)

    // Form submit
    const confirmBtnHandler = async () => {
        setLoading(true);
        try {
            await my_axios('my/schedule', { method: POST, params: state });
            navigation.push("ProviderScheduleSuccess");
        } catch (err) {
            console.log({ err });
            generalError()
        }
        setLoading(false);
    }

    return (
        <PageLoadingIndicator loading={loading}>
            <Form>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={{ marginTop: 25, marginLeft: 10 }}>Schedule @</Text>
                        <CustomInput
                            value={getValue('schedule')}
                            onChangeText={value => handleStateUpdate('schedule', value)}
                            style={styles.scheduleTitleStyle}
                        />

                        <Text style={{ marginTop: 10, marginLeft: 10 }}>Date</Text>
                        <DatePicker
                            value={getValue('date')}
                            onChange={value => handleStateUpdate('date', value)}
                        />

                        <Text style={{ marginLeft: 10 }}>Here Until:</Text>
                        <Row>
                            <TimePicker
                                label="Start time"
                                value={getValue('start_date')}
                                onChange={value => handleStateUpdate('start_date', value)}
                            />
                            <TimePicker
                                value={getValue('end_date')}
                                label="End time"
                                onChange={value => handleStateUpdate('end_date', value)}
                            />
                        </Row>

                        <Text style={{ marginLeft: 10, marginTop: 20, marginBottom: 8 }}>What's Up</Text>
                        <CustomInput
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
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
    customNavigationStyle: {
        marginHorizontal: -10,
    },
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

export default ProviderScheduleAt;
