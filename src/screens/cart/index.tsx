import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, ScrollView } from 'react-native'
import cartStyleSheet from './styles';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';

interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
    total: number;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: '1', name: 'Product 1', quantity: 2, price: 10, total: 20 },
        { id: '2', name: 'Product 2', quantity: 1, price: 15, total: 15 },
        { id: '3', name: 'Product 3', quantity: 3, price: 20, total: 60 },
    ]);

    const styles = cartStyleSheet;

    const navigation = useNavigation();

    const handleDeleteItem = (id: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const renderCartItem = ({ item }: { item: CartItem }) => (
        <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>Rs{item.price}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <Text style={styles.itemPrice}>Rs{item.total}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteItem(item.id)}>
                <Icons name='trash' size={20} color={"white"} />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.cartItem}>
                <Text style={styles.itemName}>Product Name</Text>
                <Text style={styles.itemPrice}>Price</Text>
                <Text style={styles.itemQuantity}>Quantity</Text>
                <Text style={styles.itemPrice}>Total</Text>
                <Text style={styles.itemAction}>Action</Text>
            </View>
            <ScrollView>
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCartItem}
                    contentContainerStyle={styles.listContent}
                />
            </ScrollView>
            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Cart;