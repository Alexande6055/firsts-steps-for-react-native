import { StyleSheet, Text, View } from "react-native";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import { inputControll } from "./componentsControll";
export default function Form() {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onsubmit = (data) => {
        console.log(data);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>hellow welcome, this is a example for the make a form with validate of "Hook Form",additional i use the library "react-native-elements" for make the elements the this form </Text>
            <View style={styles.form}>
                {inputControll({ text: "Write your name", min: 5, message: "your name must be at least five characters", msgRequired: "this field is required", nameI: "name", control, errors })}
                {inputControll({ text: "Write your last name", min: 5, message: "your last name must be at least five characters", msgRequired: "this field is required", nameI: "lastName", control, errors })}
                {inputControll({ text: "Write your address", min: 10, message: "your address must be at least ten characters", msgRequired: "this field is required", nameI: "address", control, errors })}
                {inputControll({ text: "Write your phone", min: 10, message: "your phone numbre must be at least ten numbers", msgRequired: "this field is required", nameI: "phone", control, errors })}
            </View>
            <View style={styles.containerButton}>
                <Button buttonStyle={styles.btn} titleStyle={styles.textbtn} onPress={handleSubmit(onsubmit)}>print in consol my data</Button>
                <Button buttonStyle={styles.btn} titleStyle={styles.textbtn} onPress={handleSubmit(onsubmit)}>button of example</Button>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
    },
    form: {
        marginTop: 30,
    }
    ,
    containerButton: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
    },
    btn: {
    },
    text: {
        justifyContent: "center",
        marginLeft: 10,
        marginRight: 10,
    },
    textError: {
        marginLeft: 10,
        color: 'red',
    },

});