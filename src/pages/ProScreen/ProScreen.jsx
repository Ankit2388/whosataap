import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import TabView from '../../components/TabBar'
import Subscribers from './Subscribers';
import Request from './Request';

const renderTab = (tabactive) => {
    switch (tabactive) {
        case 1:
            return <Subscribers text = 'Tab-1'/>
            break;
        case 2:
            return <Request />
            break;
            case 3:
                return <Subscribers text = 'Tab-3'/>
                break;
        default:
            break;
    }
}

const ProScreen = () => {

    const [tabactive, setTabactive] = useState(1);
    return (
        <View style = {{flex : 1,  paddingTop : 15, backgroundColor : '#fff'}}>       
         <TabView 
           active={tabactive} 
           titleOne="Subscribers" 
           titleTwo="Requests"
           titleThree = 'Blocked'
           onChangeTab={(tabactive)=> setTabactive(tabactive) } />
            <View style={style.ButtonView}>           
          {
              renderTab(tabactive)
              
          }
          </View>
        </View>
    )
}


const style = StyleSheet.create({
    ButtonView: {
        flex: 1 ,
        width : '100%',
        // backgroundColor : 'red'
    //   alignItems: 'center',
    //   justifyContent: 'center',
    },   
})

export default ProScreen
