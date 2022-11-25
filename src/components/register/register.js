import React from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { img } from '../../../assets/img';
import useRegister from '../../hooks/useRegister';
import { color } from '../../styles/baseTheme';
import styles from './styles';

const Register = () => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    const {
        hidePassword,
        handleHideShowPassword,
        setUsername,
        setPassword,
        handleRegister,
        disable,
        loading
    } = useRegister()

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={keyboardVerticalOffset}>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentAuth}>
                    <View>
                        <Text style={styles.txt}>Daftar Sekarang!</Text>
                    </View>
                    <View>
                        <View style={styles.contentInput}>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="User name"
                                autoCapitalize="none"
                                onChangeText={(val) => setUsername(val)}
                            />
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="User name"
                                autoCapitalize="none"
                                returnKeyType={'next'}
                                secureTextEntry={hidePassword}
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
                                disabled={disable}
                                activeOpacity={.6}
                                onPress={() => handleRegister()}
                                style={[styles.button,{
                                    backgroundColor:disable? color.disabled:color.red
                                }]}
                            >
                                {loading ?
                                    <ActivityIndicator size="small" color={color.white} /> : <Text style={styles.txtButton}>DAFTAR</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Register