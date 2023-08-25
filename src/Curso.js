function Curso({dados}){
    return(
    <div>
        <h1>{dados.nome}</h1>
        <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo}/>
        <p>{dados.descricao}</p>
        <p>{dados.duracao}</p>
      </div>)
}

export default Curso;