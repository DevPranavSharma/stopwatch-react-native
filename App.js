import  React,{Component} from 'react';
import { Platform, StyleSheet, Text, View,Button } from 'react-native';
//import { Component } from 'react';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

var functionInt
export default class App extends Component {
  constructor(props){
   super(props)
   this.updateTime=this.updateTime.bind(this);
   this.onButtonPress=this.onButtonPress.bind(this)
   this.onPressStop=this.onPressStop.bind(this)
   this.state={
     count: 0,
     pressed: false
   }

  }
  onButtonPress(){
    if(!this.state.pressed){
      this.setState({pressed:true});
      this.updateTime()
    }
  }
  updateTime(){
   functionInt= setInterval(()=>{this.setState((state)=>{return {count: this.state.count+1}})},1000)
  }
  onPressStop(){
    this.setState({pressed:false});
    clearInterval(functionInt)
  }
 render(){ return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Stopwatch</Text>
 <Text style={styles.welcome}>{this.state.count}</Text>
 <View style={styles.buttonrow}> 
   <Button style={styles.btn}onPress={this.onButtonPress} title="Start"/>
 <Button style={styles.btn} onPress={this.onPressStop} title="Stop"/>
 </View>

    </View>
  );}
}

const styles = StyleSheet.create({
  buttonrow:{
     flexDirection:'row',
     margin: 5
  },
  btn:{
    paddingRight:5,
    margin:5
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
