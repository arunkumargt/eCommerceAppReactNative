import { StyleSheet } from "react-native";

const changePasswordStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F9FB',
    },
    loginForm: {
        width: '90%',
        padding: 16,
    },
    input: {
        marginTop: 16,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 15,
    },
});

export default changePasswordStyleSheet;