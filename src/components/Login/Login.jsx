import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";
import usuarios from "/home/alan/repos/Unip-Clone/usuarios.json"

const Login = () => {
    const { login } = useAuth();
    const [idInput, setIdInput] = useState("");
    const [senhaInput, setSenhaInput] = useState("");
    const [erro, setErro] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuarioEncontrado = usuarios.find(
            (user) => user.id.toLowerCase() === idInput.toLowerCase() && user.senha === senhaInput
        );
        if (usuarioEncontrado) {
            login(usuarioEncontrado);
            navigate('/MainMenu');
        } else {
            setErro('ID ou senha incorretos');
        }
    };

    const isFormValid = idInput.trim() !== "" && senhaInput.trim() !== "";
    return (
        // Container que ocupa a tela toda com o fundo azul (substitua a cor pelo seu fundo/imagem)
        <div className="min-h-screen flex flex-col items-center pt-20 bg-[url('/Imagens/header_01.png')] bg-cover bg-center bg-no-repeat">
            
            {/* Logo */}
            <img src="/Imagens/logo-unip.svg" alt="Logo UNIP" className="mb-4 w-48" />

            {/* Caixa de login: Sólida, sem arredondamento, sem blur */}
            <div className=" p-8 w-full max-w-sm shadow-lg">
                
                <h2 className="text-xl font-bold mb-6 text-center text-white">Área do(a) Aluno(a)</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text"
                        value={idInput}
                        placeholder="RA(número de matrícula)"
                        className="w-full p-3 bg-white text-gray-700 focus:outline-none rounded-lg border-gray-100"
                        onChange={(e) => setIdInput(e.target.value)} 
                    />

                    <input 
                        type="password"
                        value={senhaInput}
                        placeholder="Senha"
                        className="w-full p-3 bg-white text-gray-700 focus:outline-none rounded-lg border-gray-100"
                        onChange={(e) => setSenhaInput(e.target.value)} 
                    />

                    <button 
                        type="submit"
                        disabled={!isFormValid} // Botão desativado se o form estiver vazio
                        className={`w-full p-3 transition-colors font-bold text-white rounded-lg border-gray-100 ${
                            isFormValid ? "bg-[#28a745] hover:bg-green-700" : "bg-[#28a745] opacity-50 cursor-not-allowed"
                        }`}
                    >
                        ENTRAR
                    </button>
                </form>

                {erro && (
                    <p className="mt-4 text-center text-red-300 font-bold bg-red-900/50 p-2">
                        {erro}
                    </p>
                )}

                {/* Links estilizados conforme a imagem */}
                <div className="mt-6 flex justify-center gap-4 text-sm">
                    <a href="#" className="border border-blue-500 px-3 py-1 text-blue-500! hover:bg-blue-300 hover:text-white transition-colors rounded-sm">Esqueci a senha</a>
                    <a href="#" className="border border-blue-500 px-3 py-1 text-blue-300! hover:bg-blue-400 hover:text-white-500 transition-colors rounded-sm">Como acessar</a>
                </div>
            </div>
        </div>
    );
};

export default Login;