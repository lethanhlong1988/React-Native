import React from "react";
import {View, Text, Image} from 'react-native';
import { Component } from "react/cjs/react.production.min";
import Corgi from './Corgi.jpg';

export default class DemoImage extends Component {
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text> Demo Image Component</Text>
                <Image 
                    style={{with:300, height:700}}
                    source={require('./Corgi.jpg')}/>
                <Image source={Corgi}/>
            </View>
        )
    }
}