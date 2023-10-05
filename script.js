
// tableaux données élèves
const students = [
    {
        name: "Thomas Nigon",
        quote: "«&nbsp;If it bleeds, we can kill it.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/thomas-nigon/",
        github: "https://github.com/Thomas-Nigon",
        picture: "assets/photos/blue/thomas.jpeg",
        deco: "assets/logos/Agile.png",
        crew: "blue"
    },
    {
        name: "Hélène Rampelberg",
        quote: "«&nbsp;Don't worry, be happy!&nbsp;»",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/HeleneRamp",
        picture: "assets/photos/blue/helene.jpeg",
        deco: "assets/logos/logosHtmlCss.png",
        crew: "blue"
    },
    {
        name: "Vincent Rousseaux",
        quote: "«&nbsp;Mistakes are a fact of life. It is the response to the error that counts.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/vincent-rousseaux-500211172/",
        github: "https://github.com/VincentRssx",
        picture: "assets/photos/blue/vincent.jpeg",
        deco: "assets/logos/logoCli.png",
        crew: "blue"
    },
    {
        name: "Robin Fantino",
        quote: "«&nbsp;Viens, on va prendre une frite.&nbsp;»",
        linkedin: "http://www.linkedin.com/in/robin-fantino-b351b625b",
        github: "https://github.com/NemoOnTheNet",
        picture: "assets/photos/blue/Robin.jpeg",
        deco: "assets/logos/Logo-JS.png",
        crew: "blue"
    },
    {
        name: "Frédéric Ticon",
        quote: "«&nbsp;Qui part à fond finit comme un con.&nbsp;»",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/TICONFRED27",
        picture: "assets/photos/blue/Fred.jpeg",
        deco: "assets/logos/react-logo.png",
        crew: "blue"
    },
    {
        name: "Farid Zian",

        quote: "«&nbsp;Le bonheur, ce n'est pas de faire ce que l'on veut, mais de vouloir ce que l'on fait.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/farid-zian-a81a2848/",
        github: "https://github.com/Farid-Zian",
        picture: "assets/photos/blue/Farid.jpeg",
        deco: "assets/logos/SQL.png",
        crew: "blue"
    },
    {
        name: "Marie Saillard",
        quote: "«&nbsp;Ce qui ne nous tue pas nous rend plus fort.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/marie-saillard-014276106/",
        github: "https://github.com/Marie-Sail",
        picture: "assets/photos/blue/Marie.jpeg",
        deco: "assets/logos/logoGit.png",
        crew: "blue"
    },
    {
        name: "Florence Buchelet",
        quote: "«&nbsp;If you want to lift yourself up, lift up someone else.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/florence-buchelet-928a7a228/",
        github: "https://github.com/FlorenceBuchelet",
        picture: "assets/photos/blue/Florence.jpeg",
        deco: "assets/logos/logoNode.png",
        crew: "blue"
    },

    /*crew yellow*/
    {
        name: "Romain Imbrasse",
        quote: "«&nbsp;Rien n'est sérieux en ce bas monde que le rire.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/romain-imbrasse-9480ab1ba/",
        github: "https://github.com/Romlion",
        picture: "assets/photos/yellow/Romain.jpeg",
        deco: "assets/logos/logoCli.png",
        crew: "yellow"
    },
    {
        name: "Pierre Adrien Gouillart",
        quote: "«&nbsp;Mundi placet et spiritus minima.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/pierre-adrien-gouillart",
        github: "https://github.com/pagouillart",
        picture: "assets/photos/yellow/Pierre-Adrien.jpeg",
        deco: "assets/logos/logoGit.png",
        crew: "yellow"
    },
    {
        name: "Lucas Merino",
        quote: "«&nbsp;I prefer not to speak.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/lucasmerino10/",
        github: "https://github.com/LucasMerino10",
        picture: "assets/photos/yellow/Lucas.jpeg",
        deco: "assets/logos/SQL.png",
        crew: "yellow"
    },
    {
        name: "Cyril Daburon",


        quote: "«&nbsp;Je comprends ici ce qu'on appelle gloire : le droit d'aimer sans mesure.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/cyril-daburon",
        github: "https://github.com/Cyrildab",
        picture: "assets/photos/yellow/cyril.jpeg",
        deco: "assets/logos/logoNode.png",
        crew: "yellow"
    },
    {
        name: "Xavier Lobez",
        quote: "«&nbsp;Papy fait de la résistance&nbsp;!&nbsp;»",
        linkedin: "https://www.linkedin.com/in/xavier-lobez-892501227/",
        github: "https://github.com/Bravax",
        picture: "assets/photos/yellow/Xavier.jpeg",
        deco: "assets/logos/Agile.png",
        crew: "yellow"
    },
    {
        name: "Julien Ozarowski",
        quote: "«&nbsp;Le gras c'est la vie... et encore plus quand c'est du fromage fondu.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/julien-ozarowski",
        github: "https://github.com/JulienOza",
        picture: "assets/test polaroid.jpg" /*"assets/photos/yellow/Julien.jpeg"*/,
        deco: "assets/logos/css-logo.png",
        crew: "yellow"
    },
    {
        name: "Sébastien Samyn",
        quote: "«&nbsp;Je suis adroit de la main gauche et je suis gauche de la main droite.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/sebastien-samyn",
        github: "https://github.com/",
        picture: "assets/photos/yellow/Sebastien.jpeg",
        deco: "assets/logos/react-logo.png",
        crew: "yellow"
    },
    {
        name: "Rayane Moussaoui",
        quote: "«&nbsp;C'est pas faux.&nbsp;»",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/Rayane0823",
        picture: "assets/photos/yellow/Rayan.jpeg",
        deco: "assets/logos/logosHtmlCss.png",
        crew: "yellow"
    },
    {
        name: "Matthieu Thierry",
        quote: " La connaissance est le pouvoir :)",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/ItsMatDev",
        picture: "assets/photos/yellow/Mathieu.jpeg",
        deco: "assets/logos/Logo-JS.png",
        crew: "yellow"
    },

    /*crew Data*/

    {
        name: "Caroline Rouvillain",
        quote: "«&nbsp;Nous savons bien que notre action n'est qu'une goutte d'eau dans l'océan, mais sans notre action cette goute manquerait.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/caroline-rouvillain-65b7a3160/",
        github: "https://github.com/",
        picture: "assets/photos/data/Caroline.jpeg",
        deco: "assets/logos/Agile.png",
        crew: "data"
    },
    {
        name: "Gwenaëlle Deschamps",
        quote: "«&nbsp;Quand on vise la médiocrité, c'est elle qui vous atteint.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/gwena%C3%ABlle-deschamps-419772138/",
        github: "https://github.com/",
        picture: "assets/photos/data/Gwenaelle.jpeg",
        deco: "assets/logos/logoNumpy.png",
        crew: "data"
    },
    {
        name: "Julien Billardon",
        quote: "«&nbsp;Nous ne nous arrêtons pas de jouer parce que nous vieillissons, mais nous vieillissons parce que nous nous arrêtons de jouer.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/julien-billardon-185476158/",
        github: "https://github.com/Ju-stASimpleName",
        picture: "assets/photos/data/Julien.jpeg",
        deco: "assets/logos/logoPHP.png",
        crew: "data"
    },
    {
        name: "Félix Depret",
        quote: "«&nbsp;Que peut le bœuf face à un lion ensanglanté.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/f%C3%A9lix-depret-96612a17a/",
        github: "https://github.com/",
        picture: "assets/photos/data/Felix.jpeg",
        deco: "assets/logos/logoPython.png",
        crew: "data"
    },
    {
        name: "Grégoire Lozach",
        quote: "«&nbsp;La vie serait une comédie bien agréable, si l'on n'y jouait pas un rôle.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/gr%C3%A9goire-lozac-h-1861b985/",
        github: "https://github.com/",
        picture: "assets/photos/data/Gregoire.jpeg",
        deco: "assets/logos/logoSymfony.png",
        crew: "data"
    },
    {
        name: "Dorothée Catry",
        quote: "«&nbsp;J'adore la data, les chips et les petits chats.&nbsp;»",
        linkedin: "https://www.linkedin.com/in/doroth%C3%A9e-catry-3a451a138/",
        github: "https://github.com/DoroChan/Dorothee_C_PEP8",
        picture: "assets/photos/data/Dorothée.jpeg",
        deco: "assets/logos/SQL.png",
        crew: "data"
    }
];





