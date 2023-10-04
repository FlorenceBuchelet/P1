
// tableaux données élèves
const students = [
    {
        name: "Thomas Nigon",
        quote: "« If it bleeds, we can kill it. »",
        linkedin: "https://www.linkedin.com/in/thomas-nigon/",
        github: "https://github.com/Thomas-Nigon",
        picture: "assets/photos/blue/thomas.jpeg",
        crew: "blue"
    },
    {
        name: "Hélène Rampelberg",
        quote: "« Don't worry, be happy! »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/HeleneRamp",
        picture: "assets/photos/blue/helene.jpeg",
        crew: "blue"
    },
    {
        name: "Vincent Rousseaux",
        quote: "« Mistakes are a fact of life. It is the response to the error that counts. »",
        linkedin: "https://www.linkedin.com/in/vincent-rousseaux-500211172/",
        github: "https://github.com/VincentRssx",
        picture: "assets/photos/blue/vincent.jpeg",
        crew: "blue"
    },
    {
        name: "Robin Fantino",
        quote: "« Viens, on va prendre une frite. »",
        linkedin: "http://www.linkedin.com/in/robin-fantino-b351b625b",
        github: "https://github.com/NemoOnTheNet",
        picture: "assets/photos/blue/Robin.jpeg",
        crew: "blue"
    },
    {
        name: "Frédéric Ticon",
        quote: "« Qui part à fond finit comme un con. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/TICONFRED27",
        picture: "assets/photos/blue/Fred.jpeg",
        crew: "blue"
    },
    {
        name: "Farid Zian",
        quote: "« Salut c'est Farid »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/blue/Farid.jpeg",
        crew: "blue"
    },
    {
        name: "Marie Saillard",
        quote: "« Ce qui ne nous tue pas nous rend plus fort. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/blue/Marie.jpeg",
        crew: "blue"
    },
    {
        name: "Florence Buchelet",
        quote: "« If you want to lift yourself up, lift up someone else. »",
        linkedin: "https://www.linkedin.com/in/florence-buchelet-928a7a228/",
        github: "https://github.com/FlorenceBuchelet",
        picture: "assets/photos/blue/Florence.jpeg",
        crew: "blue"
    },

    /*crew yellow*/
    {
        name: "Imbrasse Romain",
        quote: "« Rien n'est sérieux en ce bas monde que le rire. »",
        linkedin: "https://www.linkedin.com/in/romain-imbrasse-9480ab1ba/",
        github: "https://github.com/Romlion",
        picture: "assets/test polaroid.jpg",
        crew: "yellow"
    },
    {
        name: "Pierre Adrien Gouillart",
        quote: "« Mundi placet et spiritus minima. »",
        linkedin: "https://www.linkedin.com/in/pierre-adrien-gouillart",
        github: "https://github.com/pagouillart",
        picture: "assets/test polaroid.jpg",
        crew: "yellow"
    },
    {
        name: "Lucas Merino",
        quote: "« I prefer not to speak. »",
        linkedin: "https://www.linkedin.com/in/lucasmerino10/",
        github: "https://github.com/LucasMerino10",
        picture: "assets/test polaroid.jpg",
        crew: "yellow"
    },
    {
        name: "Cyril Daburon",
        quote: "« Je comprends ici ce qu’on appelle gloire : le droit d’aimer sans mesure. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/yellow/Pierre-Adrien.jpeg",
        crew: "yellow"
    },
    {
        name: "Xavier Lobez",
        quote: "« Papy fait de la résistance ! »",
        linkedin: "https://www.linkedin.com/in/xavier-lobez-892501227/",
        github: "https://github.com/Bravax",
        picture: "assets/test polaroid.jpg",
        crew: "yellow"
    },
    {
        name: "Julien Ozarowski",
        quote: "« Le gras c’est la vie... et encore plus quand c’est du fromage fondu. »",
        linkedin: "https://www.linkedin.com/in/julien-ozarowski",
        github: "https://github.com/JulienOza",
        picture: "assets/test polaroid.jpg",
        crew: "yellow"
    },
    {
        name: "Sébastien Samyn",
        quote: "« Je suis adroit de la main gauche et je suis gauche de la main droite. »",
        linkedin: "https://www.linkedin.com/in/sebastien-samyn",
        github: "https://github.com/",
        picture: "assets/photos/yellow/Sebastien.jpeg",
        crew: "yellow"
    },
    {
        name: "Rayane Moussaoui",
        quote: "« C’est pas faux. »",
        linkedin: "#",
        github: "https://github.com/Rayane0823",
        picture: "assets/test polaroid.jpg",
        crew: "yellow"
    },
  
     /*crew Data*/
    {
        name: "Caroline Rouvillain",
        quote: "« Nous savons bien que notre action n’est qu’une goutte d’eau dans l’océan, mais sans notre action cette goute manquerait. »",
        linkedin: "https://www.linkedin.com/in/caroline-rouvillain-65b7a3160/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        crew: "data"
    },
    {
        name: "Gwenaëlle Deschamps",
        quote: "« Quand on vise la médiocrité, c’est elle qui vous atteint. »",
        linkedin: "https://www.linkedin.com/in/gwena%C3%ABlle-deschamps-419772138/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        crew: "data"
    },
    {
        name: "Julien Billardon",
        quote: "« Nous ne nous arrêtons pas de jouer parce que nous vieillissons, mais nous vieillissons parce que nous nous arrêtons de jouer. »",
        linkedin: "https://www.linkedin.com/in/julien-billardon-185476158/",
        github: "https://github.com/Ju-stASimpleName",
        picture: "assets/test polaroid.jpg",
        crew: "data"
    },
    {
        name: "Félix Depret",
        quote: "« Que peut le bœuf face à un lion ensanglanté. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/data/Dorothée.jpeg",
        crew: "data"
    },
    {
        name: "Grégoire Lozach",
        quote: "« La vie serait une comédie bien agréable, si l'on n'y jouait pas un rôle. »",
        linkedin: "https://www.linkedin.com/in/gr%C3%A9goire-lozac-h-1861b985/",
        github: "https://github.com/",
        picture: "assets/photos/data/Felix.jpeg",
        crew: "data"
    },
    {
        name: "Dorothée Catry",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/data/Gregoire.jpeg",
        crew: "data"
    }
];





