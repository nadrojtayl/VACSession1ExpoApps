import React, { Component } from "react";
import { Button, Image, Text, View, TextInput, SectionList, StyleSheet, LinearGradient} from "react-native";
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
function do_alert (){
  return alert("Hello! I am an alert box!!");
}
var colleges = ["Bucknell", "Lehigh", "University of Miami"]
class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {inputValue:"", collegeValue:""} 
    } 
send(){ 
  var url = "https://whispering-river-96325.herokuapp.com/table?table=colleges&schema=true";
 console.log(url) 
  var body = JSON.stringify({
    college_name:this.state.collegeValue,
    college_rules:this.state.inputValue
  }); 
  var that = this; 
  var schema = fetch(url, { 
    method: 'POST', 
    body:body, 
    headers: { 
      "Content-Type": "application/json", 
      "Accept": "application/json" 
    } 
  }).then(function(res){ 
    console.log(res)
    alert("Saved!") 
    that.setState({"hidden":true}) 
  })  
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
            fontSize: "32px",
            color: "white"
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
          College/University
        </Text>
    <View style = {{justifyContent: "space", flexDirection: "column"}}>
      <Button
          title="Go Back"
          onPress={() => {that.props.parent.setState({destination:"FrontPage"})}
        }
        color = "transparent"
          />
          <TextInput
      style={{ height: 50,width: 300, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        if (colleges.indexOf(text)!== -1){
          alert("that already exists")
        } else {

        }
        that.setState({collegeValue:text
        })
      }}
      value={this.state.collegeValue}
      placeholder = {"Enter College/University"}
      color = "white"
      />
          <TextInput
      style={{ height: 400,width: 300, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        that.setState({inputValue:text
        })
      }}
      value={this.state.inputValue}
      placeholder = {"Type here..."}
      color = "white"
      />
      <Button
          title="Save"
          onPress={() => {that.send.bind(that)()}}
          color = "transparent"
          />
    </View>
      <View style={{
            alignItems: "center",
            justifyContent: "center"
          }}/>


          {/* </LinearGradient> */}
      </View>

      <View style = {{flexDirection:"row" ,justifyContent:"space-around", height: "10%", backgroundColor: "#fc123c"}}>
      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}
      color = "transparent"
      title="House Rules" />
      <Text>  </Text>
      <Button onPress={() => {}} color = "transparent" title="Brackets" />
      <Text>  </Text>
      <Button onPress={() => {that.props.parent.setState({destination:"FourthPage"})}}
       color = "transparent"
       title="Queue Up" />
    </View>
    </View>
    );
  }
}

export default App;