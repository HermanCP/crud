import { StyleSheet } from 'react-native';
import { hp, wp } from '../../layout/dimens';
import { color, fontSize, Radius } from '../../styles/baseTheme';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentAuth: {
        padding: hp(20)
    },
    input: {
        borderRadius: Radius.xsmall,
        marginVertical: hp(5),
        height: hp(40),
        paddingHorizontal:hp(5),
        backgroundColor:color.greyInput
    },
    button:{
        width: '100%',
        padding: hp(13),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        borderRadius: hp(8),
        backgroundColor:color.red
    },
    txtButton:{
        color:color.white,
        fontWeight:'700',
        fontSize:fontSize.small,
    },
    contentButton:{
        paddingVertical:hp(10)
    },
    contentInput:{
        paddingVertical:hp(20)
    },
    contentRegister:{
        paddingVertical:hp(40),
        justifyContent:'center',
        alignItems:'center'
    },
    row:{
       flexDirection:"row",
       alignItems:"center"
    },
    txt:{
        color:color.blackGrey,
        fontSize:fontSize.small,
        fontWeight:'700',
    },
    contentShowHide: {
        position: 'absolute',
        bottom: hp(35),
        right: hp(10),
        // top: hp(5)
    },
    icon: {
        height: hp(15),
        width: wp(15),
        aspectRatio: 6 / 6
    },
});

export default styles;