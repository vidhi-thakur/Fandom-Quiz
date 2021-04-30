
const chalk = require('chalk');
var readlineSync = require("readline-sync");
var score = 0;

//console.log();
var userName = readlineSync.question("Please enter your name: ");

console.log("Hello! "+userName+", let's check your knowledge of MCU 😄✌️");

highScore = {
  totalScore: 7,
  name: "Vidhi"
}

questionOne = {
  question: "Q1. What is the name of Thor’s hammer?",
  options:  ["Vanir", "Aesir", "Norn", "Mjolnir"],
  answer: 4
}

questionTwo = {
  question: "Q2. What is Captain America’s shield made of?",
  options: ["Vibranium", "Adamantium", "Promethium", "Carbonadium"],
  answer: 1
}

questionThree = {
  question: "Q3. Before becoming Vision, what is the name of Iron Man’s A.I. butler?",  
  options: [ "A.L.F.R.E.D.", "J.A.R.V.I.S.", "H.O.M.E.R.", "M.A.R.V.I.N."],
  answer: 2
}

questionFour = {
  question: "Q4. What is the real name of the Black Panther?",
  options: [ "M’Baku", "T’Challa", "N’Jadaka", "N’Jobu"],
  answer: 2
}

questionFive = {
  question: "Q5. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?",
  options:[ "Loki", "Thor", "Tony Stark", "The Collector"],
  answer: 1
}

questionSix = {
  question: "Q6. What fake name does Natasha use when she first meets Tony?",  
  options: [ "Natalia Romanoff", "Nicole Rohan", "Natalie Rushman", "Naya Rabe"],
  answer: 3
}

questionSeven = {
  question: "Q7. Who does the Mad Titan sacrifice to acquire the Soul Stone?", 
  options: [ "Nebula", "Ebony Maw", "Cull Obsidian", "Gamora"],
  answer: 4
}

questionEight = {
  question: "Q8. What is the name of the little boy Tony befriends while stranded in the Iron Man 3?", 
  options: [ "Harry", "Henry", "Harley", "Holden"],
  answer: 3
}

questionNine = {
  question: "Q9. What were the three items Rocket claims he needs in order to escape the prison?", 
  options: [ "A pair of binoculars, a detonator, and a prosthetic leg", "A knife, cable wires, and Peter’s mixtape", "A security band, a battery, and a prosthetic leg", "A security card, a fork, and an ankle monitor"],
  answer: 3
}

questionTen = {
  question: "Q10. What type of doctor is Stephen Strange?", 
  options: [ "Plastic Surgeon", "Trauma Surgeon", "Cardiothoracic Surgeon", "Neurosurgeon"],
  answer: 4
}

var arrayQuestion = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

function questions(question){
  var userAnswer = readlineSync.keyInSelect(arrayQuestion[i].options, arrayQuestion[i].question, {cancel: "None of the above"});
  if(userAnswer+1 == arrayQuestion[i].answer){
    score++;
  }
}

for (var i=0; i<arrayQuestion.length; i++){
  questions(arrayQuestion[i]);
}

bonusQues = {
  question: " Who is killed by Loki in the Avengers?",
  options: ["Maria Hill", "Agent Coulson", "Nick Fury", "Doctor Erik Selvig"],
  answer: 2
}

if(score > highScore.totalScore){
  console.log("YAY! You have passed the test!🥳  Your score is: "+score);
}
else{
  console.log("OOPS! Looks like you failed the test. Your score is: "+score);
  boolYesOrEmpty = readlineSync.keyInYN("Do you wish to answer one bonus question to get back in the game?");
  if(boolYesOrEmpty){
    var bonusAnswer = readlineSync.keyInSelect(bonusQues.options, bonusQues.question, {cancel: "None of the above"});
    console
    if(bonusAnswer+1 == bonusQues.answer){
    score+=3;
    }
  }
}

if(boolYesOrEmpty){
  if(score>=highScore.totalScore){
    console.log("YAY! You passed the test!🥳  Your score is: "+score);
  }
  else{
    console.log("Your score is: "+score+". Dude! You need to watch these movies 🙄 ");
  }
}
