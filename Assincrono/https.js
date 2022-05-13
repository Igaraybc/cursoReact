const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

//callback
https.get(API, res => console.log(res.statusCode))

console.log("conectando API")
//Nesse caso, o JavaScript vai colocar a https.get() em segundo plano um pouco até ela está pronta, e por isso, vai aparecer primeiro conctando API para depois aparecer o res.statusCode