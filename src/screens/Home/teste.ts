import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      padding: 24,
      borderWidth: 2,
      borderColor: '#FF0000'
    },
    image: {
      borderWidth: 2,
      borderColor: '#FF008A'
    },
    imagecontainer: {
        borderWidth: 2,
        borderColor: '#1E6F'
      },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
        borderWidth: 2,
        borderColor: '#FFFF00'
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        borderWidth: 2,
        borderColor: '#FF7300'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#FF00FF'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#1E6F9F'
    },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
      borderWidth: 2,
      borderColor: '#00C3FF'
    }
  });