import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const cardStyle = StyleSheet.create({
    card: {
        width: 300,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginBottom: 5,
        flexDirection: 'row'
    },
    cardContent: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    cardDesc: {
        fontSize: 14,
        color: '#555555',
    }
});

const Card = ({ icon, title, desc }: any) => {
    return (
        <View style={cardStyle.card}>
            <View style={cardStyle.cardContent}>
                <Icon name={icon} size={15} color={'grey'} />
                <Text style={cardStyle.cardTitle}>{title}</Text>
                {/* <Text style={cardStyle.cardDesc}>{'arun'}</Text> */}
            </View>
        </View>
    )
}

export default Card;