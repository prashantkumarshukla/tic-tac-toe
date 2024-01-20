import { StyleSheet, Dimensions } from 'react-native';
import { View, Text } from '../Themed';
import { TextColors } from '../../styles/styles-text-color';
import { PaddingStyles } from '../../styles/styles-padding';
import { Shadows } from '../../styles/styles-shadow';
import { Styles } from '../../styles/styles';

interface IScores {
    panelColor: string | 'default';
    name: string;
    score: number;
}

const screen = Dimensions.get('window');
const SQUARE_SIZE = Math.floor(screen.width * 0.27);

const Scores = (props: IScores) => {
    const { panelColor, name, score } = props;
    const { blackText } = TextColors;
    const { paddingMD } = PaddingStyles;
    const { shadowBox } = Shadows;
    const { centerItemAlign, font20 } = Styles;
    return (
        <>
        {
            <View style={panelColor === 'blue' ? [paddingMD, shadowBox, centerItemAlign, styles.panel, styles.bluePanel] : 
                panelColor === 'yellow' ? [paddingMD, shadowBox, centerItemAlign, styles.panel, styles.yelloPanel] : 
                [paddingMD, shadowBox, centerItemAlign, styles.panel]
            }>
                <Text style={[blackText, font20]}>{name}</Text>
                <Text style={[blackText, font20]}>{score}</Text>
            </View>
        }
            
        </>
    )
}

const styles = StyleSheet.create({
    panel: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
    },
    bluePanel: {
        backgroundColor: '#02aabd'
    },
    yelloPanel: {
        backgroundColor: '#fad000'
    }
});

export default Scores;