import React, { Component } from "react";
import { Button, Image, Text, View, TextInput, ScrollView } from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js"; 
class App extends Component {

  render() {
      var that= this;
    return (

<View style={{ alignItems: "center" }}>
   <Image  source={{
          uri: '/img.png'
        }}

        style = {{height:"30%",width:"30%", opacity:"50%"}}

        >
      </Image>
    <Text
      style={{
        textAlign: "center",
        fontWeight: "bold",
        color:"#FFF388"
      }}>
      MY FUTURE

      </Text>
    <Text
    style={{
        textAlign: "center",
        color:"black"}}>
        </Text>
        <Text
        style={{color:"#FFF388",fontWeight:"bold", textAlign:'center', fontSize:"30px"}}>
      Get to the Next Level: See Other Athletes Daily Schedules
      {'\n'}  </Text>


     
      <View
        style = {{flexDirection:"row" ,justifyContent:"space-around"}}>
        <ScrollView horizontal = {true}>
        <Text>  </Text>
        <Button style = {{backgroundColor:"red", color:'red'}} onPress={() => {that.props.parent.setState({destination:"FourthPage"})}} title="lacrosse" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {that.props.parent.setState({destination:"FifthPage"})}} title="basketball" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
        <Button onPress={() => {that.props.parent.setState({destination:"SixthPage"})}} title="baseball" />
        </ScrollView>
      </View>

      <View
        style = {{flexDirection:"row"}}>
        <Button onPress={() => {that.props.parent.setState({destination:"Abouttheplayers" })}} title="About the players" />
        <Text>  </Text>
        <Text>  </Text>
        <Text>  </Text>
  </View>
  </View>
);
}
}


export default App;
