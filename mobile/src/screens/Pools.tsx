import { Icon, VStack } from "native-base";
import { Octicons } from "@expo/vector-icons";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

export function Polls() {
    return (
        <VStack bgColor="gray.900" flex={1}>
            <VStack
                borderBottomColor="gray.600"
                borderBottomWidth={1}
                mb={4}
                mt={6}
                mx={5}
                pb={4}
            >
                <Header showBackButton title="Meus Bolões" />

                <Button
                    leftIcon={
                        <Icon
                            as={Octicons}
                            color="black"
                            name="search"
                            size="md"
                        />
                    }
                    title="Buscar Bolão por código"
                />
            </VStack>
        </VStack>
    );
}
