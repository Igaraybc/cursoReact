/*import axios from "axios";

axios
  .get("https://api.github.com/users/igaraybc")
  .then((res) => {
    const user = res.data;
    return axios.get(user.repos_url);
  })
  .then((repos) => console.log(repos.data)) esse then está relacionado com o return da promise anterior ou seja axios.get(user.repos_url)
  .catch((error) => console.log(error)); 
*/

/*
  Promise All = lista de promessas que são disparadas ao mesmo tempo, em paralelo

    import axios from "axios";

    Promise.all([
        axios.get("https://api.github.com/users/igaraybc"),
        axios.get("https://api.github.com/users/igaraybc/repos")
    ])
    .then((responses) => {
        console.log(responses[0].data.login);
        console.log(responses[1].data.length);
    })
    .catch((err) => console.log(err.message));

    * no then vamos ter uma lista de responses com todas as respostas da lista de promessas
    * Catch vai pegar o erro em qualquer promise
*/