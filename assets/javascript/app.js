
$(document).ready(function () {

    var unanswered = 10;
    var correct = 0;
    var incorrect = 0;
    var time = 10;

    var converted = timeConverter(time);
    $('.count-down').html(converted);


    var answerArray = ['a', 'b'];

    var question1 = {
        question: "What Video Game system released after the Nintendo 64?",
        choices: ["Virtual Boy","Nintendo GameSphere","Nintendo GameCube","Nintendo Wii"],
        answer: "Nintendo GameCube"
    }
    console.log(question1.answer);

    // var questionsObject = {
    //     question: [
    //     'What Video Game system released after the Nintendo 64?',
    //     'What color combination do Mario and Luigi currently wear?',
    //     'Before making Video Games what did Nintendo originally produce?',
    //     "Which Video Game Franchise is NOT part of Nintendo?",
    //     "Which is Nintendo’s 16-bit System?",
    //     "What NEW feature did the Nintendo Wii have over its previous system?",
    //     "Who is Shigeru Miyamoto?",
    //     "What power does the Green Mushroom in Super Mario Bros. give you?",
    //     "What is the best-selling Nintendo handheld of all time?",
    //     "What was Mario's original name?"],
    //     answerchoices: [],
    //     answer: [],
    //     printquestions
    // }
    // console.log(questionsObject.question[0]);

    // function QuestionCreator(quest, choices, answer,) {
    //     this.question = quest;
    //     this.choice = last;
    //     this.answer = age;
    // }

    // var questionsKey = ['a', 'c'];

    // $('.questions').html(questionArray[0]);

    $('.answer-choice').on('click', function () {
        console.log($(this).attr('id'));
        var currentAnswer = $(this).attr('id');
        if (questionsKey[0] === currentAnswer) {
            console.log('You clicked ' + currentAnswer + ' so you are CORRECT');
            //if so trigger function that will add to CORRECT, subtract from incorrect, and will 
        }
        else {
            console.log('You clicked ' + currentAnswer + ' so you are WRONG');
        }

    });

    function setCountDown() {
        intervalId = setInterval(count, 1000);
    }

    function count() {
        time--;
        if (time === 0) {
            timeIsUp();
            alert('DONE');

        }

        var converted = timeConverter(time);
        $('.count-down').html(converted);
    };

    function timeIsUp() {
        clearInterval(intervalId);
    }
    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    };
    setCountDown();




}); // THE END 