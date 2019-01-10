
//Timerstarts at 5 minutes when page is open
function startTimer(duration, display) {
//time is set in minutes and seconds
    var timer = duration;
    var seconds;
    var minutes;
//setInterval- want a certin event to happen, every so often
//[arseInt: take and analyzes a string and returns and interger
    setInterval(function () {
//minutes are the number of current sconds divided by 60
        minutes = parseInt(timer / 60, 10)
//seconds are caluclated as the set of 60 of the total seconds counter
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
//when browser opens run this function:
window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};




/////////////////////function to check questions//////////////////////////////////

function check() {
    var question1 = document.quiz.question1.value; //question1 anwser is found by going inside the quiz id, then question1 and greabs the value
    var question2 = document.quiz.question2.value;//question2 anwser is found by goinginside the quiz id, then question2 and greabs the value
    //...same for all other questions://
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
    var correct = 0;// anwser counters starts at 0


//QUESTION 1: if the value of question is equal to raleigh  then add 1 to the "correct" variable 
    if (question1 == "Raleigh") {
        correct++;
    }
//QUESTION 2: if the value of question is equal to raleigh  then add 1 to the "correct" variable 
    if (question2 == "Columbia") {
        correct++;
    }
//QUESTION 3: if the value of question is equal to Montgomery then add 1 to the "correct" variable 
    if (question3 == "Montgomery") {
    correct++;
    }
 //QUESTION 4: if the value of question is equal to Sacramento then add 1 to the "correct" variable 
    if (question4 == "Sacramento") {
    correct++;
    }
//QUESTION 5: if the value of question is equal to Hartford then add 1 to the "correct" variable 
    if (question5 == "Hartford") {
    correct++;
    }
//QUESTION 6: if the value of question is equal to Tallahassee then add 1 to the "correct" variable 
    if (question6 == "Tallahassee") {
    correct++;
    }
//QUESTION 7: if the value of question is equal to Boise then add 1 to the "correct" variable 
    if (question7 == "Boise") {
    correct++;
    }
//QUESTION 8: if the value of question is equal to Frankfort then add 1 to the "correct" variable 
    if (question8 == "Frankfort") {
    correct++;
    }
//QUESTION 9: if the value of question is equal to Augusta then add 1 to the "correct" variable 
    if (question9 == "Augusta") {
    correct++;
    }
//QUESTION 10: if the value of question is equal to Jackson then add 1 to the "correct" variable 
    if (question10 == "Jackson") {
    correct++;
    }
//QUESTION 11: if the value of question is equal to Bismarck then add 1 to the "correct" variable 
    if (question11 == "Bismarck") {
    correct++;
    }
//QUESTION 12: if the value of question is equal to Austin then add 1 to the "correct" variable 
    if (question12 == "Austin") {
    correct++;
    }
//QUESTION 13: if the value of question is equal to Salem then add 1 to the "correct" variable 
    if (question13 == "Salem") {
    correct++;
    }
//QUESTION 14: if the value of question is equal to Charleston then add 1 to the "correct" variable 
    if (question14 == "Charleston") {
    correct++;
    }
//QUESTION 15: if the value of question is equal to Olympia then add 1 to the "correct" variable 
    if (question15 == "Olympia") {
    correct++;
    }

////create the messages a user recieves when anwsers are submitted////
    var messages = ["Wow great job!", "You did okay", "You can do better than that"];

///depending on your score you will recieve one of these messages:///
    var range;

// if score is 5, then message index number 2 will appear
        if (correct < 5) {
            range = 2;
        }
//  if score is great than zero, and less than 10 array index 1 will appear  
        if (correct > 0 && correct < 10) {
            range = 1;
        }
// if score is greater than 13, array index number 0 will appear
        if (correct > 13) {
            range = 0;
        }


    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
}
