import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './bottomTabNavigation';
import Login from '../screens/login';
import Cart from '../screens/cart';
import MyProfile from '../screens/myprofile';
import About from '../screens/about';
import ChangePassword from '../screens/changepassword';
import ContactUs from '../screens/contactus';
import OrderHistory from '../screens/orderhistory';
import Notifications from '../screens/notifications';

const Stack = createStackNavigator();

const StackNavigation: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='login'>
                <Stack.Screen name="login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="bottomTab" component={BottomTabNavigation} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="cart" component={Cart} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="myprofile" component={MyProfile} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="about" component={About} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="changepassword" component={ChangePassword} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="contactus" component={ContactUs} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="orderhistory" component={OrderHistory} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="notifications" component={Notifications} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation