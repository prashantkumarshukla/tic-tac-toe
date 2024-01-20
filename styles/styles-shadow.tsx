import { StyleSheet } from 'react-native';

export const Shadows = StyleSheet.create({
    shadowBox: {
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.7,
        shadowOffset: {width: 0, height: 10},
    },
    shadowText: {
        textShadowColor: '#000000',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 3
    }
});