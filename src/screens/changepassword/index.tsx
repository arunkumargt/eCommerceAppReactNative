import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput } from 'react-native-paper';
import { warningAlert } from '../../services/alert-service';
import changePasswordStyleSheet from './styles';
import PageBackgroundDesign from '../../elements/page-bg-design';
import Button from '../../elements/button';
import Input from '../../elements/input';

const ChangePassword: React.FC = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useNavigation();

    const styles = changePasswordStyleSheet

    function changepassword() {
        // if(username == '' || username == undefined || username == null) {
        //     warningAlert("Username is Required !")
        // } else if(password == '' || password == undefined || password == null) {
        //     warningAlert("Password is Required !")
        // } else {
        navigation.navigate("profile");
        // }
    }

    return (
        <View style={styles.container}>
            <PageBackgroundDesign />
            <View style={styles.loginForm}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />

                <Input label='Old Password' setValue={setOldPassword} value={oldPassword} isPassword={true} />

                <Input label='New Password' setValue={setNewPassword} value={newPassword} isPassword={true} />

                <Input label='Confirm Password' setValue={setConfirmPassword} value={confirmPassword} isPassword={true} />

                <Button onPress={changepassword} text='Change Password' width={250}></Button>
            </View>
        </View>
    );
};

export default ChangePassword;
