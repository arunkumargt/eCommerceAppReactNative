import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    chip: {
        backgroundColor: '#e0e0e0',
        padding: 8,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
        marginTop: 10,
        height: 40,
        width: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        color: 'red',
        alignSelf: 'center'
    },
});

const Chip = ({ label }: any) => {
    return (
        <View style={styles.chip}>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

export default Chip;