import { StyleSheet } from 'react-native';
import { hp } from '../../../layout/dimens';
import { color, fontSize } from '../../../styles/baseTheme';

const styles = StyleSheet.create({
    toast: {
        borderRadius: 8,
        padding: 4,
        position: 'absolute',
        top: 0,
        zIndex: 2,
        alignSelf: 'center',
        backgroundColor: color.blackGrey,
        shadowColor: color.blackGrey,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      content: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        minHeight: hp(32),
        alignSelf:'center'
      },
      toastMessage: {
        color: '#fff',
        fontWeight: '700',
        fontSize: fontSize.small,
        letterSpacing: 0.26,
        marginHorizontal: 5,
        textAlign:'center'
      },
});

export default styles;