import React, { Component } from "react";
import { Button, Image, Text, View, TextInput, SectionList, StyleSheet, LinearGradient} from "react-native";
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import college_list from "./colleges.js"
console.log("HEREN")
console.log(Object.keys(college_list))
function do_alert (){
  return alert("Hello! I am an alert box!!");
}

class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {collegeEmail:"", inputValue:"", collegeValue:"", college_emails:[]} 
    } 

    componentDidMount(){
     var colleges = college_list.college_list.map(function(str){
        return str.substring(
            str.lastIndexOf("(") + 1, 
            str.lastIndexOf(")")
        );
      })

     var colleges_2 = college_list.college_list_2.map(function(str){
        return str.substring(
            str.lastIndexOf("(") + 1, 
            str.lastIndexOf(")")
        );
      })



     this.setState({college_emails:colleges.concat(colleges_2)});
    }

  


   write(obj){
    var that = this;
    
    if(that.state.college_emails.indexOf(that.state.collegeEmail) === -1){
      alert("Sorry, we didn't recognize your college. We add new colleges everyday so check back later.")
      return
    }
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
        color = "#dc143c"
          />
          <TextInput
      style={{ height: 50,width: 300, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        
        that.setState({collegeValue:text
        })
      }}
      value={this.state.collegeValue}
      placeholder = {"Enter College/University"}
      color = "#dc143c"
      />
       <TextInput
      style={{ height: 50,width: 300, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        
        
        that.setState({collegeEmail:text
        })
      }}
      value={this.state.collegeEmail}
      placeholder = {"Enter College Email Suffix (like @asu.edu)"}
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
      <Text>  </Text>
      <Button 
      onPress={() => {that.props.parent.setState({destination:"FifthPage"})}}
       color = "white"
       title="Privacy" />
    </View>
    </View>
    );
  }
}

export default App;
