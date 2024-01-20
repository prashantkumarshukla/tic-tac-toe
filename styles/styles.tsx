import { Dimensions, StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    defaultView: {
        flex: 1
    },
    rowFormat: {
        flexDirection: 'row'
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    alignLeft: {
        alignSelf: 'flex-start'
    },
    width100: {
        width: Dimensions.get('window').width
    },
    width20: {
        width: '20%'
    },
    width30: {
        width: '30%'
    },
    width40: {
        width: '40%'
    },
    width50: {
        width: '50%'
    },
    width60: {
        width: '60%'
    },
    width70: {
        width: '70%'
    },
    sideMargin: {
        marginLeft: 10,
        marginRight: 10
    },
    allSidePadding20: {
        padding: 20
    },
    whiteBg: {
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    viewShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 1
    },
    warningPane: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        paddingTop: 25,
        paddingBottom: 50,
        alignSelf: 'flex-end',
        bottom: 0,
        width: Dimensions.get('window').width,
        alignItems: 'center'
    },
    centerView: {
        flex: 1, 
        justifyContent: "center", 
        alignContent: "center"
    },
    centerTextAlign: {
        textAlign: "center"
    },
    centerItemAlign: {
        alignItems: 'center'
    },
    dot: {
        width: 5,
        height: 5,
        borderRadius: 3,
        backgroundColor: 'red',
    },
    smallText: {
        fontSize: 11
    },
    whiteText: {
        color: '#FFFFFF'
    },
    redText: {
        color: '#FF0000'
    },
    transparnetBackground: {
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    titleText: {
        fontWeight: 'bold'
    },
    customizeAccessory: {
        backgroundColor: 'rgba(250, 42, 0 , 1)'
    },
    imgVideoEditHeader: {
        position: 'absolute',
        top: 10,
        zIndex: 1
    },
    mediaViewHolder: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 100
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 50
    },
    videoButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraView: {
        flex: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        justifyContent: "center",
    },
    closeCamera: {
        marginTop: 50,
        marginLeft: 15
    },
    blinkAligned: {
        alignSelf: 'center',
        marginTop: 55
    },
    dotAligned: {
        alignSelf: 'center',
    },
    cameraImgPickIconSection: {
        width: '25%', 
        alignSelf: "flex-end"
    },
    cameraClickIconSection: {
        width: '50%', 
        alignSelf: "flex-end", 
        alignItems: 'center'
    },
    cameraFlipIconSection: {
        width: '25%', 
        alignSelf: "flex-end"
    },
    iconOnActiveCamera: {
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 40,
        width: 120
    },
    imgClikedPane: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        padding: 50
    },
    imgRetake: {
        alignItems: 'flex-start', 
        width: '50%'
    },
    usePhoto: {
        alignItems: 'flex-end', 
        width: '50%'
    },
    profilePhoto: {
        width: Dimensions.get('window').width - 50,
        height: '90%'
    },
    boldText: {
        fontWeight: 'bold'
    },
    inputTextField: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCC'
    },
    userNameSection: {
        backgroundColor: '#FFF',
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 15,
        color: '#000'
    },
    phoneNo: {
        backgroundColor: '#FFF',
        color: '#CCC',
        fontSize: 12,
        paddingLeft: 10,
        paddingBottom: 10
    },
    font15: {
        fontSize: 15
    },
    font20: {
        fontSize: 20
    },
    font25: {
        fontSize: 25
    },
    font30: {
        fontSize: 30
    },
    font50: {
        fontSize: 50
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    inside: {
        borderWidth: 5,
        borderColor: '#FFFFFF',
        borderRadius: 36
    },
    logoImage: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0553'
    }
})