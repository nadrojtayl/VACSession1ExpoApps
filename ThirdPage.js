import React, { Component } from "react";
import { Button, Image, Dimensions, Text, View, TextInput, SectionList, StyleSheet, LinearGradient} from "react-native";
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
function do_alert (){
  return alert("Hello! I am an alert box!!");
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {inputValue:""} 
    } 

  render() {
    var that = this;
    return (
      <View style = {{height: "100%"}}>
      <View style={{ alignItems: "center",
      backgroundColor: "transparent",
      paddingTop:height*0.1,
      height:"90%" }}>
         {/* <LinearGradient
          colors={['#dc143c', '#9198e5']}> */}
      <Button
          title="Go Back"
          onPress={() => {that.props.parent.setState({destination:"FrontPage"})}
        }
          />
          <View style = {{
            height: "70%",
            justifyContent: "center"
          }}>
          <Text style = {{textAlign: 'center',
        fontSize: '13px',
        color:"#dc143c",
        justifyContent: "center"}}>
        These are the Rules
        </Text>
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
