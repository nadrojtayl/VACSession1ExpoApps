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
        <Text style={{ backgroundColor:"powderblue", fontSize:"40px", color:"black", fontFamily: "Arial"}}>Uneven Strength</Text>

        <DropdownContent options = {["Power Play" , "Penalty Kill"]}
        panel0 = {(
          <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
          <Text>
          Power Play
          </Text>

          <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.naver.com/')} title="hello"></Button>
          <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>

          </View>
              )}

        panel1 = {(
                <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
                <Text>
                Penalty Kill
                </Text>
                </View>
              )}>
</DropdownContent>

<Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>


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
