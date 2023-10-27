import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import productStyleSheet from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CategoryView from './category';
import FAB from '../../elements/fab';
import ModalView from '../../elements/modal-view';
import { useNavigation } from '@react-navigation/native';

const productDetails = [
    {
        category: 'category1',
        products: [
            { id: 1, name: 'Product 1', price: '80' },
            { id: 2, name: 'Product 2', price: '80' },
            { id: 3, name: 'Product 3', price: '80' },
        ],
    },
    {
        category: 'category2',
        products: [
            { id: 1, name: 'Product 1', price: '80' },
            { id: 2, name: 'Product 2', price: '80' },
            { id: 3, name: 'Product 3', price: '80' },
            { id: 4, name: 'Product 4', price: '80' },
            { id: 5, name: 'Product 5', price: '80' },
            { id: 6, name: 'Product 6', price: '80' },
        ],
    },
    {
        category: 'category3',
        products: [
            { id: 1, name: 'Product 1', price: '80' },
            { id: 2, name: 'Product 2', price: '80' },
            { id: 3, name: 'Product 3', price: '80' },
        ],
    },
];

const Products: React.FC = () => {
    const [badgeCount, setBadgeCount] = useState(0);
    const [modalViewIsOpen, setModalViewIsOpen] = useState(false);

    const styles = productStyleSheet;
    
    const navigation = useNavigation();

    const SelectButton = ({ onPress }: any) => {
        const styles = productStyleSheet;
        return (
            <TouchableOpacity style={styles.selectBtnBg} onPress={onPress}>
                <Icon name='cart' size={16} color={'white'} />
            </TouchableOpacity>
        )
    }

    const displayProductsForCategory = (category: any, products: any) => {
        const styles = productStyleSheet;
        return (
            <View style={styles.categoryContainer}>
                <Text style={styles.itemName}>{category}</Text>
                {splitProductsIntoTwoColumns(category, products)}
            </View>
        )
    }

    const handleOnPress = (id: any, category: any) => {
        console.log(`Selected Item: ${category} - id: ${id}`)
        setModalViewIsOpen(true)
    }

    const splitProductsIntoTwoColumns = (category: any, products: any) => {
        const numColumns = 2;
        const midIndex = Math.ceil(products.length / numColumns);
        const column1 = products.slice(0, midIndex);
        const column2 = products.slice(midIndex);

        const styles = productStyleSheet;

        return (
            <View style={styles.container}>
                {modalViewIsOpen ? <ModalView isVisible={modalViewIsOpen} setIsVisible={setModalViewIsOpen} /> : null}
                <View style={styles.column}>
                    {column1.map((item: any, index: any) => (
                        <View key={index} style={styles.itemContainer}>
                            <Text>{item.name}</Text>
                            <SelectButton onPress={() => handleOnPress(item.id, category)} />
                        </View>
                    ))}
                </View>

                <View style={styles.column}>
                    {column2.map((item: any, index: any) => (
                        <View key={index} style={styles.itemContainer}>
                            <Text>{item.name}</Text>
                            <SelectButton onPress={() => handleOnPress(item.id, category)} />
                        </View>
                    ))}
                </View>
            </View>
        )
    }

    return (
        <>
            <ScrollView>
                <CategoryView></CategoryView>
                <View>
                    {productDetails.map((productDetail) => {
                        return displayProductsForCategory(productDetail.category, productDetail.products);
                    })}
                </View>
            </ScrollView>
            <FAB onPress={() => { navigation.navigate('cart') }} icon='cart' badgeCount={badgeCount} />
        </>
    )
};

export default Products



