import { StyleSheet } from 'react-native';
import { APP_CONSTANT } from "../../constants/AppConstant";
import { Styles } from "../../styles/styles";
import { MarginStyles } from "../../styles/styles-margin";
import { Shadows } from "../../styles/styles-shadow";
import { TextColors } from "../../styles/styles-text-color";
import { View, Text } from "../Themed";
import { PaddingStyles } from '../../styles/styles-padding';

interface IWhoseTurnProps {
    whoseTurn: string;
}

const WhoseTurnComp = (props: IWhoseTurnProps) => {
    const { whoseTurn } = props;
    const { marginMDLeft } = MarginStyles;
    const { paddingMD, paddingXSLeft} = PaddingStyles
    const { font25, rowFormat, centerItemAlign } = Styles;
    const { whiteText, blueText, yellowText } = TextColors;
    const { shadowText, shadowBox } = Shadows;
    const { turn } = APP_CONSTANT;

    return (
        <>
       {
            whoseTurn && (
                <View style={[marginMDLeft, paddingMD, shadowBox, rowFormat, centerItemAlign, styles.turnPanel]}>
                    {
                        whoseTurn === 'X' && (
                            <Text style={[font25, blueText, shadowText]}>{whoseTurn}</Text>
                        )
                    }
                    {
                        whoseTurn === 'O' && (
                            <Text style={[font25, yellowText, shadowText]}>{whoseTurn}</Text>
                        )
                    }
                    <Text style={[font25, whiteText, shadowText, paddingXSLeft]}>{turn}</Text>
                </View>
            )
       }
        </>
    )
}

const styles = StyleSheet.create({
    turnPanel: {
        backgroundColor: '#4d0087',
        borderWidth: 1,
        borderColor: '#8f7900',
        borderRadius: 10
    }
});

export default WhoseTurnComp;