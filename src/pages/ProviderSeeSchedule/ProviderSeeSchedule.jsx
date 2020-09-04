import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import TabView from '../../components/TabBar'
import ProviderList from './ProviderList';

const renderTab = (tabactive) => {
    switch (tabactive) {
        case 1:
            return <ProviderList />
            break;
        case 2:
            return <ProviderList  />
            break;
            case 3:
                return <ProviderList  />
                break;
        default:
            break;
    }
}

const ProviderSeeSchedule = () => {
    const [tabactive, setTabactive] = useState(1);
    return (
        <SafeAreaView style = {{flex : 1}} >
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
       </SafeAreaView>
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

export default ProviderSeeSchedule
