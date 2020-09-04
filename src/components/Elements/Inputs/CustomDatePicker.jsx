import React, { useEffect, useState } from "react";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import moment from "moment"

export default ( { value, onChange, label = 'Select date' } ) => {
    const [show, setShow] = useState(false)
    const [dateVal, setDate] = useState(new Date())

    useEffect(() => {
        if (value) {
            setDate(value)
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
    const formatDate = ( date ) => {
        return moment(date).format('MMM, D YYYY')
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.scheduleDateInputStyle}>
            <Text style={styles.dateText}>{value ? formatDate(dateVal) : label}</Text>
            <DateTimePickerModal
                isVisible={show}
                value={dateVal}
                mode="date"
                display="default"
                onConfirm={onChangeValue}
                onCancel={hideDatePicker}
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    scheduleDateInputStyle: {
        flex: 1,
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "gray",
        paddingHorizontal: 10

    },

    scheduleDateStyle: {
        height: 50,
        borderWidth: 0,
        marginVertical: 10,
        width: "100%",
    },

    datepicker: {
        borderWidth: 0
    },

    dateText: {
        // height: "100%",
        fontSize: 20,
        textAlign: "center"
    }
})
