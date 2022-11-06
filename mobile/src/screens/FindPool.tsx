import { Heading, VStack } from "native-base";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Header } from "../components/Header";

export function FindPoll() {
    return (
        <VStack bgColor="gray.900" flex={1}>
            <Header showBackButton title="Buscar por código" />

            <VStack alignItems="center" mt={8} mx={5}>
                <Heading
                    color="white"
                    fontFamily="heading"
                    fontSize="xl"
                    mb={8}
                    textAlign="center"
                >
                    Encontre um bolão através de {"\n"} seu código único
                </Heading>

                <Input mb={2} placeholder="Qual código do bolão?" />

                <Button title="Buscar bolão" />
            </VStack>
        </VStack>
    );
}
