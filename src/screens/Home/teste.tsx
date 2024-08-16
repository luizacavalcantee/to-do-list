import { Text, TextInput, Image, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './style';
import { Participant } from '../../components/Participants';

export default function Home() {

  return (
    <View style={styles.container}>
    <View style={styles.imagecontainer}>
        <Image style={styles.image} source={require('../../../assets/logo.png')}/>
    </View>

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
    
    <FlatList
       data={[]}
       keyExtractor={item => item}
       renderItem={({ item }) => (
        <Participant
              key={item}
            /> 
       )}
       showsVerticalScrollIndicator={false}
       ListEmptyComponent={() => (
        <View>
        <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.listEmptyText}>
            Crie tarefas e organize seus itens a fazer
        </Text>
        </View>
       )}
    />
    </View>
  );
}