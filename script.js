
/* 
// tableaux données élèves
const students = [
    {
        name: "Thomas Nigon",
        quote: "If it bleeds, we can kill it.",
        linkedin: "https://www.linkedin.com/in/thomas-nigon/",
        github: "https://github.com/Thomas-Nigon";
        picture: URL("assets/Thomas.jpeg")
    };
{
    name: "Hélène Rampelberg",
        quote: "Don't worry, be happy!",
            linkedin: "",
                github: "https://github.com/HeleneRamp"
    picture: URL("assets/Helene.jpeg")
};
{
    name: "Vincent Rousseaux",
        quote: "Mistakes are a fact of life. It is the response to the error that counts.",
            linkedin: "https://www.linkedin.com/in/vincent-rousseaux-500211172/",
                github: "https://github.com/VincentRssx";
    picture: URL("assets/Vincent.jpeg")
};
{
    name: "Robin Fantino",
        quote: "Viens, on va prendre une frite.",
            linkedin: "http://www.linkedin.com/in/robin-fantino-b351b625b",
                github: "https://github.com/NemoOnTheNet";
    picture: URL("assets/Robin.jpeg")
};
{
    name: "Frédéric Ticon",
        quote: "Qui part à fond finit comme un con.",
            linkedin: "http://www.linkedin.com/",
                github: "https://github.com/";
    picture: URL("assets/Fred.jpeg")
};
{
    name: "Farid Zian",
        quote: "Salut c'est Farid",
            linkedin: "http://www.linkedin.com/",
                github: "https://github.com/";
    picture: URL("assets/Farid.jpeg")
};
{
    name: "Marie Saillard",
        quote: "Ce qui ne me tue pas me rend plus fort.",
            linkedin: "http://www.linkedin.com/",
                github: "https://github.com/";
    picture: URL("assets/Marie.jpeg")
};
{
    name: "Florence Buchelet",
        quote: "If you want to lift yourself up, lift up someone else.",
            linkedin: "https://www.linkedin.com/in/florence-buchelet-928a7a228/",
                github: "https://github.com/FlorenceBuchelet";
    picture: URL("assets/Florence.jpeg")
};

] */


/* 
//tentative échouée de génération auto des cards
function updateCard(studentName, studentPicture) {
    const name = document.querySelectorAll(h2);
    const photo = document.querySelectorAll(".photo");
    name.innerHTML = `${studentName}`;
    photo.src = `url(${studentPicture})`;
}

for (let i = 0; i < students.length; i++) {
    updateCard(students[i].name, students[i].picture);
} */



/*animation on click*/


const flipOnClick = document.querySelectorAll('.polaroid');

flipOnClick.forEach(function (flip) {
    flip.addEventListener('click', function () {
        flip.classList.add("flipping");
    });
});


flipOnClick.forEach(function (unflip) {
    unflip.addEventListener('mouseout', function () {
        unflip.classList.remove("flipping");
    });
});

