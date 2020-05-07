import React, { Component } from "react";
import { Button, StyleSheet, Image, Text, View, Dimensions, TextInput, ScrollView } from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js"; 


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class App extends Component {

  render() {
      var that= this;
    return (

<View style={{ alignItems: "center" }}>
 <Image  source={require('./assets/angryimg.png')
        }

        style = {{opacity:1, zIndex: -500, position:'absolute', height:height, width:width}}

        >
      </Image>
   <Image  source={require('./assets/img.png')
        }

        style = {{opacity:1, zIndex: -500, height:height*0.3, width:width}}

        >
      </Image>
    <Text
      style={{
        paddingBottom:height*0.05,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: height*0.05,
        color:"#FFF388"
      }}>
      MY FUTURE

      </Text>
    <Text
    style={{
        textAlign: "center",
        fontSize: height*0.05,
        color:"black"}}>
        </Text>
        <Text
        style={{paddingBottom:height*0.05, color:"#FFF388", paddingTop:height*0.05,fontWeight:"bold", textAlign:'center', fontSize:"30px"}}>
      Get to the Next Level: See Other Hockey Athletes Daily Schedules
      {'\n'}  </Text>


     


          <Text >High School</Text>
        <View style = {{flexDirection:'row'}}>
          <ScrollView horizontal = {true}>
            <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "boarding school" />
            <Text>  </Text>
            <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "day school" />
            <Text>  </Text>
            <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "public school" />
          </ScrollView>
        </View>
        <Text >College</Text>
          <View
          style = {{flexDirection:"row" }}>
          <ScrollView horizontal = {true}>
            <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "Ivy League" />
            <Text>  </Text>
            <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "NESCAC" />
            <Text>  </Text>
            <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "Top universities for lacrosse" />
          </ScrollView>
        </View>
         <Text>Pro</Text>
          <View
          style = {{flexDirection:"row" }}>
            <ScrollView horizontal = {true}>
              <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "PLL" />
             
              <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "MLL" />
             
             <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}} title= "NLL" />
            </ScrollView> 
        </View>

  </View>
);
}
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor:'white',
    height:"100%"
  },
  logo: {
    height: 80
  },
  title: {
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});


export default App;

