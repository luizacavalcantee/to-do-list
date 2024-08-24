import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        height: 173,
        width: '100%',
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 32,
        width: 110
    },
    body: {
        flex: 1,
        paddingHorizontal: 24
    },
    form: {
        flexDirection: 'row',
        height: 'auto',
        top: -30
    },
    input: {
        flex: 1,
        height: 56,
        width: 271,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 4,
        backgroundColor: '#262626',
        borderRadius: 7,
        borderWidth: 1,
    },
    button: {
        width: 56,
        height: 55,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        fontSize: 24,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 16,
        width: 16,
        borderColor: '#fff',
        borderRadius: 10,
        marginTop: 25,
        position: 'absolute',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 16
    },
    status: {
        height: 19,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20
    },
    eachStatus: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    numberBackground: {
        backgroundColor: '#333333',
        borderRadius: 30,
        width: 25,
        alignItems: 'center',
    },
    number: {
        color: '#D9D9D9',
        top: -1,
        fontWeight: 'bold'
    },
    flatlist: {
        height: 208,
        alignItems: 'center',
        flexDirection: 'column',
    },
    line: {
        height: 15,
        width: '100%',
        borderTopColor: '#808080',
        borderTopWidth: 0.5
    },
    emptyList: {
        height: 56,
        width: 56,
        marginBottom: 16,
        marginTop: 48
    },
    text1: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 15
    },
    text2: {
        color: '#808080',
        fontSize: 15
    }
});