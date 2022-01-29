import React, {Component} from 'react';
import {View, Text} from 'react-native';

class StateFull extends Component{
render(){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:24, fontWeight:'700'}}>
                Hello React Native Application StateFull component

            </Text>
        </View>
    )
}
}

export default StateFull;
