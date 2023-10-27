import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import loginStyleSheet from './styles';
import PageBackgroundDesign from '../../elements/page-bg-design';
import Button from '../../elements/button';
import Input from '../../elements/input';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const styles = loginStyleSheet;

    function signin() {
        // if(username == '' || username == undefined || username == null) {
        //     warningAlert("Username is Required !")
        // } else if(password == '' || password == undefined || password == null) {
        //     warningAlert("Password is Required !")
        // } else {
        navigation.navigate("bottomTab");
        // }
    }

    return (
        <View style={styles.container}>
            <PageBackgroundDesign />
            <View style={styles.loginForm}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />

                <Input label="Username" value={username} setValue={setUsername} isPassword={false} />

                <Input label="Password" value={password} setValue={setPassword} isPassword={true} />

                <Button onPress={signin} text='Sign In' width={250}></Button>
            </View>
        </View>
    );
};


export default Login;