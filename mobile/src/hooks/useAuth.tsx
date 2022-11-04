import { createContext, useContext } from "react";
import { AuthContext, AuthContextDataProps } from "../contexts/AuthContext";

export function useAuth(): AuthContextDataProps {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error("useAuth can only be used inside AuthProvider");
    }

    return context;
}
