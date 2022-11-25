import React from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { img } from '../../../assets/img';
import useUser from '../../hooks/useUser';
import { color } from '../../styles/baseTheme';
import styles from './styles';

const AddUser = props => {
    const {
        username,
        password,
        loading,
        hidePassword,
        handleHideShowPassword,
        mode,
        handleUser,
        setUserName,
        setPassword
    }= useUser('',props.data)
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={keyboardVerticalOffset}>
        <SafeAreaView style={styles.container}>
            <View style={styles.contentAuth}>
                <View>
                    <View style={styles.contentInput}>
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="User name"
                            autoCapitalize="none"
                            value={username}
                            onChangeText={(val) => setUserName(val)}
                        />
                        <TextInput style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            autoCapitalize="none"
                            returnKeyType={'next'}
                            secureTextEntry={hidePassword}
                            value={password}
                            maxLength={8}
                            onChangeText={(val) => setPassword(val)}
                        />
                        <View style={styles.contentShowHide}>
                            {hidePassword ?
                                <TouchableOpacity onPress={() => handleHideShowPassword()}>
                                    <Image source={img.icon.hidePass} style={styles.icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => handleHideShowPassword()}>
                                    <Image source={img.icon.showPass} style={styles.icon} />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={styles.contentButton}>
                        <TouchableOpacity
                            activeOpacity={.6}
                            onPress={() => handleUser()}
                            style={styles.button}
                        >
                            {loading ?
                                <ActivityIndicator size="small" color={color.white} /> : <Text style={styles.txtButton}>{mode =='add'?'TAMBAH USER':'UPDATE USER'}</Text>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    </KeyboardAvoidingView>

    );
}

export default AddUser