import { useEffect } from "react";
import { Strikes } from "../../styles/styles-stroke";
import { View, Text } from "../Themed";
import { Shadows } from "../../styles/styles-shadow";

interface IStrikeComp {
    className: string;
}

const StrikeComp = (props: IStrikeComp) => {
    const { className } = props;
    const { strike, strikeRow1, strikeRow2, strikeRow3, strikeColumn1, strikeColumn2, strikeColumn3, strikeDiagonal1, strikeDiagonal2} = Strikes;
    const { shadowBox } = Shadows;
    return (
        <>
            {
                className === 'strikeRow1' && (
                    <View style={[strike, shadowBox, strikeRow1]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeRow2' && (
                    <View style={[strike, shadowBox, strikeRow2]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeRow3' && (
                    <View style={[strike, shadowBox, strikeRow3]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeColumn1' && (
                    <View style={[strike, shadowBox, strikeColumn1]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeColumn2' && (
                    <View style={[strike, shadowBox, strikeColumn2]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeColumn3' && (
                    <View style={[strike, shadowBox, strikeColumn3]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeDiagonal1' && (
                    <View style={[strike, shadowBox, strikeDiagonal1]}>
                        <Text> </Text>
                    </View>
                )
            }
            {
                className === 'strikeDiagonal2' && (
                    <View style={[strike, shadowBox, strikeDiagonal2]}>
                        <Text> </Text>
                    </View>
                )
            }
        </>
        
    )
}

export default StrikeComp;