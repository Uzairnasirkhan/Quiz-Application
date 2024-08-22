var questions = [
    {
        id: 1,
        question: "What is the Longest Surah in Quran?",
        options: {
            a: "Surah Al-A'raaf",
            b: "Surah Yaseen",
            c: "Surah Al-Baqrah",
            d: "Surah Al-Fatiha",

        },
        answer: "Surah Al-Baqrah"
    },
    {
        id: 2,
        question: "Who was the last prophet sent on earth?",
        options: {
            a: "Prophet Musa AS",
            b: "Prophet Muhammad Saw",
            c: "Prophet Nuh AS",
            d: "Prophet Zakariya AS",

        },
        answer: "Prophet Muhammad Saw"
    },
    {
        id: 3,
        question: "Which angel brought the revelation to Prophet Muhammad SAW?",
        options: {
            a: "Angel Michael AS",
            b: "Angel Israfil AS",
            c: "Angel Izrael AS",
            d: "Angel Jibrael AS",

        },
        answer: "Angel Jibrael AS"
    }
    ,
    {
        id: 4,
        question: "Which Prophet is also called KhalilUllah?",
        options: {
            a: "Prophet Adam AS",
            b: "Prophet Musa AS",
            c: "Prophet Ibrahim AS",
            d: "Prophet Muhammad SAW",

        },
        answer: "Prophet Ibrahim AS"
    }
    ,
    {
        id: 5,
        question: "How many fardh rakats are in the Maghrib Prayer?",
        options: {
            a: "3",
            b: "5",
            c: "4",
            d: "none",

        },
        answer: "3"
    },
    {
        id: 6,
        question: "What is the total number of surahs in Quran?",
        options: {
            a: "113",
            b: "114",
            c: "112",
            d: "111",

        },
        answer: "114"
    },
    {
        id: 7,
        question: "Which prophet will be sent again on earth near the day of judgment?",
        options: {
            a: "Prophet Lut AS",
            b: "Prophet Yahya AS",
            c: "Prophet Isa AS",
            d: "Prophet Dawood AS",

        },
        answer: "Prophet Isa AS"
    },
    {
        id: 8,
        question: "What is considered the biggest sin in Islam?",
        options: {
            a: "Shirk",
            b: "Killing",
            c: "Drinking",
            d: "Lying",

        },
        answer: "Shirk"
    },
    {
        id: 9,
        question: "Who was the first Caliph of Islam?",
        options: {
            a: "Hazrat Umar ibn-Al Khattab RA",
            b: "Hazrat Usman bin Affan RA",
            c: "Hazrat Ali ibn Abi Talib AS",
            d: "Hazrat Abu Bakr Siddique RA",

        },
        answer: "Hazrat Abu Bakr Siddique RA"
    },
    {
        id: 10,
        question: "Who was the first martyr of Islam?",
        options: {
            a: "Hazrat Sumayyah bint Khayyat RA",
            b: "Hazrat Hamza ibn Abd al-Muttalib RA",
            c: "Hazrat Abu Ubaida ibn Jarah RA",
            d: "Hazrat Husain ibn Ali AS",

        },
        answer: "Hazrat Sumayyah bint Khayyat RA"
    }
]

// console.log(questions[1].answer)
var userName = document.getElementById("userName")
var userEmail = document.getElementById("userEmail")
userName.innerHTML = localStorage.getItem("name")
userEmail.innerHTML = localStorage.getItem("email")


var htmlQues = document.getElementById("htmlQues")
var htmlOptions = document.getElementById("htmlOptions")
var indexNum = 0

var nextQuesBtn = document.getElementById("nextQuesBtn")
var score = 0


var currentCount = document.getElementById("currentCount")
var totalCount = document.getElementById("totalCount")
totalCount.innerHTML = questions.length


var resultContainer = document.getElementById("resultContainer")
var correctAns = document.getElementById("correctAns")


var quizContainer = document.getElementById("quizContainer")

var quizBody = document.getElementById("quizBody")

var timeOut = document.getElementById("timeOut")
var footer = document.getElementById("footer")


const startingMinutes = 3;
let time = startingMinutes * 60;


function startQuiz(){
     
    htmlQues.innerHTML = questions[indexNum].question

    htmlOptions.innerHTML = ""


    for (var key in questions[indexNum].options) {
        // console.log("key", key, questions[indexNum].options[key])
        var option = questions[indexNum].options[key]
        htmlOptions.innerHTML += ` <li onclick = "checkAnswer(this)"> ${option} </li>`
    
    }
}



function checkAnswer(eleme){

   var liOptions = htmlOptions.getElementsByTagName("li")
    // var isCheck = ele        .innerHTML === questions[indexNum].answer
// console.log(liOptions)
     
        // if (liOptions.innerHTML === questions[indexNum].answer) {
        //     score++

        // }
        // console.log(indexNum);
    if(eleme.innerText === questions[indexNum].answer    ){
        score++
       eleme.style.backgroundColor = "#a8f0cb"
       
        // console.log(score++/);
        // console.log(correct);
    }
    else{
        eleme.style.backgroundColor = "#f0b1b1"
    }
    
    
    for (var li of liOptions) {
        li.style.pointerEvents = "none"
        li.style.cursor = "no-drop !important"
    }

    // show next Ques btn  the selection
    nextQuesBtn.className = "show"
}




function showResult(){
    resultContainer.className = "show"
    correctAns.innerHTML = "You scored " + score + "/" +totalCount.innerHTML
    nextQuesBtn.className = "hide"
}



function nextQues() {
    if (indexNum < questions.length - 1) {
        indexNum++
        currentCount.innerHTML++
        nextQuesBtn.className = "hide"
        startQuiz()
    }

    else {
        showResult() 
    }
}





const countDownEle = document.getElementById("countDown")

function startTimer() {
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDownEle.innerText = `${minutes}:${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            showResult()
            quizBody.className = "hide"
            timeOut.className = "show"
            footer.className = "hide"
            nextQuesBtn.className = "hide"

        }
    }, 1000);
}


window.onload = () => {
    startQuiz();
    startTimer();
};






