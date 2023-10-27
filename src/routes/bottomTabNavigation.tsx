import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard from '../screens/dashboard';
import Products from '../screens/products';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
    return (
        <Tab.Navigator initialRouteName='products'>
            <Tab.Screen name="dashboard" component={Dashboard} options={{
                headerShown: false,
                headerTitle: "Dashboard",
                tabBarLabel: "Dashboard",
                tabBarIcon: ({}) => (<Ionicons name="pie-chart" size={20} color="#000" />)
            }}/>
            <Tab.Screen name="products" component={Products} options={{
                headerShown: false,
                headerTitle: "Products",
                tabBarLabel: "Products",
                tabBarIcon: ({}) => (<Ionicons name="receipt" size={20} color="#000" />)
            }}/>
            <Tab.Screen name="profile" component={Profile} options={{
                headerShown: false,
                headerTitle: "Profile",
                tabBarLabel: "Profile",
                tabBarIcon: ({}) => (<Ionicons name="person" size={20} color="#000" />)
            }}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;