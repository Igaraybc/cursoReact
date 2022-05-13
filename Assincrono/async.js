const promessa = new Promise((resolve, reject) => {
    return resolve('ok')
})

async function start(){
    try{
        const result = await promessa
        console.log(result) 
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log("Finalmente!")
    }
}

start()


/*
==> Async e await com fetch 

async function start() {
  const reponse = await fetch("https://api.github.com/users/igaraybc");
  const user = await reponse.json();
  const reposResponse = await fetch(user.repos_url);
  const repos = await reposResponse.json();
  console.log(repos);
}

start().catch((e) => console.log(e));

PODEMOS UTILIZAR OS DOIS:

async function start() {
  const user = await fetch("https://api.github.com/users/igaraybc").then(r => r.json());
  const repos = await fetch(user.repos_url).then(r => r.json());
  console.log(repos);
}

*/

/* Axios com await e async 

async function start() {
    try{
        const user = await axios.get(<url>);
        const repos = await axios.get(user.data.repos_url);
        console.log(repos.data);
    }
    catch(e){
        console.log(e)
    }
}

*/