// Génération de cards


function createCards(picture, name, quote, github, linkedin, decoration) {


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

    const frontPola = document.createElement("div");
    frontPola.classList.add("frontPolaroid");
    innerPola.appendChild(frontPola);

    // créer l'image img class="photo"

    const image = document.createElement("img");
    image.src = picture;
    image.alt = "the student's polaroid portrait";
    image.classList.add("photo");
    frontPola.appendChild(image);

    // créer nom tag="h2"
    const nameFront = document.createElement("h2");
    nameFront.innerHTML = name;
    frontPola.appendChild(nameFront);

    //créer back div class="backPolaroid"
    const backPola = document.createElement("div");
    backPola.classList.add("backPolaroid");
    innerPola.appendChild(backPola);

    // créer le nom au dos tag="h3"
    const nameBack = document.createElement("h3");
    nameBack.innerHTML = name;
    backPola.appendChild(nameBack);

    // créer la citation tag="p"
    const citation = document.createElement("p");
    citation.innerHTML = quote;
    backPola.appendChild(citation);

    // créer le lien linkedin class="linkedin"
    const linkedinLink = document.createElement("a");
    linkedinLink.href = linkedin;
    linkedinLink.classList.add("linkedin");
    linkedinLink.setAttribute("target", "_blank");
    const linkedinLogo = document.createElement("img");
    linkedinLogo.src = "assets/logo-linkedin.png";
    linkedinLogo.alt = "Logo LinkedIn";
    linkedinLogo.classList.add("verso");
    linkedinLink.appendChild(linkedinLogo);
    backPola.appendChild(linkedinLink);

    //créer le lien github a class="github" (+img class="verso")
    const gitHubLink = document.createElement("a");
    gitHubLink.href = github;
    gitHubLink.classList.add("github");
    gitHubLink.setAttribute("target", "_blank");
    const gitHubLogo = document.createElement("img");
    gitHubLogo.src = "assets/logo-github.png";
    gitHubLogo.alt = "Logo GitHub";
    gitHubLogo.classList.add("verso");
    gitHubLink.appendChild(gitHubLogo);
    backPola.appendChild(gitHubLink);


    // créer la deco img class="deco"
    const deco = document.createElement("img");
    deco.src = decoration;
    deco.alt = "HTML CSS or Javascript logos";
    deco.classList.add("deco");
    card.appendChild(deco);
}



