/*
Promise => Promessa de que algo vai acontecer no futuro, independente se vai dar certo ou errado.

É utilizado para operações assícronas como:
    -> Carregar um arquivo
    -> Leitura de dados de uma API
ESTÁGIOS: 
    [PENDING] objeto da promessa iniciada
    [FULFILLED] concluida com sucesso
    [REJECTED] rejeitada 
    [SETTLED] seja com erro ou sucesso ela foi finalmente concluída
*/
let aceitar = false

console.log('pedir uber')

const promessa = new Promise((resolve, reject) => {
    if(aceitar){
        return resolve('carro chegou');
    }
    return reject('pedido negado')
})

//Quando temos o resolve que deu certo podemos chamar no then porém quando é um reject pegamos ele no catch
promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizada'))

console.log('aguardando')

/*Promisse com fetch
    fetch("https://api.github.com/users/igaraybc")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((err) => console.log(err)); 

  esse catch vai pegar o erro que ocorrer em qualquer then

  Uma promessa logo em seguida vai depender da promessa anterior, quando ela for finalizada passa pro próximo then
*/