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
        <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} style = {{position:'absolute', top:'5%', left:"30%"}} title = {"Back"}></Button>
        <Text>All your rights are protected. Rules are randomly uploaded and in no way affiliated with them.</Text>
      </View>
  
    );
  }
}

export default App;