// filtres


const changeTitle = document.querySelector("h1");

const onlyBlue = students.filter((whichCrew) => whichCrew.crew === "blue");
const onlyYellow = students.filter((whichCrew) => whichCrew.crew === "yellow");
const onlyData = students.filter((whichCrew) => whichCrew.crew === "data");


// liste promo de base

for (let i = 0; i < students.length; i++) {
    changeTitle.innerHTML = "Wild Code School - Lille, Septembre 2023"
    createCards(students[i].picture, students[i].name, students[i].quote, students[i].github, students[i].linkedin, students[i].deco);
}

// function remove list

function removeCards() {
    const sectionPolaroids = document.querySelector("#polaroids");
    const unorderedListRemove = document.querySelector("ul");
    unorderedListRemove.remove();
    const unorderedList = document.createElement("ul");
    sectionPolaroids.appendChild(unorderedList);
}


// refresh logo
const logoWild = document.querySelector(".logo");

logoWild.addEventListener('click', function () {
    location.reload();
});


// appeler la fonction

const clickBlue = document.querySelector(".Crew-bleu");
clickBlue.addEventListener('click', function () {
    removeCards();
    for (let i = 0; i < onlyBlue.length; i++) {
        changeTitle.innerHTML = "Web Developer - Lille, Septembre 2023";
        createCards(onlyBlue[i].picture, onlyBlue[i].name, onlyBlue[i].quote, onlyBlue[i].github, onlyBlue[i].linkedin, onlyBlue[i].deco);
    }
    callFlipOnClick();
});


