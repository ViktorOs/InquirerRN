import React from 'react'
import { StyleSheet, View } from 'react-native';

import TypeRadio from './type_radio'
import TypeRating from './type_rating'
import TypeInput from './type_input'
import TypeCallback from './type_callback'
import Steps from './steps'

export default function QuestionContainer(props) {

    let questionType;

    switch(props.question.type) {
        default:
            questionType = <TypeRadio {...props}/>;
            break;
        case 'radio':
             questionType = <TypeRadio {...props}/>;
             break;
        case 'rating':
             questionType = <TypeRating {...props}/>;
            break;
        case 'input':
             questionType = <TypeInput {...props}/>;
            break;
        case 'callback':
             questionType = <TypeCallback {...props}/>;
            break;
    }

    return(
        <View style={styles.container}>
            <View style={styles.questionsContainer}>

                {questionType}

            </View>
            <Steps {...props}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: '#00b2ae',
        width:'100%',
    },
    questionsContainer: {
        flex: 1,
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        paddingHorizontal:10
    },
});