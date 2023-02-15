//API to create a new Account
async function APICreateAccount(param) {
    //let url = `http://localhost:5271/api/User?=${firstName}&lastName=${lastName}&username=${username}&password=${password}`;
    let url = 'http://localhost:5271/api/User';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 0,
            firstname: param.firstName,
            lastname: param.lastName,
            username: param.username,
            password: param.password,
        }),
    }).catch((error) => console.error(error));
}

//API to login
async function APICheckLoginUser(userN, passW) {
    let url = 'https://localhost:7047/api/Login/' + userN + '/' + passW;
    let response = await fetch(url);
    let user = await response.json();

    if (user.id) {
        console.log('Correct info');
        return user;
    }
    return false;
}

async function UserExist(username){
    let url = 'http://localhost:5271/api/Login/' + username;
    let response = await fetch(url);

    if(response.statusText === "OK"){
        return true;
    }
    return false;
  
}

export { APICheckLoginUser, APICreateAccount, UserExist };


