import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    badge: {
        position: 'absolute',
        top: 8,
        right: 8,
        minWidth: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

const FAB: React.FC<{ onPress: () => void; icon: string; badgeCount?: number }> = ({ onPress, icon, badgeCount }) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Icons name={icon} size={20} color={"white"} />
            {badgeCount ? (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
            ) : null}
        </TouchableOpacity>
    );
}

export default FAB;