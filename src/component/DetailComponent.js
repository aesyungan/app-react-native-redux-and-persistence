import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, Button } from 'react-native';
import { connect } from 'react-redux';
import * as api from '../redux/actions';
class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        console.log(this.props);
    }

    saveData = () => {
        console.log("save data...");
        this.props.selected_tab(this.state.text);
        this.props.add_new_element(this.state.text);
        this.setState({ text: '' });
    }
    render() {

        return (
            <View style={styles.container}>

                <Text>{'Name save:' + this.props.tabId}</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Button
                    onPress={this.saveData}
                    title="Save Data"
                    color="#841584"
                    accessibilityLabel="save data.."
                />
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
//agrega los props
const mapStateToProps = state => {
    return { tabId: state.tabId }
}
//parametro a map props y actions 
export default connect(mapStateToProps, api)(DetailComponent)
