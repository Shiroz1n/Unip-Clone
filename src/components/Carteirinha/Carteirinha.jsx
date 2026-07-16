import { useAuth } from "../AuthProvider/AuthProvider";
import Header from "../Header/Header";
import MenuDropdown from "../MenuDropdown/MenuDropdown";

const Carteirinha = () => {
    const { usuario } = useAuth();

    // Proteção essencial para evitar o erro de 'null'
    if (!usuario) {
        return <div className="p-4 text-white text-center">Carregando dados...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <MenuDropdown></MenuDropdown>
            {/* Container centralizado */}
            <div className="p-4 flex justify-center mt-6">
                {usuario.imagem ? (
                    <img 
                        src={usuario.imagem} 
                        alt="Carteirinha" 
                        // max-w-[320px] garante que no celular ela não passe do tamanho de um cartão
                        // w-full garante que ela ocupe o espaço disponível sem estourar
                        // h-auto mantém a proporção original
                        className="w-[99vh] md:w-[400px] h-auto shadow-xl rounded-xl border border-gray-200"
                    />
                ) : (
                    <p className="text-gray-500">Imagem da carteirinha não encontrada.</p>
                )}
            </div>
        </div>
    );
};

export default Carteirinha;