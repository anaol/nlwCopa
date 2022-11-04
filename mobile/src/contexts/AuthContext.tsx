import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useState,
} from "react";

import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export interface UserProps {
    avatarUrl: string;
    name: string;
}

export interface AuthContextDataProps {
    signIn: () => Promise<void>;
    stateIsUserLoading: boolean;
    user: UserProps;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContexProvider({
    children,
}: PropsWithChildren<any>): ReactElement {
    const [stateIsUserLoading, setStateIsUserLoading] = useState(false);
    const [stateUser, setStateUser] = useState<UserProps>({} as UserProps);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId:
            "727680231675-5fpeuq2mi5263glgf16v4umpb6peo08.apps.googleusercontent.com",
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ["profile", "email"],
    });

    const signIn = async () => {
        try {
            setStateIsUserLoading(true);
            await promptAsync();
        } catch (error) {
            console.log("error: ", error);
            throw error;
        } finally {
            setStateIsUserLoading(false);
        }
    };

    const signInWithGoogle = async (access_token: string) => {
        console.log("Token de Autenticação: ", access_token);
    };

    useEffect(() => {
        if (
            response?.type === "success" &&
            response.authentication?.accessToken
        ) {
            signInWithGoogle(response.authentication.accessToken);
        }
    }, [response]);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                stateIsUserLoading,
                user: stateUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
