import React, { useEffect } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';
import navigation from './navigation'
import { Navigation } from 'react-native-navigation';

const Initializing = props => {
    const {loggedIn } = useSelector(state => {
        return {
            loggedIn: state.authReducer.loggedIn,
        };
    });
    useEffect(()=>{
        if(loggedIn){
            Navigation.setRoot(navigation.main())
        }else{
            Navigation.setRoot(navigation.login())
        }
    },[loggedIn])
    return (
        <>
            <ActivityIndicator size="large"/>
        </>

    );
}

export default Initializing