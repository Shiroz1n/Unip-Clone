import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import MenuDropdown from "../MenuDropdown/MenuDropdown";

const MainMenu = () => {
    const itensMenu = [
        { nome: 'AVA', icone: 'fa-solid fa-desktop', rota: '/ava' },
        { nome: 'Secretaria Virtual', icone: 'fa-solid fa-headset', rota: '/secretaria-virtual' },
        { nome: 'Avisos da Secretaria', icone: 'fa-solid fa-circle-exclamation', rota: '/avisos' },
        { nome: 'Atendimento', icone: 'fa-solid fa-comment', rota: '/atendimento' },
        { nome: 'Central de Notas', icone: 'fa-solid fa-star', rota: '/notas' },
        { nome: 'Trabalhos Acadêmicos', icone: 'fa-solid fa-file-alt', rota: '/trabalhos' },
        { nome: 'Atividades Complementares', icone: 'fa-solid fa-file-invoice', rota: '/ac' },
        { nome: 'TCC - Trabalho de Curso', icone: 'fa-solid fa-graduation-cap', rota: '/tc' },
        { nome: 'Documentos de Estágio', icone: 'fa-solid fa-file-contract', rota: '/estagio' },
        { nome: 'Iniciação Científica', icone: 'fa-solid fa-microscope', rota: '/ic' },
        { nome: 'Carteirinha', icone: 'fa-solid fa-id-card', rota: '/Carteirinha' },
        { nome: 'Office', icone: 'fa-solid fa-file-word', rota: '/office' },
        { nome: 'Minha Biblioteca', icone: 'fa-solid fa-book', rota: '/biblioteca' },
        { nome: 'Biblioteca Virtual', icone: 'fa-solid fa-book-open', rota: '/bib-virtual' },
        { nome: 'Eventos On-line', icone: 'fa-solid fa-play-circle', rota: '/eventos' },
        { nome: 'Orientação de Serviços', icone: 'fa-solid fa-info-circle', rota: '/orientacao' },
        { nome: 'Apresentação da Sec. Virtual', icone: 'fa-solid fa-book-reader', rota: '/apresentacao' }
    ];
    
    return(
        <>
        <div >
            <div>
                <Header></Header>
                <MenuDropdown></MenuDropdown>
            </div>

            <div className="w-full h-full bg-white px-0 pl-4">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-px border-gray-300">
                    {itensMenu.map((item, index) => (
                        <Cards key={item.rota} vulgo={item.nome} icon={item.icone} rota={item.rota}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default MainMenu;