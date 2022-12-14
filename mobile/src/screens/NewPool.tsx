import { Heading, Text, VStack } from "native-base";

import Logo from "../assets/logo.svg";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Header } from "../components/Header";

export function NewPoll() {
    return (
        <VStack bgColor="gray.900" flex={1}>
            <Header title="Criar Novo Bolão" />

            <VStack alignItems="center" mt={8} mx={5}>
                <Logo />

                <Heading
                    color="white"
                    fontFamily="heading"
                    fontSize="xl"
                    my={8}
                    textAlign="center"
                >
                    Crie seu próprio bolão da copa {"\n"} e compartilhe entre
                    amigos!
                </Heading>

                <Input mb={2} placeholder="Qual nome do seu bolão?" />

                <Button title="Criar o meu bolão" />

                <Text
                    color="gray.200"
                    fontSize="sm"
                    mt={4}
                    px={10}
                    textAlign="center"
                >
                    Após criar seu bolão, você receberá um código único que
                    poderá usar para convidar outras pessoas.
                </Text>
            </VStack>
        </VStack>
    );
}
