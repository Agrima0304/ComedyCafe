fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const JokeText=jokeData.attachments[0].text;
    const findText=document.getElementById('jokeElement');
    findText.innerHTML=JokeText;

})