// Génération de cards


function createCards(picture, name, quote, github, linkedin) {

    //touch ul
    const unorderedList = document.querySelector("ul");

    // créer li "card"
    const card = document.createElement("li");
    card.classList.add("card");
    unorderedList.appendChild(card);

    // div "polaroid"
    const pola = document.createElement("div");
    pola.classList.add("polaroid");
    card.appendChild(pola);

    // créer le corps div class="innerPolaroid"

    const innerPola = document.createElement("div");
    innerPola.classList.add("innerPolaroid");
    pola.appendChild(innerPola);

    // créer front div class="frontPolaroid"

    const frontPola = document.createElement("div")
    frontPola.classList.add("frontPolaroid");
    innerPola.appendChild(frontPola);

    // créer l'image img class="photo"

    const image = document.createElement("img")
    image.src = picture;
    image.alt = "the student's polaroid portrait"
    image.classList.add("photo");
    frontPola.appendChild(image);

    // créer nom tag="h2"
    const nameFront = document.createElement("h2")
    nameFront.innerHTML = name;
    frontPola.appendChild(nameFront);

    //créer back div class="backPolaroid"
    const backPola = document.createElement("div");
    backPola.classList.add("backPolaroid");
    innerPola.appendChild(backPola);

    // créer le nom au dos tag="h3"
    const nameBack = document.createElement("h3")
    nameBack.innerHTML = name;
    backPola.appendChild(nameBack);

    // créer la citation tag="p"
    const citation = document.createElement("p")
    citation.innerHTML = quote;
    backPola.appendChild(citation);

    //créer le lien github a class="github" (+img class="verso")
    const gitHubLink = document.createElement("a");
    gitHubLink.href = github;
    gitHubLink.classList.add("github");
    const gitHubLogo = document.createElement("img");
    gitHubLogo.src = "assets/logo-github.png";
    gitHubLogo.alt = "Logo GitHub";
    gitHubLogo.classList.add("verso");
    gitHubLink.appendChild(gitHubLogo);
    backPola.appendChild(gitHubLink);

    // créer le lien linkedin class="linkedin"
    const linkedinLink = document.createElement("a");
    linkedinLink.href = linkedin;
    linkedinLink.classList.add("linkedin");
    const linkedinLogo = document.createElement("img");
    linkedinLogo.src = "assets/logo-linkedin.avif";
    linkedinLogo.alt = "Logo LinkedIn";
    linkedinLogo.classList.add("verso");
    linkedinLink.appendChild(linkedinLogo);
    backPola.appendChild(linkedinLink);

    // créer la deco img class="deco"
    const deco = document.createElement("img")
    deco.src = "assets/test tape.jpg";
    deco.alt = "html css and javascript logos"
    deco.classList.add("deco");
    card.appendChild(deco);
}


