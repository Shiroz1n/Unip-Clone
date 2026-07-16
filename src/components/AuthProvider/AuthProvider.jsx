import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Inicializa o estado buscando no localStorage
    const [usuarioLogado, setUsuarioLogado] = useState(() => {
        const savedUser = localStorage.getItem("usuario");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const login = (usuario) => {
        setUsuarioLogado(usuario);
        // Salva no localStorage quando logar
        localStorage.setItem("usuario", JSON.stringify(usuario));
    };

    const logout = () => {
        setUsuarioLogado(null);
        // Remove do localStorage ao sair
        localStorage.removeItem("usuario");
    };

    return (
        <AuthContext.Provider value={{ usuario: usuarioLogado, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
export function useAuth() {
    return useContext(AuthContext);
}