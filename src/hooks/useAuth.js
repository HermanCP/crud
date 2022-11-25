
import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useDispatch } from 'react-redux';
import realm, { getAuth } from "../../database";
import navigation from '../navigation'

const useAuth = (componentId) => {
    const dispatch = useDispatch()
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

    const handleLogin = async () => {
        setLoading(true)
        try {
          let res = await getAuth(String(userName), String(password))  
          console.log('res',res)
          if(res){
            setTimeout(() => {
                setLoading(false)
                dispatch({ type: 'LOGIN', payload: true })
                Navigation.setRoot(navigation.main())
              }, 1000);
          }else{
            setTimeout(() => {
                setLoading(false)
                Alert.alert('User name atau password salah')
              }, 1000);
          }
         
        } catch (error) {
            setTimeout(() => {
                setLoading(false)
              }, 1000);
        }
    }

    return {
        hidePassword,
        handleHideShowPassword,
        setPassword,
        setUsername,
        disable,
        handleLogin,
        loading
    };
};

export default useAuth;
