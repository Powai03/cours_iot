

//creation des cartes par algorythme
function fetchHP() {
    return fetch('https://hp-api.lainocs.fr/characters' )
    .then((response)=> response.json())
}
//affiche les cartes dans la collection et change la face arrière en fonction de la maison
async function displayHP() {
    const data = await fetchHP()
    console.log(data);
    for(let i = 0; i<data.length; i++){
        document.querySelector(".card").innerHTML += `
                <div class="flip-card" onclick="led(this)"> 
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img class="imgcard" src="${data[i].image}"width: 189px;
                            height: 264px;>
                        </div>
                        <div class="flip-card-back house${i}">
                            <h3 class="name"> ${data[i].name}</h3>
                            <h4 class="resume"> ${data[i].role} </h4>
                            <h4 class="resume"> ${data[i].blood} </h4>
                            <h4 class="maison"> ${data[i].house} </h4>
                        </div>
                    </div>
                </div>
                </a>
        `;
        
        const cardElementBack = document.querySelector(`.flip-card-back.house${i}`); //trier les maisons pour avoir des cartes différentes
        if (data[i].house == 'Gryffindor') {
            cardElementBack.classList.add('gryf');
        }else if (data[i].house == 'Slytherin') {
            cardElementBack.classList.add('serp');
        }else if (data[i].house == 'Hufflepuff') {
            cardElementBack.classList.add('pouf');
        }else if (data[i].house == 'Ravenclaw') {
            cardElementBack.classList.add('serd');
        } else {
            cardElementBack.classList.add('other');
        }
    }

}
displayHP();
var slug;
function led(carteled) {
    maison = carteled.querySelector('.maison').textContent;
    console.log(maison);
    fetch("http://localhost:3000/iot/postIot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            Iot: maison,
        }),
    });
}
/* console.log(maison);
fetch("/iot/postIot", {
    
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        Iot: maison,
    }),
}) */