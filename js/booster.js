const cards = [
    { pers: "Harry Potter", image: "./Card/harrypotter.png", cardnbr: 1, resume: "TUTU TUTUTU TUTU TU tu es un sorcier Harry.", rareté: "SSR" },
    { pers: "Hermione Granger", image: "./Card/hermione.png", cardnbr: 2, resume: "La crack ultime. D'après les rumeurs elle est aussi radiant sur Valorant.", rareté: "SR" },
    { pers: "Ron Weasley", image: "./Card/ron.png", cardnbr: 3, resume: "Eh mais t'es tout le temps là toi.", rareté: "SR" },
    { pers: "Ginny Weasley", image: "./Card/ginny.png", cardnbr: 4, resume: "L'heureuse élue qui a chamboulé le coeur d'Harry.", rareté: "SR" },
    { pers: "Neuville Londubat", image: "./Card/neuville.png", cardnbr: 5, resume: "L'imbécile de service, le boosted sur LoL, le bambi sur Fortnite.", rareté: "R" },
    { pers: "Finnigan Seamus", image: "./Card/finnegan.png", cardnbr: 6, resume: "Il fait plein de trucs mais c'est un random je crois bien.", rareté: "R" },
    { pers: "Lavande Brawn", image: "./Card/lavande.png", cardnbr: 7, resume: "L'ex de Ron, voilà c'est tout.", rareté: "SR" },
    { pers: "Drago Malfoy", image: "./Card/drago.png", cardnbr: 8, resume: "Vilaine canaille prétentieuse, figure emblématique de Serpentard.", rareté: "SSR" },
    { pers: "Gregory Goyle", image: "./Card/gregory.png", cardnbr: 9, resume: "Golem de pierre personnel de Drago.", rareté: "R" },
    { pers: "Vincent Crabbe", image: "./Card/vincent.png", cardnbr: 10, resume: "Golem de terre personnel de Drago.", rareté: "R" },
    { pers: "Theodore Nott", image: "./Card/theodore.png", cardnbr: 11, resume: "Le contrebandier de l'école.", rareté: "SR" },
    { pers: "Blaise Zabini", image: "./Card/blaise.png", cardnbr: 12, resume: "Sacré BG bressom en mode Sasuke.", rareté: "SR" },
    { pers: "Millicent Bulstrode", image: "./Card/millecent.png", cardnbr: 13, resume: "Palmarès: a déjà fait un pur 1v1 contre Hermione.", rareté: "SR" },
    { pers: "Pansy Parkinson", image: "./Card/pansy.png", cardnbr: 14, resume: "Si tu cherches la plus pénible de la licence: la voilà.", rareté: "SR" },
    { pers: "Hannah Abbot", image: "./Card/hannah.png", cardnbr: 15, resume: "OG Poufsouffle ça force le respect.", rareté: "SSR" },
    { pers: "Susan Bones", image: "./Card/susan.png", cardnbr: 16, resume: "Voldemort a raffalé sa famille.", rareté: "SR" },
    { pers: "Justin Finch-Fletchley", image: "./Card/justin.png", cardnbr: 17, resume: "Pétrifié le bougito.", rareté: "SR" },
    { pers: "Wayne Hopkins", image: "./Card/wayne.png", cardnbr: 18, resume: "Un random de chez Poufsouffle", rareté: "R" },
    { pers: "Megan Jones", image: "./Card/megan.png", cardnbr: 19, resume: "Une random de chez Poufsouffle", rareté: "R" },
    { pers: "Ernie Macmillan", image: "./Card/ernie.png", cardnbr: 20, resume: "Il a eu 0/20 avec le serpent.", rareté: "SR" },
    { pers: "Cedric Diggory", image: "./Card/cedric.png", cardnbr: 21, resume: "RIP, en plus il avait une copine...", rareté: "SR" },
    { pers: "Cho Chang", image: "./Card/cho.png", cardnbr: 22, resume: "L'ex de Harry, mais avant ça, veuve à 20 ans c'est chaud...", rareté: "SSR" },
    { pers: "Terry Boot", image: "./Card/terry.png", cardnbr: 23, resume: "La poucave qui retourne sa veste, honteux...", rareté: "SR" },
    { pers: "Mandy Brocklehurst", image: "./Card/mandy.png", cardnbr: 24, resume: "Le nom de famille...normal elle a pas de lore.", rareté: "R" },
    { pers: "Padma Patil", image: "./Card/padma.png", cardnbr: 25, resume: "La cavalière de Ron en 4e année.", rareté: "SR" },
    { pers: "Lisa Turpin", image: "./Card/lisa.png", cardnbr: 26, resume: "Une random de chez Serdaigle", rareté: "R" },
    { pers: "Davies Roger", image: "./Card/davies.png", cardnbr: 27, resume: "Une coupe t'as peur heureusement ça joue au Quidditch.", rareté: "SR" },
    { pers: "Luna Lovegood", image: "./Card/luna.png", cardnbr: 28, resume: "Un peu cheloue mais pas méchante.", rareté: "SR" },
    { pers: "Albus Dumbledore", image: "./Card/dumbledore.png", cardnbr: 29, resume: "Légende du club + crackito + poussiéreux + RIP + 1v9 report bot for feeding.", rareté: "SSR" },
    { pers: "Severus Rogue", image: "./Card/severus.png", cardnbr: 30, resume: "Méchant puis gentil, j'ai rien capté à l'histoire.", rareté: "SSR" },
    { pers: "Remus Lupin", image: "./Card/remus.png", cardnbr: 31, resume: "Le prof de self-defense euh... de défense contre les forces du mal.", rareté: "SR" },
    { pers: "Minerva McGonagall", image: "./Card/minerva.png", cardnbr: 32, resume: "Prof de métamorphose et directrice de Poudlard, légende du club.", rareté: "SSR" },
    { pers: "Dolores Ombrage", image: "./Card/dolores.png", cardnbr: 33, resume: "La relou du ministère de la magie.", rareté: "R" },
    { pers: "Horace Slughorn", image: "./Card/horace.png", cardnbr: 34, resume: "Le prof de potions, askip il travaille chez fortnite maintenant.", rareté: "SR" },
    { pers: "Rolanda Bibine", image: "./Card/rolanda.png", cardnbr: 35, resume: "La prof avec les balais qui volent.", rareté: "SR" },
    { pers: "Cape d'invisibilité", image: "./Card/cape.png", cardnbr: 36, resume: "On la voit pas mais elle est vraiment là.", rareté: "UR" },
    { pers: "Pierre philosophale", image: "./Card/pierre.png", cardnbr: 37, resume: "C'est juste un caillou.", rareté: "UR" },
    { pers: "Voldemort", image: "./Card/voldemort.png", cardnbr: 38, resume: "Pas de nez, pas de chocolat...", rareté: "UR" },
    { pers: "Hagrid Rubeus", image: "./Card/hagrid.png", cardnbr: 39, resume: "Le mec là... mais siii celui qui habite dans la forêt!", rareté: "UR" },
    { pers: "Harry Potter Shiny", image: "./Card/shiny.png", cardnbr: 40, resume: "Harry après le vaccin.", rareté: "UR" },
    { pers: "Pikachu", image: "./Card/pikachu.png", cardnbr: 41, resume: "Il s'est perdu à Poudlard...", rareté: "LR" }
];

