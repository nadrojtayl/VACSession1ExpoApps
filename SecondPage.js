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
      <View style={{ alignItems: "center", backgroundColor:"powderblue", height:"100%", justifyContent:"space-around"}}>
        <Text style={{ backgroundColor:"powderblue", fontSize:"40px", color:"black", fontFamily: "Arial"}}>Workouts</Text>

        <DropdownContent options = {["Bike Workout", "Core", "Agility" , "Speed" , "Strength" , "Recovery" , "Nutrition"]}
        panel0 = {(
          <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
          <Button style={{color:"black"}} onPress={()=> Linking.openURL('http://www.google.com')} title="Bike Workout"></Button>
          <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>
    </View>
        )}

        panel1={(
    <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
    <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=RwGlHGHsmsQ&t=15s')} title="Core #1 (Press for Demo)"></Button>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>

    A1: Plank x 30 secs
     </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>


    A2: Single leg hip thrusts x 8/leg
     </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>


    A3: Crunches x 10
     </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>

    A4: Reverse crunches x 10
     </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>


    Complete all 4 exercises back to back with no rest,
    and then rest 2 mins after A4 before starting your next round. Complete for 3-4 total rounds.

   </Text>

   <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=4aqaqq9jEg0')} title="Core #2 (Press for Demo)"></Button>
   <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>

   1) Bicycle Abs (15 Reps On Each Side)
    </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>

   2) Leg Raises (15 Reps)
    </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>

   3) V-Up (15 Reps)
    </Text>
    <Text style={{ backgroundColor:"White", fontSize:"15px", color:"black", fontFamily: "Arial"}}>

   Take a 60 second break and repeat 3x.

  </Text>
    <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>

        </View>
        )}
        
        panel2={(
    <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
    <Button style={{color:"black"}} onPress={()=> Linking.openURL('http://www.google.com')} title="Ladder Work (Press for Demo)"></Button>
    <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  1 - Lateral Scissor Hops
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  2 - Slalom Jumps
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  3 - Lateral High Knees
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  4 - Hop Scotch
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  5 - Icky Shuffle
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  6 - Single-Leg Run Through
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  7 - Single-Leg Lateral In-and-Out
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  8 - Cross Behind
   </Text>
  <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  9 - Backward In-And-Out

   </Text>

    <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>


        </View>
       )}

       panel3={(
      <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around",flexDirection:"column"}}>
      <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>
      A – 5 x 20yd sprint with 75secs rest

      B – 5 x 1 Double broad jump into 10yd sprint with 75 secs rest

      C – 5 x 12 Kettlebell swing with emphasis on hip explosion/extension with 75 secs rest

      D – 5 x 30yd sprint with 90secs rest

     </Text>

      <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=clYBdYdoHxY')} title="Speed"></Button>
      <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

      A1: BB Bulgarian Split Squat: 5 x 3/leg (15 secs rest)
      A2: Depth Box /jumps: 5 x 3 (2 mins rest)

      B1: BB Conventional Deadlift: 5 x 3 (15 secs rest)
      B2: Broad Jump: 5 x 3 (2 mins rest)

      C1: Front Foot Elevated DB Reverse Lunge: 3 x 8/leg (30 secs rest)
      C2: One-Leg One-Arm DB Romanian Deadlifts: 3 x 8/leg (30 secs rest)
      C3: Standing Calf Raise: 3 x 15 (90 secs rest)

   </Text>
      <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=NptSA1wjlq8')} title="Explosiveness"></Button>

      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>


      </View>
      )}

      panel4={(
      <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
      <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=dC_MMJ_pyKw')} title="Upper Body"></Button>

      <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  A: Incline close grip bench press – 4 x 3 with 2mins rest
  B1: BB rows – 4 x 10 with 20secs rest
  B2: Rope face pulls – 4 x 20 with 60secs rest
  C1: Incline neutral grip DB bench press – 4 x 10 with 20secs rest
  C2: Close grip pronated pull ups – 4 x MAX with 60secs rest
  D1: DB Cobras – 2 x 15/side with 20secs rest
  D2: Weighted plank – 2 x 20secs with 60secs rest

   </Text>

   <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=Min-Atq1gHk&t=117s')} title="Lower Body"></Button>

   <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

   A1: Trap bar deadlift – 4 x 5 with 0 secs rest
   A2: Vertical jump – 4 x 5 with 2 mins rest

   B1: Lateral step ups – 4 x 5/leg with 0 secs rest
   B2: Lateral hurdle hops – 4 x 3 hops/direction with 2 mins rest

   C1: BB Romanian deadlift – 2 x 8 with 10 secs rest
   C2: Hanging leg raise – 2 x 12 with 10 secs rest
   C3: Plank – 2 x 60 secs with 90 secs rest

</Text>
      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>

      </View>
      )}

      panel5={(
      <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
      <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=ExP5n2jHHU8')} title="Stretching to Improve Skatng"></Button>
      <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

1. Hang from pull up bar: 1 x 1-2 minutes
2. Arm circles: 1 x 10/direction
3. Rotational arm swing: 1 x 8/side
4. Hip circles: 1 x 10/direction
5. Zombie squat with reach through: 1 x 10
6. Scorpion kicks: 1 x 8/side

</Text>

      <Button style={{color:"black"}} onPress={()=> Linking.openURL('https://www.youtube.com/watch?v=5bBhDGsQOU4')} title="Mobility"></Button>

      <Text style={{ backgroundColor:"White", fontSize:"10px", color:"black", fontFamily: "Arial"}}>

  1) Groin Frog Stretch
  2) Grounded Glute Stretch
  3) Seated Piriformis Stretch
  4) Hip Flexor Stretch
  5) Calf Stretch

      </Text>

      <Button onPress={() => {that.props.parent.setState({destination:"FrontPage"})}}  title="Home Page"></Button>

    </View>
  )}

  panel6={(
  <View style= {{alignitems:"center" , height: "100%", justifyContent:"space-around"}}>
  <Button style={{color:"black"}} onPress={()=> Linking.openURL('http://www.google.com')} title="Nutrition"></Button>
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
