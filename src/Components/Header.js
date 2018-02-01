/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class Header extends Component<{}> {

    openDrawer() {
        // console.warn("-----------------");
        this.props.navigation.navigate('DrawerToggle');
    }

    render() {
        return (
            <View style={styles.header}>
                <View style={styles.drawerImage}>
                    <TouchableOpacity onPress={this.openDrawer.bind(this)}>
                        <Image onPress={this.openDrawer.bind(this)} style={styles.imageStyle} source={require('../Assets/icon.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerHeading}>
                    <Text style={{ textAlign: 'center' }}>{this.props.headerHeading}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#919baa',
        height: Dimensions.get('window').height / 13
    },
    drawerImage: {
        padding:10,
        position: "absolute",
        zIndex: 100,
    },
    headerHeading: {
        flex: 1,
        padding: 10,
    },
    imageStyle: {
        height: Dimensions.get('window').height / 20,
        width: 10,
    }
});
