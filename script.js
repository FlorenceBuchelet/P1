
// tableaux données élèves
const students = [
    {
        name: "Thomas Nigon",
        quote: "« If it bleeds, we can kill it. »",
        linkedin: "https://www.linkedin.com/in/thomas-nigon/",
        github: "https://github.com/Thomas-Nigon",
        picture: "assets/photos/thomas.jpeg",
        deco: "assets/logos/Agile.png",
        crew: "blue"
    },
    {
        name: "Hélène Rampelberg",
        quote: "« Don't worry, be happy! »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/HeleneRamp",
        picture: "assets/photos/helene.jpeg",
        deco: "assets/logos/logosHtmlCss.png",
        crew: "blue"
    },
    {
        name: "Vincent Rousseaux",
        quote: "« Mistakes are a fact of life. It is the response to the error that counts. »",
        linkedin: "https://www.linkedin.com/in/vincent-rousseaux-500211172/",
        github: "https://github.com/VincentRssx",
        picture: "assets/photos/vincent.jpeg",
        deco: "assets/logos/logoCli.png",
        crew: "blue"
    },
    {
        name: "Robin Fantino",
        quote: "« Viens, on va prendre une frite. »",
        linkedin: "http://www.linkedin.com/in/robin-fantino-b351b625b",
        github: "https://github.com/NemoOnTheNet",
        picture: "assets/photos/Robin.jpeg",
        deco: "assets/logos/Logo-JS.png",
        crew: "blue"
    },
    {
        name: "Frédéric Ticon",
        quote: "« Qui part à fond finit comme un con. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/TICONFRED27",
        picture: "assets/photos/Fred.jpeg",
        deco: "assets/logos/react-logo.png",
        crew: "blue"
    },
    {
        name: "Farid Zian",
        quote: "« Salut c'est Farid »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/Farid.jpeg",
        deco: "assets/logos/SQL.png",
        crew: "blue"
    },
    {
        name: "Marie Saillard",
        quote: "« Ce qui ne me tue pas me rend plus fort. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/photos/Marie.jpeg",
        deco: "assets/logos/logoGit.png",
        crew: "blue"
    },
    {
        name: "Florence Buchelet",
        quote: "« If you want to lift yourself up, lift up someone else. »",
        linkedin: "https://www.linkedin.com/in/florence-buchelet-928a7a228/",
        github: "https://github.com/FlorenceBuchelet",
        picture: "assets/photos/Florence.jpeg",
        deco: "assets/logos/logoNode.png",
        crew: "blue"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoNumpy.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoPHP.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoPython.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoSymfony.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/Agile.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/css-logo.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/htm-logo.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore le dev, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/Logo-JS.png",
        crew: "yellow"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/react-logo.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/SQL.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/Agile.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoNumpy.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoPHP.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoPython.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/logoSymfony.png",
        crew: "data"
    },
    {
        name: "Name Lastname",
        quote: "« J'adore la data, les chips et les petits chats. »",
        linkedin: "http://www.linkedin.com/",
        github: "https://github.com/",
        picture: "assets/test polaroid.jpg",
        deco: "assets/logos/SQL.png",
        crew: "data"
    }
];




// Génération de cards


function createCards(picture, name, quote, github, linkedin, decoration) {

    // remove ancienne liste

    //créer ul

    /*     const sectionPolaroids = document.querySelector("#polaroids");
        const unorderedList = document.createElement("ul");
        sectionPolaroids.appendChild(unorderedList);  */

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
    const linkedinLogo = document.createElement("img");
    linkedinLogo.src = "assets/logo-linkedin.avif";
    linkedinLogo.alt = "Logo LinkedIn";
    linkedinLogo.classList.add("verso");
    linkedinLink.appendChild(linkedinLogo);
    backPola.appendChild(linkedinLink);

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


    // créer la deco img class="deco"
    const deco = document.createElement("img");
    deco.src = decoration;
    deco.alt = "HTML CSS or Javascript logos";
    deco.classList.add("deco");
    card.appendChild(deco);
}



// appeler la function


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

const menuBurger1 = document.querySelector(".menu-burger")
const navbar1 = document.querySelector(".Crew-data")

menuBurger1.addEventListener('click', () => {
    navbar1.classList.toggle('mobile-menu');
})
const menuBurger2 = document.querySelector(".menu-burger")
const navbar2 = document.querySelector(".Crew-Yellow")

menuBurger2.addEventListener('click', () => {
    navbar2.classList.toggle('mobile-menu');
})
const menuBurger = document.querySelector(".menu-burger")
const navbar = document.querySelector(".Crew-bleu")

menuBurger.addEventListener('click', () => {
    navbar.classList.toggle('mobile-menu');
})

