import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Button from './button';

const ModalViewStyles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
    },
    popOverContent: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        width: '85%',
    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const ModalView: React.FC<{ isVisible: boolean, setIsVisible: (any) }> = ({ isVisible, setIsVisible }) => {
    const styles = ModalViewStyles;
    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.popOverContent}>
                    <Text>This is the Pop-Over content</Text>
                    <View style={styles.btnRow}>
                        <Button onPress={() => { setIsVisible(false) }} text='Close' width={100} />
                        <Button onPress={() => { setIsVisible(false) }} text='Add to Cart' width={150} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalView;