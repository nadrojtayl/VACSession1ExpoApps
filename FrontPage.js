import React, { Component } from "react";
import { Button, Image, Text, Dimensions, View, TextInput, SectionList, StyleSheet, LinearGradient, ScrollView} from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js"; 
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
function do_alert (){
  return alert("Hello! I am an alert box!!");
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {
        inputValue:"",
        schools:["Lehigh","Villanova","Brown"]
     } 
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
      backgroundColor: "transparent",
      height:"90%" }}>
         {/* <LinearGradient
          colors={['#dc143c', '#9198e5']}> */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop:"15%",
            fontSize: "32px",
            color:"#dc143c"
          }}
        >
          Pong
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "24px",
            color:"#dc143c"
          }}
        >
          Search for College/University
        </Text>
        <TextInput
      style={{ height: 40, width:width*0.5, borderColor: 'gray', borderWidth: 1 }}
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
          color="#dc143c"
          />
      <View style={{
            backgroundColor: "transparent",
             width: "20%",
             position: "absolute",
             top: 0, right:0
      }}>
          <Button
          title= "Add School"
         
          onPress={() => {that.props.parent.setState({destination:"SecondPage"})}}
          color = "#dc143c"
          />
          </View>
      <View style={{
            alignItems: "center",
            justifyContent: "center"
          }}/>
        <ScrollView
   style={{}}>
   {
    that.state.schools.map(function(school){
      return (
        <Text style={{borderColor: "blue", marginTop:height*0.04, fontSize:'18em', color: "#dc143c"}}
    onPress={() => {that.props.parent.setState({destination:"ThirdPage"})}}>
      {school}
    </Text>
        )
    })
   }
</ScrollView>
          {/* </LinearGradient> */}
      </View>

      <View style = {{flexDirection:"row" ,justifyContent:"space-around", height: "10%", backgroundColor: "#dc143c"}}>
      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}
      color="white"
      title="House Rules" />
      <Button style = {{color:'black'}} onPress={() => {that.props.parent.setState({destination:"FourthPage"})}}
      color="white"
      title="Queue Up" />
    </View>
    </View>
    );
  }
}

export default App;
