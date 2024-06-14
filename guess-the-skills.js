/* ----------------- Guess the skills ----------------- */
/* -- DOM ELEMENTS -- */
document.addEventListener('DOMContentLoaded', () => {
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const choice3 = document.getElementById('choice3');
    const feedback = document.getElementById('feedback');
    const questionElement = document.getElementById('question');
    const pointsCounter = document.getElementById('points');

    const choices = [
                            /* - QUESTIONS - */
        /* QUESTION 1 */
        {
            question: "Which one is the Kamehame-wave?",
            choice1: {
                image: "url(https://i.gifer.com/7UhV.gif)",
                id: "kamehame-wave"
            },
            choice2: {
                image: "url(https://media.tenor.com/bypNbcoQ7LQAAAAM/galick-gun.gif)",
                id: "galick-gun"
            },
            choice3: {
                image: "url(https://64.media.tumblr.com/1fff5cf9bfb8c6a65aaec51b784b52f8/tumblr_opylqyDn3I1ujwg5zo1_540.gif)",
                id: "special-beam-cannon" 
            },
            answer: "kamehame-wave"
        },
         /* QUESTION 2 */
        {
            question: "Which skill cuts of frieza's tail?",
            choice1: {
                image: "url(https://j.gifs.com/Krwq7Y.gif)",
                id: "masenko"
            },
            choice2: {
                image: "url(https://64.media.tumblr.com/5f4394b58d7a3e6a8849f82074630192/tumblr_n5634mlhlS1t0mwtjo3_r1_500.gif)",
                id: "destructo-disc"  
            },
            choice3: {
                image: "url(https://64.media.tumblr.com/tumblr_lgdg20XWE61qgfevpo1_400.gif)",
                id: "solar-flare"
            },
            answer: "destructo-disc"
        },
        /* QUESTION 3 */
        {
            
        question: "Which skill is used by Tien?",
        choice1: {
            image: "url(https://j.gifs.com/Krwq7Y.gif)",
            id: "masenko"
        },
        choice2: {
            image: "url(https://media.tenor.com/GRSQISJuplAAAAAM/tenshinhan-torneio-do-poder.gif",
            id: "tri-beam"
        },
        choice3: {
            image: "url(https://64.media.tumblr.com/1fff5cf9bfb8c6a65aaec51b784b52f8/tumblr_opylqyDn3I1ujwg5zo1_540.gif)",
            id: "special-beam-cannon"
        },
       
        answer: "tri-beam"
    },
    /* QUESTION 4 */
    {
        question: "Which skill is used by Krillin? the most?",
        choice1: {
            image: "url(https://64.media.tumblr.com/tumblr_lgdg20XWE61qgfevpo1_400.gif)",
            id: "solar-flare"
        },
        choice2: {
            image: "url(https://i.gifer.com/7UhV.gif)",
            id: "kamehame-wave"
        },
        choice3: {
            image: "url(https://64.media.tumblr.com/1fff5cf9bfb8c6a65aaec51b784b52f8/tumblr_opylqyDn3I1ujwg5zo1_540.gif)",
            id: "tri-beam"
        },
        answer: "solar-flare"
    },
    /* QUESTION 5 */
    {
        question:  "Which skill did goku used that shocked everyone in the tournament of power?",
        choice1: {
            image: "url(https://media.tenor.com/BciCsRXfxVwAAAAM/dragon-ball-gt-goku-ssj4.gif)",
            id: "super-saiyan-4-transformation"
        },
        choice2: {
            image: "url(https://i.pinimg.com/originals/56/e5/4d/56e54d341667daf0fdd2b8bf2b5ff01f.gif)",
            id: "super-saiyan-blue-with-kio-ken-transformation"
        },
        choice3: {
            image: "url(https://media3.giphy.com/media/SIuI7syOPvm1HAd5GF/giphy.gif?cid=6c09b952gm831xgic2bpgenjb6f2ch7h20kjkxp0vythupu2&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g)",
            id: "ultra-instinct"
        },
        answer: "ultra-instinct"
    },
    /* QUESTION 6 */
    {
        question: "Which skill goku use to seal zamasu?",
        choice1: {
            image: "url(https://pa1.aminoapps.com/6204/f1512d0f7442d07466698020cbde83ac601218eb_hq.gif)",
            id: "evil-containment-wave"
        },
        choice2: {
            image: "url(https://static.wikia.nocookie.net/dragonballupdates/images/d/dd/33eecc9d-8626-4d9f-8651-9795f65e5de3.gif/revision/latest?cb=20170525073949)",
            id: "sealing-technique"
        },
        choice3: {
            image: "url(https://media.tenor.com/YENTpPS2unMAAAAM/goku-spiritbomb.gif)",
            id: "spirit-bomb"
        },
        answer: "evil-containment-wave"
    },
    /* QUESTION 7 */
    {
        question: "Which fusion does goku and vegeta use to defeat chanapa/",
        choice1: {
            image: "url(https://pa1.aminoapps.com/6071/2d90e4680c256f45ab54b8e65da561469fd2c087_hq.gif)",
            id: "super-saiyan-4-gogeta"
        },
        choice2: {
            image: "url(https://media3.giphy.com/media/HeDLTI576bBgA/giphy.gif?cid=6c09b9527p9w3n86bykk5pxee1fgqbm5n5fgl6r5hy2do1vz&ep=v1_gifs_search&rid=giphy.gif&ct=g)",
            id: "gogeta"
        },
        choice3: {
            image: "url(https://www.icegif.com/wp-content/uploads/2023/01/icegif-1062.gif)",
            id: "vegeto",
        },
        answer: "gogeta"
    },
    ];
    /* -- VARIABLES -- */
    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    /* -- FUNCTIONS -- */
    function questionare() {
        const currentQuestion = choices[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        choice1.style.backgroundImage = currentQuestion.choice1.image;
        choice2.style.backgroundImage = currentQuestion.choice2.image;
        choice3.style.backgroundImage = currentQuestion.choice3.image;
        choice1.dataset.id = currentQuestion.choice1.id;
        choice2.dataset.id = currentQuestion.choice2.id;
        choice3.dataset.id = currentQuestion.choice3.id;
        feedback.innerText = ""; // Clear previous feedback
    }
    function play(event) {
        const selectedChoiceId = event.target.dataset.id;
        const currentQuestion = choices[currentQuestionIndex];
        
        if (selectedChoiceId && selectedChoiceId === currentQuestion?.answer) {
            feedback.innerText = 'Your answer is correct!';
            ++correctAnswers;
        } else {
            feedback.innerText = 'Your answer is incorrect!';
        }
        pointsCounter.innerText = `Dragon Balls Collected: ${correctAnswers} / 7`;
        currentQuestionIndex++;
        if(correctAnswers > 7){
            correctAnswers = 7;
         }
        if (currentQuestionIndex < choices.length) {
            setTimeout(questionare, 2000); // Load the next question after 1 second
        } else {
            setTimeout(() => {
                if (correctAnswers === choices.length) {
                    localStorage.setItem('score', correctAnswers);
                    window.location.replace("winner.html")
                    
                } else {

                    window.location.replace("loser.html")
                    
                }
                feedback.innerText =` You scored ${correctAnswers} out of ${choices.length}`;
                currentQuestionIndex = 0;
                correctAnswers = 0;
                pointsCounter.innerText = `Score: ${correctAnswers} / 7`;
                setTimeout(questionare, 2000); // Reload the first question after 2 seconds
            }, 3000);
        }
       
    }
    /* -- EVENT LISTENERS -- */
    choice1.addEventListener('click', play);
    choice2.addEventListener('click', play);
    choice3.addEventListener('click', play);
    questionare();

});

