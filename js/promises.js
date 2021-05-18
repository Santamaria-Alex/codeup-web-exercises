// function getGithubUsernames(userName) {
//     return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}})
// .then(response => response.json().then(data => {
//         console.log(data);
//         var latestPush = data[0].created_at
//         let date = new Date(latestPush);
//
//         console.log('Last pushed on: ' + date.toString());
//     }))
// }
// getGithubUsernames("Santamaria-Alex");
//
//
// function wait (num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, num);
//     });
// }
//
// wait(3000).then(() => console.log('whatever'));


const userLastCommit = userName => {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'GITHUB_ACCESS_TOKEN'}}).then(resp => resp.json())
        .then(data => {
            console.log(data);
            let lastPush;
            for (let event of data){
                if (event.type === 'PushEvent'){
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
            console.log('Last pushed on: ' + lastPush);
        });
}

userLastCommit("Santamaria-Alex");


const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${ms/1000} second(s) have passed.`);
        }, ms);
    })
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));

























