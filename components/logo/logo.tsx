import { APP_CONSTANT } from "../../constants/AppConstant";
import { Styles } from "../../styles/styles";
import { PaddingStyles } from "../../styles/styles-padding";
import { Shadows } from "../../styles/styles-shadow";
import { TextColors } from "../../styles/styles-text-color";
import { View, Text } from "../Themed";

const AppLogo = () => {
    const { font30, rowFormat } = Styles;
    const { blueText, yellowText } = TextColors;
    const { shadowText } = Shadows;
    const { paddingXSLeft, paddingXSRight, paddingMDRight } = PaddingStyles;
    const { tic, tac, toe } = APP_CONSTANT;

    return(
        <View style={[rowFormat, paddingMDRight]}>
            <Text style={[blueText, shadowText, font30]}>{tic}</Text>
            <Text style={[yellowText, shadowText, font30, paddingXSLeft, paddingXSRight]}>{tac}</Text>
            <Text style={[blueText, shadowText, font30]}>{toe}</Text>
        </View>
    )
}

export default AppLogo;