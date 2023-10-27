import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
    input: {
        marginTop: 16,
    },

})

const Input: React.FC<{ label: string; value: any; setValue: (any); isPassword: boolean }> = ({ label, value, setValue, isPassword }) => {
    return (
        <TextInput
            mode="outlined"
            label={label}
            value={value}
            onChangeText={text => setValue(text)}
            style={styles.input}
            inputMode="text"
            secureTextEntry={isPassword}
            autoCapitalize="none" />
    );
}

export default Input;