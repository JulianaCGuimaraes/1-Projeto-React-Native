import { View, Text } from 'react-native';
import { StyleSheet, Button } from 'react-native';


export default function Nome({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Juliana</Text>
            <Button
                color="#4169e1"
                title="Image"
                onPress={() => navigation.navigate('Imagem')
                }
            />
        </View >
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10, 
        color: 'black'
    }
});