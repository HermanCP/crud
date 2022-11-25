import React from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { img } from '../../../assets/img';
import useAuth from '../../hooks/useAuth';
import { color } from '../../styles/baseTheme';
import styles from './styles';
import navigation from '../../navigation'

const Auth = ({ componentId, ...props }) => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    const {
        hidePassword,
        handleHideShowPassword,
        disable,
        handleLogin,
        setUsername,
        setPassword,
        loading
    } = useAuth(componentId)

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={keyboardVerticalOffset}>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentAuth}>
                    <View>
                        <Text style={styles.txt}>Selamat Datang!</Text>
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
                                onPress={() => handleLogin()}
                                style={[styles.button, {
                                    backgroundColor: disable ? color.disabled : color.red
                                }]}
                            >
                                {loading ?
                                    <ActivityIndicator size="small" color={color.white} /> : <Text style={styles.txtButton}>MASUK</Text>
                                }
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentRegister}>
                            <View style={styles.row}>
                                <Text style={styles.txt}>Belum punya akun? </Text>
                                <TouchableOpacity
                                    activeOpacity={.6}
                                    onPress={() => Navigation.push(componentId, navigation.views.register())}
                                >
                                    <Text style={styles.txt}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Auth