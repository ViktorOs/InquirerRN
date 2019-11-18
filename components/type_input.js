import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function TypeInput(props){

    const [value, setValue] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);



    const onChangeInput = (text) => {
        setValue(text);
        setBtnDisabled(false);
    };


    const storeFormData = () => {

        let object = {};

        object["value"] = value;

        object["type"] = props.question.type;

        let data = {};

        data[props.question.id] = object;

        props.storeData(data);

    };

    return (

        <View style={styles.question} >


            <View style={styles.questionItem}>
                <Text style={styles.questionNumber}>
                    Питання <Text style={{fontWeight: 'bold'}}>{props.currentQuestionNumber + 1}</Text> з <Text style={{fontWeight: 'bold'}}>{props.fullLength}</Text>
                </Text>
                <Text style={styles.questionText}>
                    {props.question.title}
                </Text>

                <View style={styles.questionInputField}>
                    <TextInput
                        style={styles.questionInput}
                        onChangeText={text => onChangeInput(text)}
                        value={value}
                    />
                </View>

            </View>

            <View  style={styles.buttonsContainer} >

                { props.currentQuestionNumber + 1 !== 1 && <Button  color="#e30070" onPress={props.setPrevQuestion} title="Назад"/> }

                <Button  color="#e30070" disabled={btnDisabled} onPress={storeFormData} title={props.currentQuestionNumber + 1 !== props.fullLength ? 'Далі' : 'Відправити'} />

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    question: {
        flexDirection:'column',
        alignItems:'center',
    },
    questionItem:{
        width:'100%'
    },
    questionNumber:{
        fontSize: 20,
        color: '#fff',
        marginBottom: 20
    },
    questionText:{
        fontSize: 16,
        fontWeight:'bold',
        color: '#fff',
        marginBottom: 40
    },
    questionInputField:{
        marginBottom: 40
    },
    questionInput:{
        borderBottomWidth:2,
        borderColor:"#fff",
        color:"#fff",
        height:30,
        fontSize:14
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});