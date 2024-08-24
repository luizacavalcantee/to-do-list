import { Text, TextInput, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { Tasks } from '../../components/Tasks';
import React, { useState } from 'react';

export default function Home() {
    const [tasks, setTasks] = useState<{ name: string, isCompleted: boolean }[]>([]);
    const [taskName, setTaskName] = useState('');
    const [completedTasks, setCompletedTasks] = useState(0);

    function handleTaskAdd() {
        setTasks(prevState => [...prevState, { name: taskName, isCompleted: false }]);
        setTaskName('');
    }

    function handleTaskRemove(taskName: string) {
        setTasks(prevState => {
            const updatedTasks = prevState.filter(task => task.name !== taskName);
            const completedCount = updatedTasks.filter(task => task.isCompleted).length;
            setCompletedTasks(completedCount);
            return updatedTasks;
        });
    }

    function handleToggleTask(taskName: string) {
        setTasks(prevState => {
            const updatedTasks = prevState.map(task =>
                task.name === taskName ? { ...task, isCompleted: !task.isCompleted } : task
            );
            const completedCount = updatedTasks.filter(task => task.isCompleted).length;
            setCompletedTasks(completedCount);
            return updatedTasks;
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} />
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
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item.name}
                            taskName={item.name}
                            isCompleted={item.isCompleted}
                            onRemove={() => handleTaskRemove(item.name)}
                            onToggle={() => handleToggleTask(item.name)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <View style={styles.flatlist}>
                            <View style={styles.line}></View>
                            <Image style={styles.emptyList} source={require('../../../assets/lista-vazia.png')} />
                            <Text style={styles.text1}>Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.text2}>Crie tarefas e organize seus itens a fazer</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
