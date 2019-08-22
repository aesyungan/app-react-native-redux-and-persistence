import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Platform, Button } from 'react-native';
import { connect } from 'react-redux';
import * as api from '../redux/actions';
import { compose } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
const isNullObj = (data) => {
    let resp = false;
    if (data == null || data === 'null') {
        resp = true;
    }
    return resp;
}
class DetailComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
        console.log(this.props);
      /*  this.props.firebase.auth.signInWithEmailAndPassword("yungan@hotmail.es", "Cuka2205").then(data => {
 
             console.log(data);
         });*/
         this.login();
         this.getDates();
    }

    getDates = async () => {
        let data=null;
        //  this.props.firebase.database
        const dbDate = this.props.firebase.ref("t_date/");
        let test = await dbDate.once('value');
        if (isNullObj(test) == false) {
            console.log("no null");
            data = JSON.parse(JSON.stringify(test));
        }
        console.warn(data);
    }

    login = () => {
        this.props.firebase.login({
            email: 'yungan@hotmail.es',
            password: 'Cuka2205'
        }).then(data => {
            console.log("login..");
            console.log(data);
            console.log(".........................................................");
            console.log(this.props);
        });
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
                    onPress={this.getDates}
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
    return { tabId: state.tabId, firebase: state.firebase, location: state.location }
}

export default compose(
    connect(mapStateToProps, api),
    firebaseConnect()
)(DetailComponent)
//fin firebase
//export default connect(mapStateToProps, api)(DetailComponent)
