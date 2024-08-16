import { Text, TextInput, Image, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './style';

export default function Home() {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        </View>
        <View style={styles.body}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Adicione uma nova tarefa'
                    placeholderTextColor='#9c9b9c'
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
                <View style={styles.status}>
                </View>
                <View style={styles.flatlist}>
                </View>
            </View>
        </View>
    )
}