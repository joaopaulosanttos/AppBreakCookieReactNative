import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";

class App extends Component {
    render() {
        return(
            <SafeAreaView styles={styles.container}>
                
            </SafeAreaView>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
