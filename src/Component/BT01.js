import { Text, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class BT01 extends Component {
  render() {
    return (
      <View 
      style = {
        [
        Styles.bigbox
    ]
    }
      >
        <Text>Bai Tap 01</Text>
        <View
            style = {
                [
                    Styles.box,
                    Styles.Purple,
                ] 
            }
        >
            <Text
              style = {
                [Styles.TexStyle]
            } 
            >
                Purple: #C9C9FF
            </Text>
        </View>
        <View
            style = {
                [
                    Styles.box,
                    Styles.Blue,
                ] 
            }
        >
            <Text 
               style = {
                   [Styles.TexStyle]
               }
            >
                Blue: #3D85C6
            </Text>
        </View>
        <View
            style = {
                [
                    Styles.box,
                    Styles.Green,
                ] 
            }
        >
            <Text
              style = {
                [Styles.TexStyle]
            } 
            >
                Green: #96CC96
            </Text>
        </View>
        <View
            style = {
                [
                    Styles.box,
                    Styles.Yellow,
                ] 
            }
        >
            <Text
               style = {
                [Styles.TexStyle]
            }
            >
                Yellow: #F4B940
            </Text>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
    TexStyle:{
       fontSize: 26,
       fontWeight: '800',
       color:'black',
    },

    bigbox:{
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 10,
        padding: 15,
        paddingHorizontal:15,
    },
    box:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#ffb',
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    Purple:{
        backgroundColor:'#C9C9FF'
    },
    Blue:{
        backgroundColor:'#3D85C6'
    },
    Green:{
        backgroundColor:'#96CC96'
    },
    Yellow:{
        backgroundColor:'#F4B940'
    },

})