const randomrarete = [ //définit la rareté d'une carte
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1
];
// position + 1 des cartes correspondantes dans le tableau
const tabR = [5, 6, 9, 10, 18, 19, 24, 26, 33];
const tabSR = [2, 3, 4, 7, 11, 12, 13, 14, 16, 17, 20, 21, 23, 25, 27, 28, 31, 34, 35];
const tabSSR = [1, 8, 15, 23, 29, 30, 32];
const tabUR = [36, 37, 38, 39, 40];

console.log(randomrarete);
document.addEventListener("DOMContentLoaded", function () {
    const boosterContainer = document.querySelector('.booster');

    randomrarete.forEach(jcp => {
        if (jcp > 0 && jcp < 51) {
            const randomR = Math.floor(Math.random() * 9);
            const boosterImage = document.createElement('img');
            boosterImage.src = cards[tabR[randomR] - 1].image;
            boosterContainer.appendChild(boosterImage);

        } else if (jcp > 50 && jcp < 81) {
            const randomSR = Math.floor(Math.random() * 19);
            const boosterImage = document.createElement('img');
            boosterImage.src = cards[tabSR[randomSR] - 1].image;
            boosterContainer.appendChild(boosterImage);

        } else if (jcp > 80 && jcp < 95) {
            const randomSSR = Math.floor(Math.random() * 7);
            const boosterImage = document.createElement('img');
            boosterImage.src = cards[tabSSR[randomSSR] - 1].image;
            boosterContainer.appendChild(boosterImage);

        } else if (jcp > 94 && jcp < 100) {
            const randomUR = Math.floor(Math.random() * 5);
            const boosterImage = document.createElement('img');
            boosterImage.src = cards[tabUR[randomUR] - 1].image;
            boosterContainer.appendChild(boosterImage);

        } else if (jcp == 100) {
            const boosterImage = document.createElement('img');
            boosterImage.src = cards[40].image;
            boosterContainer.appendChild(boosterImage);
        }
    });
});

let boosterbutton = document.querySelector(".boosterbutton");

boosterbutton.addEventListener('click', function () {
    boosterbutton.classList.remove("actif");
});