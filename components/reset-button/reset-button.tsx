import IconButton from "../icon-button/icon-button";

interface IResetButton {
    onPress: () => void;
}

const ResetButton = (props: IResetButton) => {
    const { onPress } = props;

    return (
        <IconButton iconName="rotate-right" iconSize={25} onPress={onPress} />
    )
}

export default ResetButton;