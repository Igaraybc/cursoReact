//Funções aceitam qualquer tipo de dado como parâmetro
//Callbacks são funções passadas como argumento para outra função e depois de outras tarefas ela vai ser chamada de volta.

function imprimirDado(dado) {
    console.log("outras tarefas");
    console.log(dado());
}

imprimirDado(() => 'Olá mundo')

//setTimeout = depois de um certo tempo definido ele vai executar a função;

setTimeout(()=>console.log("depois de 1s"), 1000);