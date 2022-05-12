
function Home() {
  return (
    /*Uma expressão JXS tem que retornar somente um elemento
    então temos que embrulhar todo o html que estamos retornando 
    para se transformar num elemento só.
    Nesse caso utilizamos <section> mas poderia ser um fragment <></>*/
    <section>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome" />
      <button type="button">Adicionar</button>
    </section>
  )
}

export default Home
