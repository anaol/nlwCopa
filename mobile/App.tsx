import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { NewPool } from "./src/screens/NewPool";
import { Loading } from "./src/components/Loading";

import { THEME } from "./src/styles/theme";
import { AuthContexProvider } from "./src/contexts/AuthContext";

export default function App() {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    return (
        <NativeBaseProvider theme={THEME}>
            <AuthContexProvider>
                <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    translucent
                />

                {fontsLoaded ? <Loading /> : <NewPool />}
            </AuthContexProvider>
        </NativeBaseProvider>
    );
}
