import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ClockIcon } from "../../Icons";
import moment from "moment"

export default ( { value, label = 'Select time', onChange } ) => {

    const [show, setShow] = useState(false)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        if (value) {
            setTime(value)
        }
    }, [value]);

    const onPress = () => {
        console.log(value)
        setShow(true)
    }

    const onChangeValue = ( value ) => {
        hideDatePicker()
        onChange(value)
    }

    const hideDatePicker = () => {
        setShow(false)
    }
    const formatDate = ( time ) => {
        return moment(time).format('HH:mm:ss')
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.ClockWrapper}>
            <ClockIcon/>
            <Text style={styles.timeText}>{value ? formatDate(time) : label}</Text>

            <DateTimePickerModal
                isVisible={show}
                value={time}
                mode="time"
                placeholder={label}
                is24Hour={true}
                display="default"
                onConfirm={onChangeValue}
                onCancel={hideDatePicker}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ClockWrapper: {
        flex: 1,
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "gray",
    },

    styles: {
        borderWidth: 0
    },

    timeText: {
        marginLeft: 10
    }
});
