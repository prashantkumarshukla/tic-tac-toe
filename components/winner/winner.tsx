import { StyleSheet } from 'react-native';
import { APP_CONSTANT } from "../../constants/AppConstant";
import { View, Text } from "../Themed";
import { MarginStyles } from '../../styles/styles-margin';
import { Styles } from '../../styles/styles';
import { PaddingStyles } from '../../styles/styles-padding';
import { Shadows } from '../../styles/styles-shadow';
import { TextColors } from '../../styles/styles-text-color';

interface IWinner {
    name: string
}

const Winner = (props: IWinner) => {
    const { name } = props;
    const { win } = APP_CONSTANT;
    const { marginMDLeft } = MarginStyles;
    const { paddingXS, paddingXSTop, paddingMD, paddingMDLeft, paddingMDRight} = PaddingStyles
    const { font25, rowFormat } = Styles;
    const { blackText } = TextColors;
    const { shadowText, shadowBox } = Shadows;
    return (
        <>
        {
            name && (
                <View style={[marginMDLeft, paddingMD, paddingMDLeft, paddingMDRight, shadowBox, rowFormat, styles.winPanel]}>
                    <Text style={[font25, blackText]}>{name} {win}</Text>
                </View>
            )
        }
        </>
    );
}

const styles = StyleSheet.create({
    winPanel: {
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
        borderColor: '#8f7900',
        borderRadius: 10
    }
});

export default Winner;