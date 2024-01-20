import { StyleSheet } from 'react-native';

export const Strikes = StyleSheet.create({
    strike: {
        position: 'absolute',
        backgroundColor: '#f78a05'
    },
    strikeRow1: {
        width: '90%',
        height: 4,
        top: '29%',
        left: '5%'
    },
    strikeRow2: {
        width: '90%',
        height: 4,
        top: '53.5%',
        left: '5%'
    },
    strikeRow3: {
        width: '90%',
        height: 4,
        top: '68%',
        left: '5%'
    },
    strikeColumn1: {
        height: '30%',
        width: 4,
        top: '39%',
        left: '18%'
    },
    strikeColumn2: {
        height: '30%',
        width: 4,
        top: '39%',
        left: '49.5%'
    },
    strikeColumn3: {
        height: '30%',
        width: 4,
        top: '39%',
        left: '81%'
    },
    strikeDiagonal1: {
        width: '70%',
        height: 4,
        top: '53.5%',
        left: '15%',
        transform: 'skewY(45deg)'
    },
    strikeDiagonal2: {
        width: '70%',
        height: 4,
        top: '53.5%',
        left: '15%',
        transform: 'skewY(-45deg)'
    },
});