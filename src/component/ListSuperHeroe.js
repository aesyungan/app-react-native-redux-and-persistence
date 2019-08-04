import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, ScrollView, Platform, Button } from 'react-native';
import { connect } from 'react-redux';
import DetailComponent from './DetailComponent';
import * as api from '../redux/actions';
class ListSuperHeroe extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    componentWillUnmount() {
        this.props.fetchData();
    }
    getSuperheroes() {
        const { superHeroes } = this.props;
        return superheroesData = superHeroes.map((heroes, key) => {
            return <Text key={key}>{heroes.superhero}</Text>
        })
    }
    getListApi() {
        const { dataTVMaze } = this.props;
        return dataTV = dataTVMaze.data.map((tv, key) => {
            return <Text key={key}>{tv.show.name}</Text>
        })
    }
    render() {
        // console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Text>{'Data list:' + this.props.tabId}</Text>
                    <DetailComponent></DetailComponent>
                </View>
                <ScrollView style={styles.list}>
                    <View style={[styles.data, { marginTop: 40 
                    }]}>
                        {this.getSuperheroes()}
                    </View>
                </ScrollView>
                <ScrollView style={styles.list}>
                    <View style={[styles.list, styles.tv]}>
                        {this.props.dataTVMaze.isFetching && <Text>Loadding</Text>}
                        {this.props.dataTVMaze.data.length ? this.getListApi() : <Text>Error al cargar </Text>}
                    </View>
                </ScrollView>
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
            flex: 0.4,
            // backgroundColor:'red'
        }
        , list: {
            flex: 0.3
        }
        , data: {
            backgroundColor:'yellow'
        },
        tv: {
            backgroundColor: '#ccc'
        }

    });
//agrega los props
const mapStateToProps = state => {
    return { superHeroes: state.superheroes, tabId: state.tabId, dataTVMaze: state.dataReducer }
}
//dispatch
const mapDispatchToProps = dispatch => {
    return {
        fetchData: dispatch(api.fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListSuperHeroe)
