import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Thanks() {
    return(
        <View style={styles.intro}>
            <Text style={styles.thanks}>
                Дякуємо Вам за відгук! Завдяки Вам ми стаємо кращими.
            </Text>
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
    thanks: {
        color: "#28324e",
        fontSize: 20,
        marginBottom: 20,
        textAlign:'center'
    },
});