import { StyleSheet } from 'react-native';

export const ModalStyle = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '80%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      borderBottomLeftRadius: 18,
      borderBottomRightRadius: 18,
      position: 'absolute',
      top: '30%',
      left: '10%'
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    modalTitle: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold'
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });