import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import styles from './styles';
import navigation from '../../navigation'
import useUser from '../../hooks/useUser';
import List from '../common/list';

const ListUser = ({ componentId }) => {
    const {
        loading,
        datasource,
        handleEdit,
        handleDelete
    } = useUser(componentId)
    
    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size='small' />
            ) : (
                <FlatList
                    data={datasource}
                    renderItem={({ item }) => (
                        <List loading data={item} handleEdit={(item)=> handleEdit(item)} handleDelete={(item)=> handleDelete(item)}/>
                    )}
                />
            )}

            <View style={styles.contentButton}>
                <TouchableOpacity
                    activeOpacity={.6}
                    onPress={() => Navigation.push(componentId, navigation.views.addUser('Tambah User',undefined))}
                    style={styles.button}
                >
                    <Text style={styles.txtButton}>Tambah User</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

export default ListUser