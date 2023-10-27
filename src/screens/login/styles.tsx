import { StyleSheet, Dimensions } from "react-native";

const loginStyleSheet = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 15,
    },
    loginBtnText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    loginBtn: {
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        width: 250,
        backgroundColor: '#fa5951',
    },
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
});

export default loginStyleSheet