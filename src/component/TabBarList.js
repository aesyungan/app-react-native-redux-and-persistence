import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
class ListSuperHeroe extends React.Component {
    getSuperheroes(){
        const {superHeroes} = this.props;
        return superheroesData = superHeroes.map((heroes, key) => {
            return <Text key={key}>{heroes.superhero}</Text>
        })
    }
    render() {
       // console.log(this.props);
        return (
        <View style={styles.container}>
            {this.getSuperheroes()}
        </View>
        );
    }
}
