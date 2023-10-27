import { StyleSheet, Dimensions } from "react-native";

const productStyleSheet = StyleSheet.create({
    categoryContainer: {
        padding: 10,
        marginHorizontal: 5,
    },
    container: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 5
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
    itemContainer: {
        width: Dimensions.get('window').width / 2 - 15,
        marginBottom: 20,
        alignItems: 'center',
        margin: 5,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    itemImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    flatList: {
        borderColor: "#000",
        borderWidth: 1
    },
    column: {
        alignItems: 'flex-start',
    },
    selectBtnBg: {
        backgroundColor: 'red', borderWidth: 1, borderRadius: 5, marginHorizontal: 5,
        paddingHorizontal: 10,
        paddingVertical: 3
    },
    selectBtnText: { fontWeight: 'bold', paddingHorizontal: 10, textAlign: 'center' },
    chipCategoryContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default productStyleSheet;