function getGithubUsernames(userName) {
    return fetch('https://api.github.com/users/${userName}', {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})
.then(response => response.json().then(data => {console.log(data)}))
}
getGithubUsernames("Santamaria-Alex").then( users => {return users}).catch(error => console.error(error));