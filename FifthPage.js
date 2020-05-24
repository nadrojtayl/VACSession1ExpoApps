import React, { Component } from "react";
import { Button, Image, Text, View, TextInput, SectionList, StyleSheet, LinearGradient, ScrollView} from "react-native";
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
function do_alert (){
  return alert("Hello! I am an alert box!!");
}
class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {inputValue:"", collegeValue:""} 
    } 

  render() {
    var that = this;
    return (
    
      <View style = {{alignItems:'center',justifyContent:"center", height:"100%"}}>
       
       <ScrollView style = {{marginTop:"9%"}}>
        <Button color = "#dc143c" onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title = {"Back"}></Button>
        <Text>{
          `Collection and Use of Personal Information

Personal information is data that can be used to identify or contact a single person.

PongRules will never sell your private data, or give your data to any party, for any reason.

Protection of Personal Information StreamedBook takes security very seriously. We protect your personal information and financial transation data during transit using encryption such as Transport Layer Security (TLS).

When your personal data is stored, it is stored on an EBS encrypted remote hard drive with limited internet access, on hardware owned by Amazon Web services.

Rules Status

The rules uploaded herein are in no way officially related to the schools they are connected with within the app. They are uploaded by anonymous individuals.

Drining Policy and Liability
PongRules in no way condones underage drinking, or encourages alcohol use through the existence of this app. Please drink responsibly, or not at all.




`
        }</Text></ScrollView>
      </View>
  
    );
  }
}

export default App;
