import { createContext, useState } from "react";

export const AuthContext = createContext();
AuthContext.displayName = 'AGAPetshop_Auth'

export const AuthProvider = ({ children }) => {

    const admin = {
        firstName: 'Gabriel',
        lastName: 'Oliveira',
        document: '54424309860',
        email: 'gabriel.oliveira@agahpetshop.com.br'
    }

    const context = {
        admin
    }

    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    );
}