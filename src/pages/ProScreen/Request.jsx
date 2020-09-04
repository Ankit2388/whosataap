import React from "react";
import { View, Text, FlatList } from "react-native";
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';

const list = [
    {
      name: "Freddy M.",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Last Active 2 Days Ago",
    },
    {
      name: "Ashley O.",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Last Active 15 Min Ago",
    },
    {
      name: "Matt P.",
      avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Active Now",
    },
    {
      name: "Alyssa U.",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Last Active 15 Min Ago",
    },
  ];

const Request = () => {

    const renderItem = ({ item }) => (
        <List style = {{width : "95%",alignSelf : 'center', marginTop : 25}}>
        <ListItem avatar>
          <Left>
            <Thumbnail source={{ uri: item.avatar_url }} />
          </Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.subtitle}</Text>
          </Body>
          {/* <Right>
            <Text note>3:43 pm</Text>
          </Right> */}
          <Right style = {{flexDirection : 'row',alignItems : 'center', justifyContent : 'center'}}>
          <Icon name = 'check' type = 'AntDesign' style = {{fontSize : 35}} />
                <Icon name = 'close' type = 'AntDesign' style = {{fontSize : 35}} />
                
              </Right>
        </ListItem>
      </List>
      )

    return (
         <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* <Text>this is Subscribers component</Text> */}
      <FlatList
      keyExtractor={(item) => {item.name}}
      data={list}
      renderItem={renderItem}
    />
    </View>
    )
}

export default Request
