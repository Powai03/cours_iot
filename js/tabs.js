let tabs = document.querySelectorAll(".tabs li");
let contenus = document.querySelectorAll(".contenu div");

tabs.forEach(function(tab) {
    tab.addEventListener('click', function () {
        tabs.forEach(function(tab) { //on suppr actif partout
            tab.classList.remove("actif");
        });

        contenus.forEach(function(contenu) { //on suppr actif partout
            contenu.classList.remove("actif");
        });

        console.log();

        this.classList.add("actif"); //on ajoute actif la ou on clique
        if (this.innerText == 'Gryffondor') { //si contient cdi
            const divAxe = document.querySelector('.gryf'); //on cherche la div cdi
            divAxe.classList.add('actif'); //on lui donne actif
        } 
        else if (this.innerText =='Serpentard') {
            const divAxe = document.querySelector('.serp');
            divAxe.classList.add('actif');
        }
        else if (this.innerText == 'Poufsouffle') {
            const divAxe = document.querySelector('.pouf');
            divAxe.classList.add('actif');
        }
        else if (this.innerText == 'Serdaigle') {
            const divAxe = document.querySelector('.serd');
            divAxe.classList.add('actif');
        }            
    });
});