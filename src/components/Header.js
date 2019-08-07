import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Cryptocurrency App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        marginTop: 55,
        alignItems: "center",
        backgroundColor:'#8C997D',
        justifyContent:'center',
        height: 60,
        paddingTop: 8,
        borderWidth:0,
        shadowColor:'#8C997D',
        shadowOffset:{ width:0, height:2 },
        shadowOpacity:0.5,
        elevation:2,
        position: 'relative'
    },
    header: {
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: "Courier" 
    }
})

const { headerContainer, header } = styles;

export default Header;