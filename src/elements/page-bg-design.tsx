import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    circleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleSmall1: {
        position: 'absolute',
        bottom: -Dimensions.get("screen").height + 350,
        width: Dimensions.get("screen").height / 1.5,
        height: Dimensions.get("screen").height / 1.5,
        borderRadius: Dimensions.get("screen").height / 3,
        backgroundColor: '#553c51',
    },
    circleBig1: {
        position: 'absolute',
        top: -100,
        left: -100,
        width: 350,
        height: 300,
        borderRadius: 180,
        zIndex: 1,
        backgroundColor: '#553c51',
    },
    circleBig2: {
        position: 'absolute',
        top: -80,
        right: -50,
        width: 350,
        height: 350,
        borderRadius: 175,
        backgroundColor: '#fa5951',
    },
})

const PageBackgroundDesign: React.FC = () => {
    return (
        <View style={styles.circleContainer}>
            <View style={styles.circleBig1} />
            <View style={styles.circleSmall1} />
            <View style={styles.circleBig2} />
        </View>
    );
};

export default PageBackgroundDesign;