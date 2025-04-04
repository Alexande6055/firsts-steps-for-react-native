import { Controller } from "react-hook-form";
import { Input } from "@rneui/themed";
import { Text, StyleSheet,View} from "react-native";
import SucessOverlay from "./sucessOverlay";
export function inputControll({ text, min, message, msgRequired, nameI, control, errors, textLabel, secureTextEntry }) {
    return (
        <>
            <Controller
                control={control}
                name={nameI}
                rules={{
                    required: msgRequired,
                    minLength: min && { value: min, message },
                }}
                render={({ field: { onChange, value } }) => (
                    <Input
                        secureTextEntry={secureTextEntry}
                        labelStyle={styles.textLabel}
                        label={textLabel}
                        placeholder={text}
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors[nameI] && <Text style={styles.textError}>{errors[nameI]?.message}</Text>}
        </>
    );
}
//------------------------------------------------------------------------------------------
export function Register(isVisible,control,errors,password) {
    return (
        <>
            {/**
                 * component for confirm your pasword
                 */}
            <View style={{ display: isVisible ? 'flex' : 'none' }}>
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

        </>
    );
}
//------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
    textError: {
        marginLeft: 10,
        color: 'red',
    },
    textLabel: {
        color: 'black',
    },

});