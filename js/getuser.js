
let token = localStorage.getItem('token');
console.log(token);
if (!token) { 
    window.location.href = 'login.html';
}

fetch('http://localhost:3000/user/', {
    headers: {
        'x-access-token': `${token}`,
    },
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let user = document.querySelector('#infos');
        user.innerHTML += `Welcome ${data.pseudo}
        <h1>${data.pseudo}</h1>
        <p>${data.email}</p>
        <a href="home.html">Home</a>
        `;

    })
    .catch((error) => {
        console.log(error);
    });

