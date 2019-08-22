import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, Button } from 'react-native';
import ListSuperHeroe from './ListSuperHeroe';
class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ListSuperHeroe></ListSuperHeroe>
            </View>
        );
    }
}


const styles = StyleSheet.create(
    {
        container: {
            marginTop: 50,
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        }, container2: {
            flex: 0.2
        }
        , list: {
            flex: 0.8
        }
    });
export default Main;