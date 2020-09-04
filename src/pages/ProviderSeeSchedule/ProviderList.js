import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Icon } from 'native-base'

const ProviderList = () => {

    const listData = [
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        {
            date : '02/22/2020',
            time : '3.30pm',
            place : 'Pizza Palace'
        },
        
    ]

    const renderList = ({item}) => {
        return(
            <>
<View style = {[styles.row, {paddingBottom : 8, borderBottomWidth : 0.5, borderBottomColor : 'gyar', marginBottom : 25}]}>
            <View style = {styles.hrView}>
                        <Text style = {styles.txt}>
                            {item.date}
                        </Text>
                    </View>
                    <View style = {[styles.hrView,{paddingLeft : 10}]}>
                        <Text style = {styles.txt}>
                        {item.time}
                        </Text>
                    </View>
                    <View style = {styles.hrView}>
                        <Text style = {styles.txt}>
                        {item.place}
                        </Text>
                    </View>
                    <View style = {[styles.hrView, {width : '10%', alignItems : 'flex-end'}]}>
                        <Icon type = 'FontAwesome5' name ='edit' style = {{fontSize : 18}} />
                    </View>
            </View>
            {/* <View style = {{borderBottomColor : 'gray', borderBottomWidth : 0.5, marginBottom : 15, backgroundColor : 'red'}} /> */}
            </>
        )
    }
    return (
        <View style = {styles.container}>
            
            <View style = {styles.row}>
                    <View style = {styles.hrView}>
                        <Text style = {styles.hrTxt}>
                            Date
                        </Text>
                    </View>
                    <View style = {[styles.hrView,{paddingLeft : 10}]}>
                        <Text style = {[styles.hrTxt]}>
                            Time
                        </Text>
                    </View>
                    <View style = {styles.hrView}>
                        <Text style = {styles.hrTxt}>
                            @
                        </Text>
                    </View>
                    <View style = {[styles.hrView, {width : '10%'}]}>
                        
                    </View>
            </View>
            <FlatList
      keyExtractor={(item, index) => {index}}
      data={listData}
      renderItem={renderList}
    />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginTop : 25,
        paddingHorizontal : 15
    },
    row : {
        flexDirection : 'row',
        marginBottom : 15
    },
    hrView :  {
        width : '30%',
        // backgroundColor : 'red',
        justifyContent : 'center',
        alignItems : 'flex-start',
        
    },
    hrTxt : {
        fontSize : 20,
        fontWeight : '600'
    },
    txt : {
        fontSize : 14,
        fontWeight : '600'
    }
})

export default ProviderList


