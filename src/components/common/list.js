import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styles from './styles';

const List = ({ data, handleEdit, handleDelete, loading }) => {
    console.log('data', data)
    return (
        <View style={styles.rowList}>
            <View style={styles.infoUser}>
                <Text style={styles.textProps}>{data.userName}</Text>
                <Text style={styles.textProps}>{data.password}</Text>
                <Text style={styles.textProps}>{data.tanggal}</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.edit}
                    onPress={() => handleEdit(data)}
                >
                    <Text style={styles.txt}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(data.id)} style={styles.delete}>
                        <Text style={styles.txt}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default List