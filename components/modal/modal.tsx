import { Modal, Pressable } from 'react-native';

import { View, Text } from "../Themed";
import { ModalStyle } from '../../styles/styles-modal';
import { Styles } from '../../styles/styles';

interface IModalProps {
    isVisible: boolean;
    children: any;
    onClose: () => void;
    title: string;
}

const ModalComp = (props: IModalProps) => {
    const { isVisible, children, onClose, title } = props;
    const { modalContent, titleContainer, modalTitle } = ModalStyle;
    const { centerView, centerTextAlign, centerItemAlign, width40, font15 } = Styles;

    return (
        <>
        {
            isVisible && (
                <Modal 
                    animationType="slide" 
                    transparent={true} 
                    visible={isVisible} 
                    style={centerItemAlign}>
                    <View style={modalContent}>
                        <View style={titleContainer}>
                            <Text style={[modalTitle, centerTextAlign]}>{title}</Text>
                            <Pressable onPress={onClose}>
                                <Text>X</Text>
                            </Pressable>
                        </View>
                        {children}
                    </View>
                </Modal>
            )
        }
        </>
    )
}

export default ModalComp;