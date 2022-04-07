// create an array of objects that holds mood image, mood title, message
//use button to iterate over the object and display a random mood
//Reset button to reset app
let generateButton = document.getElementById('generate-button');

let ul = document.getElementById('mood-items');





const generateMood = () => {
    // ul.innerHTML = '';
    // imageDisplayed.innerHTML = '';


    let moodArray = [{
            image: './images/happy-image.jpg',
            name: 'Hey you are happy!',
            message: 'Have a joyful day!'
        },
        {
            image: './images/sad-image.jpg',
            name: 'You look gloomy ...',
            message: "Dont be sad! there must be something great coming your way"
        },
        {
            image: './images/happy-image.jpg',
            name: 'Hey you are happy!',
            message: 'Have a joyful day!'
        },
        {
            image: './images/dance-image.gif',
            name: 'Hey! Great to see you chilling!',
            message: 'Keep dancing!'
        },
        {
            image: './images/angry-image.png',
            name: 'Why you look so mad!',
            message: 'Calm down! Anger is injurious to health!'
        }

    ];
    let randomMood = moodArray[Math.floor(Math.random() * moodArray.length)];
    let mood = Object.values(randomMood);


    let li1 = document.createElement('li');
    li1.innerHTML = `<img src='${mood[0]}' style='width:20rem; margin-top:5rem;'>`
    li1.style.listStyleType = 'none';

    ul.appendChild(li1);

    let li2 = document.createElement('li');
    li2.style.listStyleType = 'none';
    li2.innerHTML = mood[1];
    ul.appendChild(li2);
    let li3 = document.createElement('li');
    li3.style.listStyleType = 'none';
    li3.innerHTML = mood[2];
    ul.appendChild(li3);


}
generateButton.onclick = generateMood;