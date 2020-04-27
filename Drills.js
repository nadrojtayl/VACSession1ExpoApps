import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, Linking} from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js";


const openURL = (url) => {
  Linking.openURL(url).catch((err) => console.error('An error occurred', err));
}

const WebLink = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

class FrontPage extends Component {
  render() {
    var that = this;
    return (
      <View style={{ alignItems: "center", backgroundColor:"powderblue", height:"100%", justifyContent:"center"}}>
        <Text style={{ backgroundColor:"powderblue", fontSize:"40px", color:"black", fontFamily: "Arial"}}>Drills</Text>
        <Button style={{color:"black"}} onPress={()=> Linking.openURL('http://www.google.com')} title=""></Button>

        <DropdownContent options = {["Gap Control #1", "Gap Control #2" , "Offensive Contribution: Joining Rush", "Offensive Contribution: Getting Pucks Through", "First Pass Efficiency #1" , "First Pass Efficiency #2", "Puck Retrieval" , "Best Ice: Returning After Rush" , "Best Ice: Using in 1 on 1" , "Best Ice: Returning in D-Zone", "Box-Out: Jets" , "Box-Out: Corner", "Box-Out: Full Ice", "Posture : Corner Contain" , "Posture: 1 on 1 Shadow"]}

        panel0 = {(
      <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around", flexDirection:"column"}}>
      <Image style={{width:"1400px" , height:"590px"}}
      source={{uri:"https://i.imgur.com/bwWKknl.png?1"}}/>

      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
  </View>
  )}

    panel1={(
    <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
    <Image style={{width:"1400px" , height:"590 px"}}
    source={{uri:"https://i.imgur.com/ap1Iqtc.png?1"}}/>
    <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
  </View>

)}

  panel2={(
<View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
<Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>

  </View>
 )}
 panel3={(
   <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
   <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
  </View>

)}

panel4={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>

)}

panel5={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>

)}

panel6={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>

)}

panel7={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>

)}

panel8={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>

)}

panel9={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>


)}

panel10={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>



)}

panel11={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>


)}

panel12={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>

)}

panel13={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>


)}

panel14={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
 </View>
  
)}>

</DropdownContent>

    </View>


      );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor:'blue',
    height:"100%"
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default FrontPage;
