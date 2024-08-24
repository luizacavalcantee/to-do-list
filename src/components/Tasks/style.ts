import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 340,
        backgroundColor: '#333333',
        borderRadius: 7,
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 8,
        gap: 8,
        paddingTop: 12,
        paddingRight: 6,
        paddingBottom: 12,
        paddingLeft: 12
    },
    divCircle: {
        height: 24,
        width: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        height: 17,
        width: 17,
        borderWidth: 1.5,
        borderColor: '#4ea8de',
        borderRadius: 16
    },
    checkCircle: {
        height: 17,
        width: 17,
        borderColor: '#5E60CE',
        borderWidth: 0.5,
        backgroundColor: '#5E60CE',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkmark: {
        height: 7,
        width: 9,
        left: -0.3,
        resizeMode: 'contain'
    },
    text: {
        color: '#f2f2f2',
        fontSize: 15,
        width: 240,
        fontWeight: 'regular'
    },
    textStrikethrough: {
        color: '#808080',
        fontSize: 15,
        width: 240,
        fontWeight: 'regular',
        textDecorationLine: 'line-through'
    },
    trash: {
        height: 14,
        width: 12
    }
});
