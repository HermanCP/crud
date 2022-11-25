import { StyleSheet } from 'react-native';
import { hp } from '../../layout/dimens';
import { color, fontSize } from '../../styles/baseTheme';

const styles = StyleSheet.create({
    textProps: {
        color: color.black,
        fontWeight: '700',
        fontSize: fontSize.small,
        textAlign: 'center'
    },
    rowList:{
        flexDirection:"row",
        alignItems:'center',
        flex:1,
        justifyContent:"space-between",
        padding:hp(20),
        borderBottomColor:color.greyInput,
        borderBottomWidth:1
    },
    infoUser:{
        textAlign:"left"
    },
    edit:{
        backgroundColor:color.red,
        padding:hp(5),
        borderRadius:6
    },
    delete:{
        backgroundColor:color.red,
        padding:hp(5),
        borderRadius:6,
        marginVertical:hp(5)
    },
    txt:{
        color:color.white,
        fontSize:fontSize.small,
        fontWeight:'700',
        textAlign:"center"
    }
});

export default styles;