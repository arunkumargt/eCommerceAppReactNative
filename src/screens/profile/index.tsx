import React from "react";
import { View, Image, TouchableOpacity } from 'react-native';
import profileStyleSheet from "./styles";
import Card from "../../elements/card";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Profile: React.FC = () => {
    const data = [{
        id: 1, title: 'My Profile', icon: 'person'
    }, {
        id: 2, title: 'Order History', icon: 'ios-list'
    }, {
        id: 3, title: 'Notifications', icon: 'notifications'
    }, {
        id: 4, title: 'Change Password', icon: 'lock-closed'
    }, {
        id: 5, title: 'About', icon: 'information-circle'
    }, {
        id: 6, title: 'Contact Us', icon: 'ios-call'
    }, {
        id: 7, title: 'Logout', icon: 'exit'
    }];

    const styles = profileStyleSheet;

    const navigation = useNavigation();

    const movePage = (id: number) => {
        switch (id) {
            case 1:
                navigation.navigate('myprofile');
                break;
            case 2:
                navigation.navigate('orderhistory');
                break;
            case 3:
                navigation.navigate('notifications');
                break;
            case 4:
                navigation.navigate('changepassword');
                break;
            case 5:
                navigation.navigate('about');
                break;
            case 6:
                navigation.navigate('contactus');
                break;
            case 7:
                navigation.navigate('login');
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) =>
                <TouchableOpacity onPress={() => movePage(item.id)}>
                    <Card icon={item.icon} title={item.title} desc={''} />
                </TouchableOpacity>
            } />
        </View>
    )
}

export default Profile