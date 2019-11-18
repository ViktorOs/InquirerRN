import React from 'react'
import { StyleSheet, View } from 'react-native';

export default function Steps({ fullLength, currentQuestionNumber }) {

    return (

            <View style={styles.questionSteps}>
                {
                    [...Array( fullLength )].map((e, i) => {
                        return <View style={[styles.step, i === currentQuestionNumber ? styles.stepActive : '', i < currentQuestionNumber ? styles.stepFinished : '']}
                                     key={i}></View>
                    })
                }

            </View>

    )
}

const styles = StyleSheet.create({
    questionSteps: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        height:60
    },
    step: {
        width: 26,
        height: 26,
        marginLeft: 12,
        marginRight: 12,
        borderColor:"#fff",
        backgroundColor:"#00b2ae",
        borderRadius:13,
        borderWidth:2
    },
    stepActive: {
        borderColor:"rgba(255,255,255,0.5)",
        backgroundColor:"rgba(255,255,255,0.5)",
        borderRadius:13,
        borderWidth:2
    },
    stepFinished: {
        borderColor:"#fff",
        backgroundColor:"#fff",
        borderRadius:13,
        borderWidth:2
    },
});