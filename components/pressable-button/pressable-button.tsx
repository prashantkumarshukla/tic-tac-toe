import { Pressable } from "react-native";
import { Styles } from "../../styles/styles";
import { Shadows } from "../../styles/styles-shadow";
import { router } from "expo-router";
import { ButtonStyles } from "../../styles/styles-button";
import { TextColors } from "../../styles/styles-text-color";
import { APP_CONSTANT } from "../../constants/AppConstant";
import { Text, View } from "../Themed";
import { PaddingStyles } from "../../styles/styles-padding";

interface IPressableButton {
    buttonText: string;
    onPress: () => void;
    textStyle: any;
}

const PressableButton = (props: IPressableButton) => {
    const { buttonText, onPress, textStyle } = props;
    const { shadowBox, shadowText } = Shadows;
    const { font30, centerTextAlign, width70 } = Styles;
    const {primaryButton} = ButtonStyles;
    const { paddingMD } = PaddingStyles;
    
    return (
        <Pressable style={[shadowBox, primaryButton, paddingMD, width70]}
            onPress={onPress}>
            <Text style={[centerTextAlign, font30, textStyle, shadowText]}>{buttonText}</Text>
        </Pressable>
    )
}

export default PressableButton;