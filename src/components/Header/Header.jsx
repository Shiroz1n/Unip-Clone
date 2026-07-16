import { useAuth } from "../AuthProvider/AuthProvider";

const Header = () => {
    const { usuario, logout } = useAuth();

    return (
        <header className="bg-[#003366] text-[#F8F9FA] p-4 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2 md:gap-4">
                
                {/* Coluna 1: Logo e Título */}
                <div className="flex items-center gap-4">
                    <img src="/Imagens/logo-unip.svg" alt="Logo" className="h-6 md:h-8 w-30" />
                    {/* Caso o logo não carregue aqui, deixei um fallback textual, mas você pode remover */}
                    {/* <div className="text-yellow-400 font-extrabold text-4xl italic tracking-tighter">UNIP</div> */}
                    <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">Área do(a) aluno(a)</h1>
                </div>

                {/* Coluna 3: Nome, Email e Botão Sair */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 self-end md:self-auto mt-2 md:mt-0">
                    <div className="text-right leading-tight">
                        <p className="text-sm font-bold">{usuario?.nome}</p>
                        <p className="text-xs md:text-sm font-bold">{usuario?.email}</p>
                    </div>
                    {/* Esconde o botão sair no mobile, ele aparecerá no MenuDropdown */}
                    <button 
                        onClick={logout}
                        className="hidden md:flex bg-red-600 hover:bg-red-700 font-bold py-2 px-3 rounded text-sm items-center gap-2"
                    >
                        <i className="fa fa-sign-out-alt"></i>
                        <span>sair</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
