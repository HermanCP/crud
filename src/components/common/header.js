import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const Header = props => {
    return (
        <>
            <Text style={styles.textProps}>{props.title}</Text>
        </>

    );
}

export default Header