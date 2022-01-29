import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';

export default class DemoStyle extends Component{
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    paddingTop: 10,
                    paddingBottom: 50,
                }}>
                <Text>
                    Demo Style Component
                </Text>
                <View 
                    style={{
                        flex:1,
                        // flexDirection:'row',
                        // justifyContent:'center', 
                        // alignItems:'center',
                    }}>
                    <View
                        style={
                            [styles.box, styles.boxPurple]
                        }>
                    </View>
                    <View
                        style={{
                           flexDirection:'row',
                        }}>
                            <View
                                style={
                                    styles.box
                                }
                            />
                            <View
                                style={
                                    styles.box
                                }
                            />
                    </View>  
                    <View
                        style={
                            styles.box
                        }>
                    </View>
                    
                  
                 
                
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#bfb',
        height: 100,
        width:100,
        marginHorizontal:10,
        marginVertical:20,
        borderWidth:3,
        borderStyle:'dashed',
        borderColor:'grey',   
    },
    boxPurple: {backgroundColor:'#bbf'}
})