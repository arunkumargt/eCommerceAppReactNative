import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#fa5951',
    },
    btnText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },

})

const Button: React.FC<{ onPress: () => void; text: string, width?: number }> = ({ onPress, text, width }) => {
    return (
        <TouchableOpacity style={[styles.btn, {width}]} onPress={onPress}>
            <Text style={styles.btnText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;