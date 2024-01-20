import "expo-dev-client";
import { StyleSheet } from 'react-native';
import { Text, View } from "../components/Themed"
import { APP_CONSTANT } from "../constants/AppConstant";
import { Styles } from "../styles/styles";
import { MarginStyles } from "../styles/styles-margin";
import { router } from "expo-router";
import { TextColors } from "../styles/styles-text-color";
import { Shadows } from "../styles/styles-shadow";
import PressableButton from "../components/pressable-button/pressable-button";
import { PaddingStyles } from '../styles/styles-padding';

const HomePage = () => {
    const {  singlePlayer, multiPlayer } = APP_CONSTANT;
    const { centerView, centerTextAlign, centerItemAlign, rowFormat, title } = Styles;
    const { marginMDTop } = MarginStyles;
    const { blueText, yellowText } = TextColors;
    const { shadowText } = Shadows;
    const { paddingMDBottom } = PaddingStyles;
    return (
        <>
            <View style={centerView}>
                <View style={centerItemAlign}>
                    <View style={[rowFormat]}>
                        <View style={[customStyle.border, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, blueText, shadowText]}>T</Text>
                        </View>
                        <View style={[customStyle.border, paddingMDBottom,]}>
                            <Text style={[centerTextAlign, title, yellowText, shadowText]}>I</Text>
                        </View>
                        <View style={[customStyle.border, customStyle.noRightBorder]}>
                            <Text style={[centerTextAlign, title, yellowText, shadowText]}>C</Text>
                        </View>
                    </View>
                    <View style={[rowFormat]}>
                        <View style={[customStyle.border, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, blueText, shadowText]}>T</Text>
                        </View>
                        <View style={[customStyle.border, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, yellowText, shadowText]}>A</Text>
                        </View>
                        <View style={[customStyle.border, customStyle.noRightBorder, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, yellowText, shadowText]}>C</Text>
                        </View>
                    </View>
                    <View style={[rowFormat]}>
                        <View style={[customStyle.border, customStyle.noBottomBorder, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, blueText, shadowText]}>T</Text>
                        </View>
                        <View style={[customStyle.border, customStyle.noBottomBorder, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, yellowText, shadowText]}>O</Text>
                        </View>
                        <View style={[customStyle.border, customStyle.noBottomBorder, customStyle.noRightBorder, paddingMDBottom]}>
                            <Text style={[centerTextAlign, title, yellowText, shadowText]}>E</Text>
                        </View>
                    </View>
                </View>
                <View style={[centerItemAlign, marginMDTop]}>
                    <PressableButton 
                        buttonText={singlePlayer}
                        onPress={() => {
                            router.push({
                                pathname: '/game/[game]',
                                params: { game: 'singlePlayer'}
                            })
                        }}
                        textStyle={yellowText}
                    />
                </View>
                <View style={[centerItemAlign, marginMDTop]}>
                    <PressableButton 
                        buttonText={multiPlayer}
                        onPress={() => {
                            router.push({
                                pathname: '/game/[game]',
                                params: { game: 'multiPlayer'}
                            })
                        }}
                        textStyle={blueText}
                    />
                </View>
            </View>
            
        </>
    )
}

const customStyle = StyleSheet.create({
    border: {
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#FFF',
        width: 70
    },
    noRightBorder: {
        borderRightWidth: 0
    },
    noBottomBorder: {
        borderBottomWidth: 0
    }
})

export default HomePage;