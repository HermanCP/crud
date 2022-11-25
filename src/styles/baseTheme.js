
import { Dimensions } from 'react-native';
import { hp } from '../layout/dimens'

export const deviceWidth = Dimensions.get('window').width;


const color = {
    red: '#F05252',
    black: '#000000',
    blackGrey: '#4B4A4A',
    white: '#FFFFFF',
    greyInput:'#F2F2F2',
    disabled:'#CDCDCD'
}

const fontSize = {
    small: hp(12),
    regular: hp(15),
    large: hp(22),
    xLarge: hp(33)
}

const Radius = {
    xsmall: hp(10),
    small: hp(12),
    regular: hp(15),
    large: hp(22),
    xLarge: hp(33)
}

export {
    color,
    fontSize,
    Radius
}