const clickYellow = document.querySelector(".Crew-Yellow");
clickYellow.addEventListener('click', function () {
    removeCards();
    for (let i = 0; i < onlyYellow.length; i++) {
        changeTitle.innerHTML = "Web Developer - Lille, Septembre 2023"
        createCards(onlyYellow[i].picture, onlyYellow[i].name, onlyYellow[i].quote, onlyYellow[i].github, onlyYellow[i].linkedin, onlyYellow[i].deco);
    }
    callFlipOnClick();
});

const clickData = document.querySelector(".Crew-data");
clickData.addEventListener('click', function () {
    removeCards();
    for (let i = 0; i < onlyData.length; i++) {
        changeTitle.innerHTML = "Data Analyst - Lille, Septembre 2023"
        createCards(onlyData[i].picture, onlyData[i].name, onlyData[i].quote, onlyData[i].github, onlyData[i].linkedin, onlyData[i].deco);
    }
    callFlipOnClick();
});





/*animation flip*/

function callFlipOnClick() {

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
}
callFlipOnClick();







// animation navbar

const menuBurger = document.querySelector(".menu-burger")
const cData = document.querySelector(".Crew-data")
const cYellow = document.querySelector(".Crew-Yellow")
const cBleu = document.querySelector(".Crew-bleu")
const cadrePolaroids = document.querySelector("#polaroids")


menuBurger.addEventListener('click', () => {
    cData.classList.toggle('mobile-menu');
    cYellow.classList.toggle('mobile-menu');
    cBleu.classList.toggle('mobile-menu');
    /*cadrePolaroids.style.borderRadius = "20px 0px 20px 20px";*/

})


// navbar onclick


cData.addEventListener('click', () => {
    cData.style.backgroundColor = "var(--color-fond)";
    cData.style.borderBottom = "3px solid var(--color-fond)"

    cYellow.style.backgroundColor = "var(--color-button)";
    cYellow.style.borderBottom = "3px solid var(--color-border)"

    cBleu.style.backgroundColor = "var(--color-button)";
    cBleu.style.borderBottom = "2px solid var(--color-border) ";

})


cYellow.addEventListener('click', () => {
    cYellow.style.backgroundColor = "var(--color-fond)";
    cYellow.style.borderBottom = "3px solid var(--color-fond)"

    cData.style.backgroundColor = "var(--color-button)";
    cData.style.borderBottom = "3px solid var(--color-border)"

    cBleu.style.backgroundColor = "var(--color-button)";
    cBleu.style.borderBottom = "2px solid var(--color-border) ";

})

cBleu.addEventListener('click', () => {
    cBleu.style.backgroundColor = "var(--color-fond)";
    cBleu.style.borderBottom = "3px solid var(--color-fond)"

    cYellow.style.backgroundColor = "var(--color-button)";
    cYellow.style.borderBottom = "3px solid var(--color-border)"

    cData.style.backgroundColor = "var(--color-button)";
    cData.style.borderBottom = "2px solid var(--color-border) ";

})


/*conteur de click*/

let numberClick = 0

function incrementClick() {
    numberClick++;
    burgerClick();
}


function burgerClick() {
    if (numberClick % 2 === 0) {
        cadrePolaroids.style.borderRadius = "20px";
    }
    else {
        cadrePolaroids.style.borderRadius = "20px 0px 20px 20px";
    }
}


