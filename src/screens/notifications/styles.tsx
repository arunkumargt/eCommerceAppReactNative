import { StyleSheet } from 'react-native';

const NotifyStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    listContent: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        elevation: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    message: {
        fontSize: 14,
    },
});

export default NotifyStyleSheet;