import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
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
        width: 110,
    },
    body: {
        //borderWidth: 2,
        borderColor: '#1E6F',
        paddingHorizontal: 24,
    },
    form: {
        flexDirection: 'row',
        height: 'auto',
        gap: 7,
        top: -30
    },
    status: {
        //borderWidth: 2,
        borderColor: '#FFFF00',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    flatlist: {
    },
    input: {
        flex: 1,
        height: 56,
        width: 271,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        backgroundColor: '#262626',
        borderRadius: 7,
        borderWidth: 1,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    }
});