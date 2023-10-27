import React from 'react'
import { FlatList, Dimensions, View } from 'react-native'
import Chip from '../../elements/chip';
import productStyleSheet from './styles';

const data = [
    {
        id: '1', label: 'category 1',
    }, {
        id: '2', label: 'category 2',
    }, {
        id: '3', label: 'category 3',
    }, {
        id: '4', label: 'category 4',
    }, {
        id: '5', label: 'category 5',
    }, {
        id: '6', label: 'category 6',
    }, {
        id: '7', label: 'category 7',
    }, {
        id: '8', label: 'category 8',
    },
    {
        id: '1', label: 'category 1',
    }, {
        id: '2', label: 'category 2',
    }, {
        id: '3', label: 'category 3',
    }, {
        id: '4', label: 'category 4',
    }, {
        id: '5', label: 'category 5',
    }, {
        id: '6', label: 'category 6',
    }, {
        id: '7', label: 'category 7',
    }, {
        id: '8', label: 'category 8',
    },
];

const CategoryView: React.FC = () => {
    const windowWidth = Dimensions.get('window').width;
    const MAX_CHIPS_PER_ROW = 4;

    const styles = productStyleSheet;

    const renderChips = ({ item }: { item: { id: string; label: string }[] }) => {
        return (
            <View style={styles.row}>
                {item.map((chip) => (
                    <Chip key={chip.id} label={chip.label} />
                ))}
            </View>
        );
    };

    const renderData = () => {
        const chunks = Array.from(
            { length: Math.ceil(data.length / MAX_CHIPS_PER_ROW) },
            (_, index) => data.slice(index * MAX_CHIPS_PER_ROW, (index + 1) * MAX_CHIPS_PER_ROW)
        );
        return <FlatList data={chunks} keyExtractor={(_, index) => index.toString()} renderItem={renderChips} />;
    };

    return <View style={styles.chipCategoryContainer}>{renderData()}</View>

    // return (
    //     <FlatList
    //         data={data}
    //         keyExtractor={(item) => item.id.toString()}
    //         renderItem={({ item }) => <Chip key={item.id} label={item.label} />}
    //         horizontal
    //     />
    // );
};

export default CategoryView;