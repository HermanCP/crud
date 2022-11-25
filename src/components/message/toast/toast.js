import React, { useContext, useEffect, useRef } from 'react';
import { ToastContext } from './toastContext';
import {
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  View
} from 'react-native';
import styles from './styles';

export const Toast = () => {
  const { toast, hide } = useContext(ToastContext);
  const translateYRef = useRef(new Animated.Value(-100));

  useEffect(() => {
    if (toast.visible) {
      Animated.timing(translateYRef.current, {
        duration: 300,
        easing: Easing.ease,
        toValue: 50,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateYRef.current, {
        duration: 700,
        easing: Easing.ease,
        toValue: -100,
        useNativeDriver: true,
      }).start();
    }
  }, [toast]);

  return (
    <Animated.View
      style={[
        styles.toast,
        { transform: [{ translateY: translateYRef.current }] },
      ]}>
      <View style={styles.content}>
        <Text style={styles.toastMessage}> {toast.message}</Text>
      </View>
    </Animated.View>
  );
};

export default Toast;
