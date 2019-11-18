import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function TypeCallback(props){

    const [value, setValue] = useState(0);
    const [isChecked, setIsChecked] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(true);


    const handleRadioChange = (value) => {
        setValue(value);
        setBtnDisabled(false);
        setIsChecked(value)
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

                <View style={styles.questionRadioList}>

                    <Text style={[styles.questionRadio, isChecked === 1 ? styles.questionRadioChecked : '']} onPress={(e) => handleRadioChange(1)}>
                        Так
                    </Text>
                    <Text style={[styles.questionRadio, isChecked === 0 ? styles.questionRadioChecked : '']} onPress={(e) => handleRadioChange(0)}>
                        Ні
                    </Text>

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
    questionRadioList:{
        flexDirection:'row',
        marginBottom: 40
    },
    questionRadio:{
        flex:1,
        fontSize: 12,
        fontWeight:'bold',
        color: '#fff',
        textAlign:'center',
        marginBottom: 20,
        borderRadius:2,
        borderWidth:2,
        borderColor:"#fff",
        marginRight:12,
        paddingVertical:10,
        paddingHorizontal:10,
    },
    questionRadioChecked:{
        backgroundColor:'#fff',
        color: '#00b2ae',
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});