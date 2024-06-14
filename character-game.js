document.addEventListener('DOMContentLoaded', () => {

                                              /* --- DOM ELEMENTS --- */             
    const choice1 = document.getElementById('choice1');
    const choice2 = document.getElementById('choice2');
    const choice3 = document.getElementById('choice3');
    const feedback = document.getElementById('feedback');
    const questionElement = document.getElementById('question');
    const pointsCounter = document.getElementById('points');
    const playAgainButton = document.getElementById('play-again');
    const choices = [
                                                    /* - QUESTIONS - */
        /* QUESTION 1 */
        {
            question: "Which one is Goku?",
            choice1: {
                image: "url(https://i.pinimg.com/originals/2e/7d/9d/2e7d9d3d75cb8d9bd86433a623e301cf.gif)",
                id: "goku"
            },
            choice2: {
                image: "url(https://media.tenor.com/BxbmPL6u1pcAAAAC/goten-dbz.gif)",
                id: "goten"
            },
            choice3: {
                image: "url(https://i.pinimg.com/originals/f1/5a/72/f15a72bcd74edf3125f4a4e037a81091.gif)",
                id: "goku-black" 
            },
            answer: "goku"
        },
         /* QUESTION 2 */
        {
            question: "Which on is Goku's Son?",
            choice1: {
                image: "url(https://pa1.aminoapps.com/6466/4aea157b20146a2de11bcf932e59dbb28a05ae7b_hq.gif)",
                id: "trunks"
            },
            choice2: {
                image: "url(https://25.media.tumblr.com/5dfb7f13525a0f53cb9bd20a676b7856/tumblr_n1257rRlCu1rsqhq5o1_500.gif)",
                id: "pan"
            },
            choice3: {
                image: "url(https://pa1.aminoapps.com/6160/68fedcbfede86c244597d1a33391dc46c8ccbc2b_hq.gif)",
                id: "gohan-and-goten"
            },
            answer: "gohan-and-goten"
        },
        /* QUESTION 3 */
        {
        question: "The Prince of all Saiyns?",
        choice1: {
            image: "url(https://i.gifer.com/Bl7b.gif)",
            id: "future-trunks"
        },
        choice2: {
            image: "url(https://media.tenor.com/9tJVZ1EeSrYAAAAC/vegeta-dragon-ball-z.gif)",
            id: "vegeta"
        },
        choice3: {
            image: "url(https://64.media.tumblr.com/755dce352afeb4a7ec0171a6c55a8129/7232065a53dd822e-dc/s640x960/36356e6ca20a729a1e0da53a153de89411917f52.gif)",
            id: "yamcha"
        },
        answer: "vegeta"
    },
    /* QUESTION 4 */
    {
        question: "Who is Goku's Wife?",
        choice1: {
            image: "url(https://giffiles.alphacoders.com/220/220309.gif)",
            id: "bulma"
        },
        choice2: {
            image: "url(https://i.pinimg.com/originals/23/32/70/23327060318403527abc0f4f2250219c.gif)",
            id: "chi-chi"
        },
        choice3: {
            image: "url(https://i.makeagif.com/media/3-12-2017/0hEwkv.gif)",
            id: "18"
        },
        answer: "chi-chi"
    },
    /* QUESTION 5 */
    {
        question: "Who died from the hands of the grean saibaman?",
        choice1: {
            image: "url(https://i.pinimg.com/originals/7f/5a/67/7f5a67905377409dc3cd770ae6452dfe.gif)",
            id: "chaiotzu"
        },
        choice2: {
            image: "url(https://pa1.aminoapps.com/7024/4d349c4adc27d0b933abf57f891c0a5df013dde0r1-377-207_hq.gif)",
            id: "krillin"
        },
        choice3: {
            image: "url(https://64.media.tumblr.com/755dce352afeb4a7ec0171a6c55a8129/7232065a53dd822e-dc/s640x960/36356e6ca20a729a1e0da53a153de89411917f52.gif)",
            id: "yamcha"
        },
        answer: "yamcha"
    },
    /* QUESTION 6 */
    {
        question: "Who killed Frieza?",
        choice1: {
            image: "url(https://i.gifer.com/Bl7b.gif)",
            id: "future-trunks"
        },
        choice2: {
            image: "url(https://i.pinimg.com/originals/2e/7d/9d/2e7d9d3d75cb8d9bd86433a623e301cf.gif)",
            id: "goku"
        },
        choice3: {
            image: "url(https://i.imgur.com/NvtqBmW.gif)",
            id: "piccolo"
        },
        answer: "future-trunks"
    },
    /* QUESTION 7 */
    {
        question: "Who is Goku's rival?",
        choice1: {
            image: "url(https://pa1.aminoapps.com/7024/4d349c4adc27d0b933abf57f891c0a5df013dde0r1-377-207_hq.gif)",
            id: "krillin"
        },
        choice2: {
            image: "url(https://i.imgur.com/NvtqBmW.gif)",
            id: "piccolo"
        },
        choice3: {
            image: "url(https://media.tenor.com/9tJVZ1EeSrYAAAAC/vegeta-dragon-ball-z.gif)",
            id: "vegeta",
        },
        answer: "vegeta"
    },
    ];
    /* --- GAME LOGIC --- */
    let currentQuestionIndex = 0;
    let correctAnswers = 0;
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
        pointsCounter.innerText = ` Dragon Balls Collected: ${correctAnswers} / 7`;
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
                pointsCounter.innerText = ` You got: ${correctAnswers} / 7 dragon balls!`;
                setTimeout(questionare, 2000); // Reload the first question after 2 seconds
            }, 3000);
        }
       
    }
    /* --- EVENT LISTENERS --- */
    choice1.addEventListener('click', play);
    choice2.addEventListener('click', play);
    choice3.addEventListener('click', play);
    questionare();
    
});

