import React, { Component } from "react";
import { Button, Image, Text, Dimensions, View, TextInput, SectionList, StyleSheet, LinearGradient, ScrollView} from "react-native";
import {Panels, DropdownContent} from "./VACComponentLibrary/Components.js"; 
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {college_list} from "./colleges.js"
function do_alert (){
  return alert("Hello! I am an alert box!!");
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const dbAPI = {
  sheetsId:"1EfgPJ22PgS7uUBIjPsTadb3bx_UVbJFYuwU-d9smLis",
  writeAddress:"c25efd30d05b",
  read:function(address,name,app){
    fetch(address)
    .then((response) => response.json())
    .then(function(data){
      var cols = []
      var output = [];
      var curr_row = 1, cell = {};
      data.feed.entry.forEach(function(obj){
        //console.log(typeof obj.gs$cell.row)
        if(obj.gs$cell.row === "1"){
          cols.push(obj.content.$t);
        } else {
          if(obj.gs$cell.row !== curr_row.toString()){
            output.push(cell);
            curr_row++;
            cell = {};
          }
          cell[cols[parseInt(obj.gs$cell.col) - 1]] = obj.content.$t;
        }    
      })

      output.shift();
      output.push(cell);

      app.setState({data:output, filteredData: output.slice()})
    });
  },
  write:function (obj){
    fetch('https://hidden-lowlands-88243.herokuapp.com/db', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body:{obj:obj, address:that.state.writeAddress}
    }).then((response) => response.json())
    .then(function(data){
      console.log(data);
    });
  },
  update:function(){
    fetch(address)
    .then((response) => response.json())
    .then(function(data){
      console.log(data);
      app.setState({data})
    });
  }
}

class App extends Component {

  constructor(props){ 
      super(props); 
      this.state = {
        selectedRules:"",
        inputValue:"",
        schools:["Lehigh","Villanova","Brown"],
        dbAPI:dbAPI,
        data:[],
        filteredData:[]
     } 
    } 

 componentDidMount(){ 
       var that = this; 
       if(that.state.data.length === 0){
        that.state.dbAPI.read("https://spreadsheets.google.com/feeds/cells/1EfgPJ22PgS7uUBIjPsTadb3bx_UVbJFYuwU-d9smLis/1/public/full?alt=json","name",that);
       }
} 

  

  render() {
    var that = this;
    return (
      <View style = {{height: "100%", marginTop: "10%"}}>
      <View style={{ alignItems: "center",
      backgroundColor: "transparent",
      height:"90%" }}>
         {/* <LinearGradient
          colors={['#dc143c', '#9198e5']}> */}
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginTop:"15%",
            fontSize: "32px",
            color:"#dc143c",
            marginBottom:"15%"
          }}
        >
          Pong Rules
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: "24px",
            color:"#dc143c"
          }}
        >
          Search for College/University
        </Text>
        <TextInput
      style={{ height: 40, width:width*0.5, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={function(text){
        that.setState({inputValue:text,filteredData:that.state.data.filter(function(obj){return obj.College.indexOf(text) !== -1})})
      }}
      value={this.state.inputValue}
      placeholder = {"Type here..."}
      />
      <View style={{
            backgroundColor: "transparent",
             width: "20%",
             position: "absolute",
             top: 0, right:0
      }}>
          <Button
          title= "Add School"
         
          onPress={() => {that.props.parent.setState({destination:"SecondPage"})}}
          color = "#dc143c"
          />
          </View>
      <View style={{
            alignItems: "center",
            justifyContent: "center"
          }}/>
        <ScrollView
   style={{}}>
   {
    that.state.filteredData.map(function(datum){
      return (
        <Text style={{borderColor: "blue", marginTop:height*0.04, fontSize:'18em', color: "#dc143c"}}
    onPress={() => {that.props.parent.setState({selectedRules:datum.Rules, destination:"ThirdPage"})}}>
      {datum.College}
    </Text>
        )
    })
   }
</ScrollView>
          {/* </LinearGradient> */}
      </View>

      <View style = {{flexDirection:"row" ,justifyContent:"space-around", height: "12%", backgroundColor: "#dc143c"}}>
      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}
      color="white"
      title="House Rules" />
      <Button style = {{color:'black'}} onPress={() => {that.props.parent.setState({destination:"FifthPage"})}}
      color="white"
      title="Privacy" />
    </View>
    </View>
    );
  }
}

export default App;
