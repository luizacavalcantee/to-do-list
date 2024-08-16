import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type Props = {
    name: string;
}

export function Participant() {
     
  return(
        <View style={styles.container}>
            <Text style={styles.name}>
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}