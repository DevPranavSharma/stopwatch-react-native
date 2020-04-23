import  React,{Component} from 'react';
import { Platform, StyleSheet, Text, View,Button } from 'react-native';
//import { Component } from 'react';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default class App extends Component {
  constructor(props){
   super(props)
   this.updateTime=this.updateTime.bind(this)
   this.state={
     count: 0
   }
  }
  updateTime(){
    setInterval(()=>{this.setState((state)=>{return {count: this.state.count+1}})},1000)
  }
 render(){ return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Stopwatch</Text>
 <Text style={styles.welcome}>{this.state.count}</Text>
 <Button onPress={this.updateTime} title="Start"/>
    </View>
  );}
}

const styles = StyleSheet.create({
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
