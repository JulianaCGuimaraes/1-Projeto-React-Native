import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

export default function Imagem({ navigation }) {

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../public/orca.jpg')} />
            <Button
                color="#4169e1"
                title="Name"
                onPress={() => navigation.navigate('Nome')
                }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80
    },
    logo: {
        marginBottom: 50,
        width: 300,
        height: 300,
    },
});