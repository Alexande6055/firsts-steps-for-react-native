import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Button, Image, Text, Overlay } from '@rneui/themed';
import { inputControll, Register } from './componentsControll';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../util/firebaseConfig';
import sucessOverlay from './sucessOverlay';
const BASE_URI = 'https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png';


export default function Login() {
    const { control, handleSubmit, formState: { errors, isValid }, watch } = useForm();
    const [overlayVisible, setOverlayVisible] = useState(false);
    const toggleOverlay = () => {
        setOverlayVisible(!overlayVisible);
    };

    const onSubmit = async (data) => {
        try {
            // Usar el método de la SDK web
            const userCredential = await signInWithEmailAndPassword(auth, data.userName, data.password);
            const user = userCredential.user;
            const idToken = await user.getIdToken();
            console.log("ID TOKEN ", idToken);
            Alert.alert('Inicio Exitoso');
        } catch (error) {
            console.error(error);
            Alert.alert('Error al iniciar sesión', error.message);
        }
    };

    const password = watch('password');
    const [isVisible, setIsVisible] = useState(false);
    const oneClick = () => {
        setIsVisible(!isVisible);
    };

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

                {
                    isVisible && Register(isVisible, control, errors, password)
                }

                {/**
                 * section for menssage the register */ }
                <View style={styles.sectionRegister}>
                    <Text>You are register in this app. if not register </Text>
                    <TouchableOpacity onPress={oneClick}>
                        <Text style={{ color: 'blue' }}>
                            here
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.btnForm}>
                <Button onPress={handleSubmit(onSubmit)}>{isVisible ? "Register" : "Login"}</Button>
            </View>
            {/* Overlay (Dialog) */}
            {sucessOverlay(overlayVisible, toggleOverlay)}
        </View>
    );
};


const styles = StyleSheet.create({
    contenFirst: {
        marginTop: 35,
    },
    text: {
        justifyContent: 'center',
        marginHorizontal: 10,
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
        justifyContent: 'center',
    },
    fieldConten: {
        marginTop: 20,
    },
    sectionRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
