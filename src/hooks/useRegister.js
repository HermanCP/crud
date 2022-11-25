
import { useCallback, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import realm, { registerUser } from "../../database";
import { ToastContext } from '../components/message/toast/toastContext';

const useRegister = () => {
    const { show } = useContext(ToastContext)
    const [hidePassword, setHidePassword] = useState(true)
    const handleHideShowPassword = useCallback(() => setHidePassword(!hidePassword));
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(true)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (userName !== '' && password !== '') {
                setDisable(false)
            } else {
                setDisable(true)
            }
        }, 0)
        return () => clearTimeout(delayDebounceFn)
    }, [userName, password])

    const handleRegister = async () => {
        setLoading(true)
        try {
            let res = await registerUser(userName, password)
            console.log(res)
            setTimeout(() => {
                Alert.alert('Berhasil Daftar')
                setLoading(false)
            }, 1000);
        } catch (error) {
            setLoading(false)
            Alert.alert(error)
        }

    }

    return {
        hidePassword,
        handleHideShowPassword,
        handleRegister,
        setPassword,
        setUsername,
        disable,
        loading
    };
};

export default useRegister;
