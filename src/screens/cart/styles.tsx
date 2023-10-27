import { StyleSheet } from 'react-native';

const cartStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        margin: 20
    },
    listContent: {
        paddingBottom: 16,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    itemName: {
        // flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemQuantity: {
        fontSize: 14,
        color: 'gray',
    },
    itemPrice: {
        fontSize: 14,
        color: 'green',
        // marginRight: 16,
    },
    itemAction: {
        fontSize: 14,
        color: 'gray',
    },
    deleteButton: {
        padding: 8,
        backgroundColor: 'red',
        borderRadius: 4,
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 12,
    },
    bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        marginRight: 8,
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        width: 250,
        backgroundColor: '#fa5951',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default cartStyleSheet;