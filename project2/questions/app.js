`use strict`;

let examType= localStorage.getItem('exam');
let qDiv=document.getElementById("questionDiv");
let resultButt= document.getElementById('showResult');
let question=document.getElementById("question");
let answer1=document.getElementById("spanAns1");
let answer2=document.getElementById("spanAns2");
let answer3=document.getElementById("spanAns3");
let savedAnswers=[];
let i=1;

//////////////////////////////////////HTML Questions
const htmlQuestions=[
    {
        question: 'Question 1',
        choice1: 'choice1',
        choice2: 'choice2',
        choice3: 'choice3',
    },
    {
        question: 'Question 2',
        choice1: 'Q2choice1',
        choice2: 'Q2choice2',
        choice3: 'Q2choice3',
    },
    {
        question: 'Question 3',
        choice1: 'Q3choice1',
        choice2: 'Q3choice2',
        choice3: 'Q3choice3',
    },
    {
        question: 'Question 4',
        choice1: 'Q4choice1',
        choice2: 'Q4choice2',
        choice3: 'Q4choice3',
    },
    {
        question: 'Question 5',
        choice1: 'Q5choice1',
        choice2: 'Q5choice2',
        choice3: 'Q5choice3',
    }
];
///////////////////////////////////////////////
//////////////////////////////////////CSS Questions
const cssQuestions=[
    {
        question: 'Question 1',
        choice1: 'choice1',
        choice2: 'choice2',
        choice3: 'choice3',
    },
    {
        question: 'Question 2',
        choice1: 'Q2choice1',
        choice2: 'Q2choice2',
        choice3: 'Q2choice3',
    },
    {
        question: 'Question 3',
        choice1: 'Q3choice1',
        choice2: 'Q3choice2',
        choice3: 'Q3choice3',
    },
    {
        question: 'Question 4',
        choice1: 'Q4choice1',
        choice2: 'Q4choice2',
        choice3: 'Q4choice3',
    },
    {
        question: 'Question 5',
        choice1: 'Q5choice1',
        choice2: 'Q5choice2',
        choice3: 'Q5choice3',
    }
];





///////////////////////////////////////////////
//////////////////////////////////////JS Questions
const jsQuestions=[
    {
        question: 'Question 1',
        choice1: 'choice1',
        choice2: 'choice2',
        choice3: 'choice3',
    },
    {
        question: 'Question 2',
        choice1: 'Q2choice1',
        choice2: 'Q2choice2',
        choice3: 'Q2choice3',
    },
    {
        question: 'Question 3',
        choice1: 'Q3choice1',
        choice2: 'Q3choice2',
        choice3: 'Q3choice3',
    },
    {
        question: 'Question 4',
        choice1: 'Q4choice1',
        choice2: 'Q4choice2',
        choice3: 'Q4choice3',
    },
    {
        question: 'Question 5',
        choice1: 'Q5choice1',
        choice2: 'Q5choice2',
        choice3: 'Q5choice3',
    }
];
///////////////////////////////////////////////

if (examType == "HTML") {
    var selectedExamQuestions= htmlQuestions;
    question.innerHTML= selectedExamQuestions[0].question;
    answer1.innerHTML= selectedExamQuestions[0].choice1;
    answer2.innerHTML= selectedExamQuestions[0].choice2;
    answer3.innerHTML= selectedExamQuestions[0].choice3; 
}
else if (examType == "CSS") {
    var selectedExamQuestions= cssQuestions;
    question.innerHTML= selectedExamQuestions[0].question;
    answer1.innerHTML= selectedExamQuestions[0].choice1;
    answer2.innerHTML= selectedExamQuestions[0].choice2;
    answer3.innerHTML= selectedExamQuestions[0].choice3;   
}
else if (examType == "JS") {
    var selectedExamQuestions= jsQuestions;
    question.innerHTML= selectedExamQuestions[0].question;
    answer1.innerHTML= selectedExamQuestions[0].choice1;
    answer2.innerHTML= selectedExamQuestions[0].choice2;
    answer3.innerHTML= selectedExamQuestions[0].choice3;   
}


