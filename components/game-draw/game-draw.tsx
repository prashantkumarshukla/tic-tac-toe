import { StyleSheet } from 'react-native';
import { APP_CONSTANT } from "../../constants/AppConstant";
import { View, Text } from "../Themed";
import { MarginStyles } from '../../styles/styles-margin';
import { Styles } from '../../styles/styles';
import { PaddingStyles } from '../../styles/styles-padding';
import { Shadows } from '../../styles/styles-shadow';
import { TextColors } from '../../styles/styles-text-color';


const GameDraw = () => {
    const { gameDraw } = APP_CONSTANT;
    const { marginMDLeft } = MarginStyles;
    const { paddingXS, paddingXSTop, paddingMDLeft, paddingMDRight} = PaddingStyles
    const { font30, rowFormat } = Styles;
    const { blackText } = TextColors;
    const {  shadowBox } = Shadows;

    return (
        <>
            <View style={[marginMDLeft, paddingXS, paddingXSTop, paddingMDLeft, paddingMDRight, shadowBox, rowFormat, styles.gameDrawPanel]}>
                <Text style={[font30, blackText]}>{gameDraw}</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    gameDrawPanel: {
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderColor: '#8f7900',
        borderRadius: 10
    }
});

export default GameDraw;