// appeler la function


// par défaut toute la promo + changer titre
const changeTitle = document.querySelector("h1");
/*
changeTitle.innerHTML = "Wild Code School - Lille, Septembre 2023"

 for (let i = 0; i < crewData.length; i++) {
  //  filtre
    createCards(crewData[i].picture, crewData[i].name, crewData[i].quote, crewData[i].github, crewData[i].linkedin);
}
for (let i = 0; i < crewYellow.length; i++) {
    createCards(crewYellow[i].picture, crewYellow[i].name, crewYellow[i].quote, crewYellow[i].github, crewYellow[i].linkedin);
} 
*/
for (let i = 0; i < students.length; i++) {
    changeTitle.innerHTML = "Web Developer (crew blue) - Lille, Septembre 2023"
    createCards(students[i].picture, students[i].name, students[i].quote, students[i].github, students[i].linkedin);
}

// si click crew data 1/ effacer ce qui existe 2/ renouveller les cards 3/ changer titre

/* const deleteCards = document.querySelector("ul");
deleteCards.addEventListener('click', function () {
    deleteCards.classList.add("visibility");
}); 

const clickData = document.querySelector(".Crew-data");

clickData.addEventListener('click', function () {
    changeTitle.innerHTML = "Data Analyst - Lille, Septembre 2023"
    for (let i = 0; i < crewData.length; i++) {
        createCards(crewData[i].picture, crewData[i].name, crewData[i].quote, crewData[i].github, crewData[i].linkedin);
    }
});

// si click crew yellow 1/effacer ce qui existe 2/ renouveller les cards 3/ changer titre
const clickYellow = document.querySelector(".Crew-Yellow");

clickYellow.addEventListener('click', function () {
    changeTitle.innerHTML = "Web Developer (crew yellow) - Lille, Septembre 2023"
    for (let i = 0; i < crewYellow.length; i++) {
        createCards(crewYellow[i].picture, crewYellow[i].name, crewYellow[i].quote, crewYellow[i].github, crewYellow[i].linkedin);
    }
});

// si click crew blue 1/effacer ce qui existe 2/ renouveller les cards 3/ changer titre
const clickBlue = document.querySelector(".Crew-bleu");

clickBlue.addEventListener('click', function () {
    changeTitle.innerHTML = "Web Developer (crew blue)- Lille, Septembre 2023"
    for (let i = 0; i < crewBlue.length; i++) {
        createCards(crewBlue[i].picture, crewBlue[i].name, crewBlue[i].quote, crewBlue[i].github, crewBlue[i].linkedin);
    }
});*/



/*animation on click*/


const flipOnClick = document.querySelectorAll('.polaroid');

flipOnClick.forEach(function (flip) {
    flip.addEventListener('click', function () {
        flip.classList.add("flipping");
    });
});


flipOnClick.forEach(function (unflip) {
    unflip.addEventListener('mouseleave', function () {
        unflip.classList.remove("flipping");
    });
});

// animation navbar

const menuBurger= document.querySelector(".menu-burger")
const navbar1 = document.querySelector(".Crew-data")

menuBurger.addEventListener('click', () => {
    navbar1.classList.toggle('mobile-menu');
})

const navbar2 = document.querySelector(".Crew-Yellow")

menuBurger.addEventListener('click', () => {
    navbar2.classList.toggle('mobile-menu');
})

const navbar3 = document.querySelector(".Crew-bleu")

menuBurger.addEventListener('click', () => {
    navbar3.classList.toggle('mobile-menu');
})



