import React from 'react'
import { StyleSheet, View } from 'react-native';

import TypeRadio from './type_radio'
import TypeRating from './type_rating'
import TypeInput from './type_input'
import TypeCallback from './type_callback'
import Steps from './steps'

export default function QuestionContainer({storeData, setPrevQuestion, question, currentQuestionNumber, fullLength }) {

    let questionType;

    switch(question.type) {
        default:
            questionType = <TypeRadio key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
            break;
        case 'radio':
             questionType = <TypeRadio key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
             break;
        case 'rating':
             questionType = <TypeRating key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
            break;
        case 'input':
             questionType = <TypeInput key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
            break;
        case 'callback':
             questionType = <TypeCallback key={currentQuestionNumber} storeData={storeData} setPrevQuestion={setPrevQuestion} question={question} currentQuestionNumber={currentQuestionNumber} fullLength={fullLength}/>;
            break;
    }

    return(
        <View style={styles.container}>
            <View style={styles.questionsContainer}>

                {questionType}

            </View>
            <Steps style={styles.steps} fullLength={fullLength} currentQuestionNumber={currentQuestionNumber}/>
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