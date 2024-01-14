const questionEl=document.getElementById('question');
const ans=document.getElementById('answerInput');
const btn=document.getElementById('submitBtn');
const score=document.getElementById('score');
let storedAnswer;
const randomNumber = (min,max)=>{
return Math.floor(Math.random()*(max-min+1)+min);
};
const generateQuestion = ()=>{
    const randomNumber1=randomNumber(1,10);
    const randomNumber2=randomNumber(1,10);
    const randNo=randomNumber(1,4);
    let question;
    let answer;
    let firstNumber;
    let secondNumber;
    if(randomNumber1>randomNumber2){
        firstNumber=randomNumber1;
        secondNumber=randomNumber2;
    }
    else{
        firstNumber=randomNumber2;
        secondNumber=randomNumber1;
    }
    switch(randNo){
        case 1: question = `${firstNumber} multiplied by ${secondNumber} gives?`;
        answer=firstNumber*secondNumber;
        break;
case 2:
    question = `${firstNumber} added to ${secondNumber} gives?`;
        answer=firstNumber+secondNumber2;
        break;
    case 3:
        question = `${secondNumber} substracted from ${firstNumber} gives?`;
        answer=firstNumber-secondNumber;
        break;   
        case 4:
            question = `${firstNumber} divided by ${secondNumber} gives?`;
        answer=firstNumber/secondNumber;
        break; 
        default:
            question = `${firstNumber} divided by ${secondNumber} gives?`;
        answer=firstNumber/secondNumber;
        break;
    }
   
    return {question,answer};
}
const showQuestion = ()=>{
const {question,answer}=generateQuestion();
questionEl.innerText=question;
storedAnswer=answer;
}
const checkScore= (event)=>{
 event.preventDefault();
if(storedAnswer===parseInt(ans.value))
score.innerText = parseInt(score.innerText) + 1;
showQuestion();
event.target.reset();
}
showQuestion();
