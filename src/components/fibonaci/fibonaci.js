import React from 'react';
import { ActivityIndicator, Image, KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { img } from '../../../assets/img';
import useFibonaci from '../../hooks/useFibonaci';
import { color } from '../../styles/baseTheme';
import styles from './styles';
import { Table, Row, Rows } from 'react-native-table-component';

const Fibonaci = () => {
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
    const {
        loading,
        setRows,
        setColums,
        handleSave,
        tableData
    } = useFibonaci()

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={keyboardVerticalOffset}>
            <SafeAreaView style={styles.container}>
                <View style={styles.contentAuth}>
                    <View>
                        <View style={styles.contentInput}>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Rows"
                                autoCapitalize="none"
                                onChangeText={(val) => setRows(val)}
                            />
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="Colums"
                                autoCapitalize="none"
                                returnKeyType={'next'}
                                onChangeText={(val) => setColums(val)}
                            />

                        </View>
                        <View style={styles.contentButton}>
                            <TouchableOpacity
                                activeOpacity={.6}
                                onPress={() => handleSave()}
                                style={styles.button}
                            >
                                {loading ?
                                    <ActivityIndicator size="small" color={color.white} /> : <Text style={styles.txtButton}>SIMPAN</Text>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {tableData}
                {/* <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Rows data={tableData} textStyle={styles.text} />
                </Table> */}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

export default Fibonaci