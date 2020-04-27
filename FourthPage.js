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
        <TextInput
    style={{ height: 50,width: 300, borderColor: 'gray', borderWidth: 1 }}
    onChangeText={function(text){
      // if (colleges.indexOf(text)!== -1){
      //   alert("that already exists")
      // } else {
      //
      // }
      that.setState({collegeValue:text
      })
    }}
    value={this.state.collegeValue}
    placeholder = {"Enter College/University"}
    color = "white"
    />
      <Button
          title="Search"
          onPress={() => {that.props.parent.setState({destination:""})}
        }
          />
          <View style = {{
            height: "70%",
            justifyContent: "center"
          }}>
          <ScrollView
     style={{height:"50px",
            width: "200px"}}>
      <Text style={{borderColor: "blue", color: "white"}}
      onPress={() => {that.props.parent.setState({destination:""})}}>
        Table 1
      </Text>
      <Text style={{borderColor: "#20232a", color: "white"}}>
        Table 2
      </Text>
      <Text style={{borderColor: "#20232a", color:"white"}}>
        Table 3
      </Text>
      <Text style={{borderColor: "#20232a", color:"white"}}>
        Table 4
      </Text>
  </ScrollView>

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
    </View>
    );
  }
}

export default App;
