import { Controller } from "react-hook-form";
import { Input } from "@rneui/themed";
import { Text, StyleSheet } from "react-native";
export function inputControll({ text, min, message, msgRequired, nameI, control, errors, textLabel,secureTextEntry }) {
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


const styles = StyleSheet.create({
    textError: {
        marginLeft: 10,
        color: 'red',
    },
    textLabel: {
        color: 'black',
    },

});