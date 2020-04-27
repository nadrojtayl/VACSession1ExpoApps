import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View, Linking} from "react-native";

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
        <Text style={{ backgroundColor:"powderblue", fontSize:"40px", color:"black", fontFamily: "Arial"}}>Offensive Zone</Text>
        <Text style={{ backgroundColor:"powderblue", fontSize:"20px", color:"black", fontFamily: "Arial"}}>Defenseman Edition</Text>
        <Button style={{color:"black"}} onPress={()=> Linking.openURL('http://www.google.com')} title="Offense Activation"></Button>
        <Button style={{color:"black"}} onPress={()=> Linking.openURL('http://www.google.com')} title="O-Zone Faceoff"></Button>
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
