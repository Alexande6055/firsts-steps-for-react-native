import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from '@rneui/themed';
import { inputControll } from './componentsControll';
import { Controller } from 'react-hook-form';
import { useForm } from 'react-hook-form';
const BASE_URI = 'https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png';

export default function Login() {
    const { control, handleSubmit, formState: { errors, isValid }, watch } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    const password = watch('password');
    return (
        <View style={styles.contenFirst}>
            <View style={StyleSheet.create({ alignItems: 'center' })}>
                <Image
                    source={{ uri: BASE_URI }}
                    containerStyle={styles.item}
                />
                <Text style={styles.text}>in this example i created a form of login with tree fields and two buttons for the register the an user. i aply are validations like minLength,required,verifiPassword </Text>
            </View>
            <View style={styles.fieldConten}>
                {inputControll({ text: 'Write your user name', min: 5, message: 'this field must be at least five characters', msgRequired: 'this field is required', nameI: "userName", control, errors, textLabel: "User Name:" })}
                {inputControll({ text: 'Write your  password', min: 7, message: 'this field must be at least seven characters', msgRequired: 'this field is required', nameI: "password", control, errors, textLabel: "Password:", secureTextEntry: true })}


                <Controller
                    control={control}
                    name='verifiPassword'
                    rules={{
                        required: 'this field is required',
                        minLength: { value: 7, message: 'this field must be at least seven characters' },
                        validate: (value) =>
                            value === password || 'the paswords no match',

                    }}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            secureTextEntry={true}
                            labelStyle={StyleSheet.create({ color: 'black' })}
                            label="Verifi Password:"
                            placeholder='Write validate password'
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.verifiPassword && <Text style={styles.textError}>{errors.verifiPassword.message}</Text>}


            </View>
            <View style={styles.btnForm}>
                <Button disabled={!isValid} onPress={handleSubmit(onSubmit)}>Send</Button>
                <Button >Button of example</Button>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    contenFirst: {
        alignContent: 'center',
        marginTop: 35,
    },
    text: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    item: {
        aspectRatio: 1,
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        borderColor: 'blue',
        borderWidth: 3,
        backgroundColor: 'grey',
        marginBottom: 30,
    },
    btnForm: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fieldConten: {
        marginTop: 20,
    }, textError: {
        marginLeft: 10,
        color: 'red',
    },
});