function nextQuestion(){
    let SpecifiedQuestions=selectedExamQuestions;
    let questionAns= document.getElementsByName('radio');
    console.log(questionAns);  
    for(j = 0; j < questionAns.length; j++) {
        if(questionAns[j].checked)
        savedAnswers.push(questionAns[j].value);
    }
        console.log(savedAnswers);
    i=savedAnswers.length+1;
    switch(i){
        case(1):
            question.innerHTML= SpecifiedQuestions[0].question;
            answer1.innerHTML= SpecifiedQuestions[0].choice1;
            answer2.innerHTML= SpecifiedQuestions[0].choice2;
            answer3.innerHTML= SpecifiedQuestions[0].choice3;
            break;
        case(2):
        question.innerHTML= SpecifiedQuestions[1].question;
            answer1.innerHTML= SpecifiedQuestions[1].choice1;
            answer2.innerHTML= SpecifiedQuestions[1].choice2;
            answer3.innerHTML= SpecifiedQuestions[1].choice3;
            break;
        case(3):
        question.innerHTML= SpecifiedQuestions[2].question;
            answer1.innerHTML= SpecifiedQuestions[2].choice1;
            answer2.innerHTML= SpecifiedQuestions[2].choice2;
            answer3.innerHTML= SpecifiedQuestions[2].choice3;
            break;
        case(4):
        question.innerHTML= SpecifiedQuestions[3].question;
            answer1.innerHTML= SpecifiedQuestions[3].choice1;
            answer2.innerHTML= SpecifiedQuestions[3].choice2;
            answer3.innerHTML= SpecifiedQuestions[3].choice3;
            break;
        case(5):
        question.innerHTML= SpecifiedQuestions[4].question;
            answer1.innerHTML= SpecifiedQuestions[4].choice1;
            answer2.innerHTML= SpecifiedQuestions[4].choice2;
            answer3.innerHTML= SpecifiedQuestions[4].choice3;
            break;
        default:
            qDiv.style.display='none';
            localStorage.setItem("Answers",savedAnswers)
            resultButt.style.display='block';
    }

}
setTimeout(function(){
    qDiv.style.display='none';
localStorage.setItem("Answers",savedAnswers)
resultButt.style.display='block';}
,300000)

// function btnClick(){
//     let questionAns= document.getElementsByName('radio');
//     console.log(questionAns);  
//     for(j = 0; j < questionAns.length; j++) {
//         if(questionAns[j].checked)
//         savedAnswers.push(questionAns[j].value);
//     }
//     console.log(savedAnswers);
//     let i=savedAnswers.length+1;
// }
// //////////////////////////////////HTML EXAM /////////////////////////////////////////////////////////////

// function htmlExam() {
//     savedAnswers=[];
//     let htmlQuestions=[
//         {
//             question: 'Question 1',
//             choice1: 'choice1',
//             choice2: 'choice2',
//             choice3: 'choice3',
//         },
//         {
//             question: 'Question 2',
//             choice1: 'choice1',
//             choice2: 'choice2',
//             choice3: 'choice3',
//         },
//         {
//             question: 'Question 3',
//             choice1: 'choice1',
//             choice2: 'choice2',
//             choice3: 'choice3',
//         },
//         {
//             question: 'Question 4',
//             choice1: 'choice1',
//             choice2: 'choice2',
//             choice3: 'choice3',
//         },
//         {
//             question: 'Question 5',
//             choice1: 'choice1',
//             choice2: 'choice2',
//             choice3: 'choice3',
//         }
//     ]
//     question.innerHTML= htmlQuestions[0].question;
//     answer1.innerHTML= htmlQuestions[0].choice1;
//     answer2.innerHTML= htmlQuestions[0].choice2;
//     answer3.innerHTML= htmlQuestions[0].choice3;
//     let i=1;
//     nextQuestion(htmlQuestions, i);  
// }



/////////////////////////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////CSS EXAM /////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////JS EXAM /////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////TIMER//////////////////////////////////////////////////////////
// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 60;
const ALERT_THRESHOLD = 30;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 300;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
////////////////////////////////////////////////////////////////////////////////////////////////