import React, { Component } from "react";
import { Button, Image, Text, View, TextInput, SectionList, StyleSheet, LinearGradient, ScrollView} from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js"; 
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
function do_alert (){
  return alert("Hello! I am an alert box!!");
}
class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {inputValue:""} 
    } 

 componentDidMount(){ 
       var that = this; 
     
       if(true){ 
         var url = "http://whispering-river-96325.herokuapp.com/table?table=";
         url = url + "colleges"
         var schema = fetch(url, { 
           method: "GET", 
           headers: { 
             "Content-Type": "application/json", 
             "Accept": "application/json" 
           } 
         }).then(function(res){ 
        
           that.setState({values:res}) 
        
         })  
       }  
     } 

  render() {
    var that = this;
    return (
      <View style = {{height: "100%"}}>
      <View style={{ alignItems: "center",
      backgroundColor: "#dc143c",
      height:"90%" }}>
         {/* <LinearGradient
          colors={['#dc143c', '#9198e5']}> */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop:"15%",
            fontSize: "32px",
            color:"white"
          }}
        >
          Pong
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "16px",
            color:"white"
          }}
        >
          Search for College/University
        </Text>
        <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        that.setState({inputValue:text
        })
      }}
      value={this.state.inputValue}
      placeholder = {"Type here..."}
      />
      <Button
          title="Search"
          onPress={() => do_alert()}
          color="black"
          />
      <View style={{
            backgroundColor: "transparent",
             width: "20%",
             position: "absolute",
             top: 0, right:0
      }}>
          <Button
          title= "Add/Edit College"
          onPress={() => {that.props.parent.setState({destination:"SecondPage"})}}
          color = "black"
          />
          </View>
      <View style={{
            alignItems: "center",
            justifyContent: "center"
          }}/>
        <ScrollView
   style={{height:"50px",
          width: "200px"}}>
    <Text style={{borderColor: "blue", color: "white"}}
    onPress={() => {that.props.parent.setState({destination:"ThirdPage"})}}>
      University of Miami
    </Text>
    <Text style={{borderColor: "#20232a", color: "white"}}>
      Lehigh
    </Text>
    <Text style={{borderColor: "#20232a", color:"white"}}>
      Bucknell
    </Text>
    <Text style={{borderColor: "#20232a", color:"white"}}>
      UCLA
    </Text>
</ScrollView>
          {/* </LinearGradient> */}
      </View>

      <View style = {{flexDirection:"row" ,justifyContent:"space-around", height: "10%", backgroundColor: "#fc123c"}}>
      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}
      color="black"
      title="House Rules" />
      <Text>  </Text>
      <Button onPress={() => {that.props.parent.setState({destination:"Page"})}}
      color="black"
      title="Brackets" />
      <Text>   </Text>
      <Button style = {{color:'black'}} onPress={() => {that.props.parent.setState({destination:"FourthPage"})}}
      color="black"
      title="Queue Up" />
    </View>
    </View>
    );
  }
}

export default App;
