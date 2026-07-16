import { useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";

const MenuDropdown = () => {
    const [aberto, setAberto] = useState(null);
    const { logout } = useAuth();
    
    const opcoesMenu = [
        { nome: "Documentos do Aluno"},
        { nome: "Documentos Digitais" },
        { nome: "Secretaria On-line" },
        { nome: "Ouvidoria" }
    ];
    
    const opcoesMeusDados = [
        { nome: "Trocar a senha da área do(a) aluno(a) do e-mail"},
        { nome: "Trocar a senha do e-mail"}
    ];

    return (
        <div className="flex items-center justify-between relative bg-[#075ebd] p-2 text-[#F8F9FA] px-4 md:pl-5 mb-6 md:mb-11 text-base font-bold w-full">
            
            {/* Ícone Hamburger (Apenas Mobile) */}
            <div className="md:hidden flex items-center">
                <button 
                    onClick={() => setAberto(aberto === 'mobile' ? null : 'mobile')}
                    className="text-2xl leading-none px-2 focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Menus Desktop (Oculto no mobile ou exibe o dropdown) */}
            <div className={`md:flex gap-6 ${aberto === 'mobile' ? 'flex flex-col absolute top-full left-0 w-full bg-[#075ebd] p-4 z-50' : 'hidden md:flex'}`}>
                <div className="p-1 relative">
                    <button onClick={() => setAberto(aberto === 'servicos' ? null : 'servicos')}>Serviços ▾</button>
                    {aberto === 'servicos' && (
                        <ul className="md:absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 min-w-[200px] z-50 border border-gray-200">
                            {opcoesMenu.map((opcao, index) => (
                                <li key={index} className="p-2 border-b hover:bg-gray-100 cursor-pointer text-sm font-normal">
                                    {opcao.nome}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="p-1 relative">
                    <button onClick={() => setAberto(aberto === 'meusDados' ? null : 'meusDados')}>Meus Dados ▾</button>
                    {aberto === 'meusDados' && (
                        <ul className="md:absolute top-full left-0 bg-white text-black shadow-lg rounded mt-1 min-w-[200px] z-50 border border-gray-200">
                            {opcoesMeusDados.map((opcao, index) => (
                                <li key={index} className="p-2 border-b hover:bg-gray-100 cursor-pointer text-sm font-normal">
                                    {opcao.nome}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Botão Sair (Apenas Mobile, pois no desktop fica no Header) */}
            <div className="md:hidden flex items-center">
                <button 
                    onClick={logout}
                    className="bg-[#ef4444] hover:bg-red-600 font-bold py-1 px-3 rounded text-sm flex items-center gap-2"
                >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    sair
                </button>
            </div>
            
        </div>
    );
};

export default MenuDropdown;