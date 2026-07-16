const Cards = ({ vulgo, icon, rota, isFirst }) => {
    // Definindo as cores com base se é o primeiro cartão (destaque azul) ou não.
    // Conforme a imagem 2, o primeiro card tem fundo azul e texto branco, e os demais fundo cinza claro e texto azul.
    const bgColor = isFirst ? 'bg-[#186cdc]' : 'bg-[#f4f4f5]';
    const textColor = isFirst ? 'text-white' : 'text-[#2a7bde]';
    const hoverTextColor = isFirst ? 'group-hover:text-gray-200' : 'group-hover:text-[#186cdc]';

    return(
        <a 
            className={`group flex flex-row md:flex-col items-center justify-start md:justify-center h-auto md:h-[180px] p-6 md:p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${bgColor} rounded mb-4 md:mb-6 hover:z-10 shadow`} 
            href={rota}
        >
            <div className={`flex flex-row md:flex-col items-center justify-start md:justify-center w-full h-full ${textColor} gap-4 md:gap-0`}>
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <i className={`${icon} text-3xl md:text-5xl md:mb-4 transition-colors duration-300 ${textColor} group-hover:opacity-80`}></i>
                </div>
                
                <div className={`text-left md:text-center text-[1rem] md:text-lg font-bold transition-colors duration-300 ${hoverTextColor} leading-tight`}>
                    <h3>{vulgo}</h3>
                </div>
            </div>
        </a>
    );
};

export default Cards;
