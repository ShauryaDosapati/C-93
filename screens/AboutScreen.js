import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, Image, Linking} from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      weather:''
    }
  }
  

  render(){
      
      
      return(

      <SafeAreaView style = {styles.containers}>
        <View style = {styles.container}>
          <Text style = {styles.aboutTitleText}>
            About
          </Text>
          <Text style = {styles.name}>DAK12</Text>
          <Image source = {require("../assets/Dak12logo.jpg")} style = {styles.image}/>
          <TouchableOpacity onPress={() => {
            Linking.openURL("https://www.youtube.com/channel/UCcloXyWedThhc7fqpD97ZEQ")
          }} style = {styles.youtubebutton}>
          <Text style = {styles.youtubetext}>Check out my YouTube channel</Text>
          </TouchableOpacity>
          <Text style = {styles.aboutMe}>DAK12 is a 13 year old boy who really like to code. His favourite sport is football and boxing.</Text>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate("HomeScreen")
          }}
          style = {styles.backButton}><Text style = {styles.backText}>Back</Text></TouchableOpacity>

        </View>
      </SafeAreaView>
    );
    }
    
  }