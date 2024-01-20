import { FontAwesome } from '@expo/vector-icons';

import { Pressable } from "react-native";
import { Shadows } from "../../styles/styles-shadow";
import { ButtonStyles } from "../../styles/styles-button";
import { PaddingStyles } from "../../styles/styles-padding";
import { TextColors } from '../../styles/styles-text-color';
import { Styles } from '../../styles/styles';

interface IIconButton {
    iconName: any;
    onPress: () => void;
    iconSize: number
}

const IconButton = (props: IIconButton) => {
    const { iconName, onPress, iconSize } = props;
    const { shadowBox, shadowText } = Shadows;
    const { primaryButton } = ButtonStyles;
    const { paddingMD } = PaddingStyles;
    const { whiteText } = TextColors;
    const { centerItemAlign} = Styles;
    
    return (
        <Pressable style={[shadowBox, primaryButton, paddingMD, centerItemAlign]}
            onPress={onPress}>
            <FontAwesome
                name={iconName}
                size={iconSize}
                style={[shadowText, whiteText]}
            />
        </Pressable>
    )
}

export default IconButton;