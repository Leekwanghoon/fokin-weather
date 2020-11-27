import React from 'react';
import {View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { weatherOptions } from './WeatherInfo';



export default function Weather({temp, condition}) {

    condition = "Drizzle";

    if( weatherOptions[condition] === undefined ) {
        weatherOptions[condition] = weatherOptions["Clear"];
    }

    return(
        <LinearGradient
            // Button Linear Gradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
                <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons style={styles.Icon} name={weatherOptions[condition].iconName} size={66} color="white" />
                <Text style={styles.temp}>{temp}°C/ {weatherOptions[condition].name}</Text>
            </View>
            <View style={styles.halfContainer1}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                <Text style={styles.text}>{weatherOptions[condition].comment}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "#fff"
    },
    text: {
        color: "gray",
        fontSize: 26,
        paddingBottom: 20
    },
    Icon: {
        marginBottom:20
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "#fff",
        fontSize: 24
    },
    halfContainer: {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    halfContainer1: {
        flex:1,
        justifyContent:"center",
        alignItems: "start"
    }
})