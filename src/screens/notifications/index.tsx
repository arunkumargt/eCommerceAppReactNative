import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import NotifyStyleSheet from './styles';

interface Notification {
    id: string;
    title: string;
    message: string;
}

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState<Notification[]>([
        { id: '1', title: 'Notification 1', message: 'Lorem ipsum dolor sit amet.' },
        { id: '2', title: 'Notification 2', message: 'Consectetur adipiscing elit.' },
        { id: '3', title: 'Notification 3', message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ]);

    const styles = NotifyStyleSheet;

    const renderNotification = ({ item }: { item: Notification }) => (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.message}>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                keyExtractor={(item) => item.id}
                renderItem={renderNotification}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

export default Notifications;