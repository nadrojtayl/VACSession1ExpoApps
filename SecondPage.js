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

   write(obj){
    var that = this;
    console.log(that.props.parent.state)
    var that = this;
      fetch('https://hidden-lowlands-88243.herokuapp.com/db', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({crud_operation:"create", obj:obj, address:that.props.parent.state.writeAddress})
      }).then((response) => response.json())
      .then(function(data){
        console.log("HEREN")
        console.log(data);
        if(typeof data === "object"){

          that.setState({inputValue:"",collegeValue:""},function(){
            alert("Congratulations! You set the rules for " + data.College);
            that.props.parent.setState({destination:"FrontPage"});
          })

        }

      });
    }


  render() {
    var that = this;
    return (
      <View style = {{height: "100%"}}>
      <View style={{ alignItems: "center",
      backgroundColor: "white", paddingTop:"10%",
      height:"90%" }}>
         {/* <LinearGradient
          colors={['#dc143c', '#9198e5']}> */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "32px",
            color: "#dc143c"
          }}
        >
          Pong
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "16px",
            color:"#dc143c"
          }}
        >
          Add Rules for your School
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
      color = "#dc143c"
      />
          <TextInput
      style={{ height: 400,width: 300, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        that.setState({inputValue:text
        })
      }}
      value={this.state.inputValue}
      placeholder = {"Type here..."}
      color = "#dc143c"
      />
      <Button
          title="Save"
          onPress={() => {that.write({College:that.state.collegeValue,Rules:that.state.inputValue})}}
          color = "#dc143c"
          />
    </View>
     <Button
          title="Back"
          onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}
          
          color = "#dc143c"
          />
  
      <View style={{
            alignItems: "center",
            justifyContent: "center"
          }}/>


          {/* </LinearGradient> */}
      </View>

      <View style = {{flexDirection:"row" ,justifyContent:"space-around", height: "10%", backgroundColor: "#fc123c"}}>
      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}
      color = "white"
      title="House Rules" />
      <Text>  </Text>
      <Button onPress={() => {}} color = "white" title="Brackets" />
      <Text>  </Text>
      <Button onPress={() => {that.props.parent.setState({destination:"FourthPage"})}}
       color = "white"
       title="Queue Up" />
    </View>
    </View>
    );
  }
}

export default App;
