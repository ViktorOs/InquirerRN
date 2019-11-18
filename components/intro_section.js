import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function IntroSection(props) {
    return(
        <View style={styles.intro}>
            <Text style={styles.greetings}>
                Вітаємо Вас!
            </Text>

            <Text style={styles.description}>
                Якість обслуговування – <Text style={{fontWeight: 'bold'}}>наш головний пріоритет</Text>, тому Ви завжди можете розраховувати на нас, якщо Ваші очікування не виправдались.
                Будь ласка, поділіться з нами своїми враженнями та побажаннями, а ми зробимо все, щоб Ви залишилися задоволені.
            </Text>

            <Button color="#e30070" title="Пройти опитування" onPress={() => props.startInquirer()}/>
        </View>
    )
}

const styles = StyleSheet.create({
    intro: {
        flex: 1,
        backgroundColor: '#48d8bc',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
    },
    greetings: {
        color: "#28324e",
        fontSize: 20,
        marginBottom: 20
    },
    description: {
        color: "#28324e",
        fontSize: 14,
        marginBottom: 20,
        textAlign:'center'
    }
});