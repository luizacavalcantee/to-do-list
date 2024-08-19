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
                    <View style={styles.circle}></View>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.status}>
                <View style={styles.eachStatus}>
                    <Text style={[styles.text, { color: '#4EA8DE' }]}>Criadas</Text>
                    <View style={styles.numberBackground}>
                        <Text style={styles.number}>2</Text>
                    </View>
                </View>

                <View style={styles.eachStatus}>
                    <Text style={[styles.text, { color: '#8284FA' }]}>Concluídas</Text>
                    <View style={styles.numberBackground}>
                        <Text style={styles.number}>5</Text>
                    </View>
                </View>
            </View>
                <View style={styles.flatlist}>
                    <View style={styles.line}></View>
                    <Image style={styles.emptyList} source={require('../../../assets/lista-vazia.png')}/>
                    <Text style={styles.text1}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.text2}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
            </View>
        </View>
    )
}