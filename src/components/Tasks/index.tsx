import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import React, { useState } from 'react';

type Props = {
    taskName: string;
    onRemove: (task: string) => void;
    onToggle: (isDone: boolean) => void;
}

export function Tasks({ taskName, onRemove, onToggle }: Props) {  
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompletedTask = () => {
        setIsCompleted(!isCompleted);
        onToggle(!isCompleted); 
    };

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.divCircle}>
                <TouchableOpacity style={[styles.circle, isCompleted && styles.checkCircle]} onPress={handleCompletedTask}>
                    {isCompleted && <Image style={styles.checkmark} source={require('../../../assets/check.png')}/>}
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={[styles.text, isCompleted && styles.textStrikethrough]}>
                {taskName}
            </Text>
            <TouchableOpacity style={{height: 32, width: 32, alignItems: 'center', justifyContent: 'center'}} onPress={onRemove}>
                <Image style={styles.trash} source={require('../../../assets/trash.png')}/>
            </TouchableOpacity>
        </View>
    )
}