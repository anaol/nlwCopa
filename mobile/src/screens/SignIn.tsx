import { Center, Icon, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";

import { useAuth } from "../hooks/useAuth";

import { Button } from "../components/Button";

import Logo from "../assets/logo.svg";

export function SignIn() {
    const { signIn, user } = useAuth();
    console.log("Dados do usuário: ", user);

    return (
        <Center bgColor="gray.900" flex={1} p={7}>
            <Logo height={40} width={212} />

            <Button
                leftIcon={
                    <Icon as={Fontisto} color="white" name="google" size="md" />
                }
                mt={12}
                title="ENTRAR COM GOOGLE"
                type="SECONDARY"
                onPress={signIn}
            />

            <Text color="white" textAlign="center">
                Não utilizamos nenhuma informação além {"\n"} do seu e-mail para
                criação de sua conta.
            </Text>
        </Center>
    );
}
