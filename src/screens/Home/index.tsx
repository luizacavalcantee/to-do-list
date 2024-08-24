import { Text, TextInput, Image, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { styles } from './style';
import { Tasks } from '../../components/Tasks';
import React, { useState } from 'react';

export default function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');
    const [completedTasks, setCompletedTasks] = useState(0); 

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, taskName]);
        setTaskName('');
    }

    function handleTaskRemove(tittle: string) {
        setTasks(prevState => prevState.filter(task => task !== tittle))   
        
    }

    function handleToggleTask(isDone: boolean) {
        if (isDone) {
            setCompletedTasks(completedTasks + 1)
        } else {
            setCompletedTasks(completedTasks - 1); 
        }
    }

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
                        onChangeText={setTaskName}
                        value={taskName}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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
                            <Text style={styles.number}>{tasks.length}</Text>
                        </View>
                    </View>

                    <View style={styles.eachStatus}>
                        <Text style={[styles.text, { color: '#8284FA' }]}>Concluídas</Text>
                        <View style={styles.numberBackground}>
                            <Text style={styles.number}>{completedTasks}</Text>
                        </View>
                    </View>
                </View>
                <FlatList 
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Tasks 
                            key={item}
                            taskName={item}
                            onRemove={() => handleTaskRemove(item)}
                            onToggle={(isDone: boolean) => handleToggleTask(isDone)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.flatlist}>
                            <View style={styles.line}></View>
                            <Image style={styles.emptyList} source={require('../../../assets/lista-vazia.png')}/>
                            <Text style={styles.text1}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.text2}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>                    
                    )}
                />
            </View>
        </View>
    )
}