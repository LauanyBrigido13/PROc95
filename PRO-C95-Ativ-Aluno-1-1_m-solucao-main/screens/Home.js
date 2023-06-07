import React, { Component } from "react";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B8E23"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center",
    textAlign:"center", 
    marginLeft: 20
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans", 
    alignSelf: "center", 
    fontSize: 32
  },
  storyImage:{
    width:"90%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: 20,  
  },
  textContainer:{
    paddingTop:RFValue(40),
    color: "white",
    marginLeft: 8,
    marginRight: 8,
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans",
    alignSelf: 'center'
  }
});