import React, { Component } from "react";
import { Button, Image, Text, View, TextInput, Picker, Linking } from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js";

const logoUri = "https://upload.wikimedia.org/wikipedia/commons/8/85/Cerebral_lobes.png"

class MyButtons extends Component {

  render(){return (<View> <Text> </Text> </View>)

  }
}



class App extends Component {
 render() {
   var that = this;
   return (

    <View style={{ alignItems: "center", backgroundColor:"powderblue", height:"100%", justifyContent:"center"}}>
      <Text style={{backgroundColor:"", fontSize:"40px", color:"black", fontFamily: "Arial"}}>Brain Freeze</Text>
      <Text style={{backgroundColor:"", fontsize:"30px", color:"black", fontFamily: "Arial"}}>Build Hockey IQ</Text>
    <DropdownContent style = {{height:"60%"}} options = {["Home Page", "Defenseman", "Offenseman" , "Goalie"]}

    panel0 = {(
      <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around", flexDirection:"row"}}>

  <Button style = {{backgroundColor:'blue'}} onPress={() => {that.props.parent.setState({destination:"UnevenStrength"})}} title="Uneven Strength" />
  <Button onPress={() => {that.props.parent.setState({destination:"SecondPage"})}}  title=  "Workouts"></Button>
  <Button onPress={() => {that.props.parent.setState({destination:"Drills"})}}  title=  "Drills"></Button>
  <Button onPress={() => {that.props.parent.setState({destination:"ThirdPage"})}}  title=  "My Chart"></Button>
</View>
    )}

    panel1={(
<View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
    <Text>
    Defenseman
    </Text>
    <Button onPress={() => {that.props.parent.setState({destination:"DefensemanDefensiveZ"})}} title="Defensive Zone" />
    <Button onPress={() => {that.props.parent.setState({destination:"DefensemanOffensiveZ"})}} title="Offensive Zone" />
    <Button onPress={() => {that.props.parent.setState({destination:"PlayingStyleD"})}} title="Playing Styles" />
    </View>

    )}

    panel2={(
<View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
      <Text>
    Offenseman
    </Text>
    <Button style = {{backgroundColor:'blue'}} onPress={() => {that.props.parent.setState({destination:"OffensemanDefensiveZ"})}} title="Defensive Zone" />
    <Button onPress={() => {that.props.parent.setState({destination:"OffensemanOffensiveZ"})}} title="Offensive Zone" />
    <Button onPress={() => {that.props.parent.setState({destination:"PlayingStyleO"})}} title="Playing Styles" />
    </View>
   )}
   panel3={(
     <Text>
   Goalie
   </Text>
 )}>

 </DropdownContent>


    <View style={{alignItems: "center", backgroundColor: "steelblue", height:"10%", justifycontent:"space-around" , width:"100%"}}>
       <Text style={{backgroundColor:"", fontsize: "60px", color:"white", fontFamily: "Arial"}}>"Humble and Hungry"</Text>
       </View>
     </View>
    );
 }
}
export default App;
