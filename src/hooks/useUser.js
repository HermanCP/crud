
import { useCallback, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import realm, { deleteUser, getAllUser, registerUser, updateUser } from "../../database";
import { ToastContext } from '../components/message/toast/toastContext';
import navigation from '../navigation'

const useUser = (componentId, props) => {
    const { show } = useContext(ToastContext)
    const [hidePassword, setHidePassword] = useState(true)
    const handleHideShowPassword = useCallback(() => setHidePassword(!hidePassword));
    const [datasource, setDatasource] = useState([])
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [updateId, setUpdateid] = useState('')
    const [mode, setMode] = useState('add')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (props) {
                setUserName(props.userName)
                setPassword(props.password)
                setUpdateid(props.id)
                setMode('edit')
            }
        }, 0)
        return () => clearTimeout(delayDebounceFn)
    }, [props])


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            getListUser()
        }, 0)
        return () => clearTimeout(delayDebounceFn)
    }, [])

    const getListUser = async () => {
        setLoading(true)
        try {
            let res = await getAllUser()
            setTimeout(() => {
                setDatasource(res)
                setLoading(false)
            }, 1000);
        } catch (error) {
            setLoading(false)
            Alert.alert(error)
        }

    }

    const handleEdit = (data) => {
        // setUserName(data.userName)
        // setPassword(data.password)
        // setUpdateid(data.updateId)
        setMode('edit')
        Navigation.push(componentId, navigation.views.addUser('Update User', data))
    }
    const handleDelete = async(id) =>{
        setLoading(true)
        try {
            let res = await deleteUser(id)
            setTimeout(() => {
                setLoading(false)
                getListUser()
            }, 1000);
        } catch (error) {
            setLoading(false)
            Alert.alert(error)
        }
    }
    const handleUser = async() =>{
        setLoading(true)
        if(mode === 'edit'){
            try {
                let res = await updateUser(updateId, username, password)
                setTimeout(() => {
                    setLoading(false)
                    getListUser()
                }, 1000);
                setTimeout(() => {
                    Navigation.pop('Add.User.Component')
                }, 1500);
            } catch (error) {
                setLoading(false)
                Alert.alert(error)
            }
        }else{
            try {
                let res = await registerUser(username, password)
                console.log(res)
                setTimeout(() => {
                    Alert.alert('Berhasil Ditambah')
                    getListUser()
                    setLoading(false)
                }, 1000);
            } catch (error) {
                setLoading(false)
                Alert.alert(error)
            }
        }
    }

    return {
        datasource,
        loading,
        handleEdit,
        username,
        password,
        hidePassword,
        handleHideShowPassword,
        mode,
        handleUser,
        setUserName,
        setPassword,
        handleDelete,
        setUpdateid
    };
};

export default useUser;
