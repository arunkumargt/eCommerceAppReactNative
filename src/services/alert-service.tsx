import { Alert } from 'react-native';

export const warningAlert = (msg: string) => {
    Alert.alert('Warning', msg, [
        {
            text: 'OK',
            onPress: () => console.log('OK Clicked !'),
        },
    ]);
};