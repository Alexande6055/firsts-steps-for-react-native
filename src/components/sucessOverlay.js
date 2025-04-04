import { Button, Overlay, Text } from "@rneui/themed";
import { View } from "react-native";

export default function sucessOverlayComponent(isVisible,toggleOverlay){
    return (
        <>
            {
                < Overlay isVisible={isVisible} onBackdropPress={toggleOverlay} >
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hello!</Text>
                        <Text style={{ marginBottom: 20 }}>Welcome you have successfully logged in</Text>
                        <Button title="Close" onPress={toggleOverlay} />
                    </View>
                </Overlay >
            }
        </>

    );
}