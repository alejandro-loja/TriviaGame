
$(document).ready(function () {

    var win = 0;
    var loss = 0;
    var time = 300;
    var startquestions = 0;



    var converted = timeConverter(time);
    $('.count-down').html(converted);


    var trivia = [
        {
            question: "What Video Game system released after the Nintendo 64?",
            choices: [
                "Virtual Boy",
                "Nintendo GameSphere",
                "Nintendo GameCube",
                "Nintendo Wii"
            ],
            correctAns: 2,

        },
        {
            question: "What color combination do Mario and Luigi currently wear?",
            choices: [
                "Mario has red overalls and a blue shirt. Luigi has green overalls and a red shirt.",
                "Mario has blue overalls and a red shirt. Luigi has blue overalls and a green shirt.",
                "Mario has red overalls and a blue shirt. Luigi has green overalls and a blue shirt.",
                "Mario has blue overalls and a red shirt. Luigi has green overalls and a blue shirt."
            ],
            correctAns: 1,

        },
        {
            question: "Before making Video Games what did Nintendo originally produce?",
            choices: [
                "Playing Cards",
                "Toys",
                "Computers",
                "Transistors"
            ],
            correctAns: 0,

        },
        {
            question: "Which Video Game Franchise is NOT part of Nintendo?",
            choices: [
                "Mario",
                "Donkey Kong",
                "Mr. Game & Watch Series",
                "Castlevania"
            ],
            correctAns: 3,

        }];

    trivia.forEach(function (i) {
        var wordsQuestion = i.question;
        //i refers to each single question/answer set.
        var correctChoices = i.choices[i.correctAns];
        // console.log(wordsQuestion);
        // console.log(correctChoices);
    });

    //generates the question and set answers for one question - takes the array# of question
    function populateTrivia(number) {
        $('.answer-container').empty();
        var questionPrompt = trivia[number].question;
        $('.questions').text(questionPrompt);

        for (var z = 0; z < howManyQuestions; z++) {
            var everyAnswer = trivia[number].choices[z];
            var correctORincorrect = trivia[number].correctAns;
            var divForQuestions = $('<div>');
            divForQuestions.attr('id', z);
            divForQuestions.addClass("answer-choice");
            divForQuestions.text(everyAnswer);

            //sets values right or wrong
            if (z === correctORincorrect) {
                divForQuestions.attr('value', 'right');
            }
            else {
                divForQuestions.attr('value', 'wrong');
            }
            $('.answer-container').append(divForQuestions);


        }
    };

    var howManyQuestions = trivia.length;
    // console.log("Number of Questions? " + howManyQuestions);
    var unanswered = howManyQuestions;


    function toClick() {
        $('.answer-choice').on('click', function () {
            var isCorrect = $(this).attr('value');
            if (isCorrect === 'right') {
                console.log(isCorrect);
                win++;
                proceed();

            }
            else {
                console.log(isCorrect);
                loss++;
                proceed();
            }

        });
    };


    function proceed() {
        unanswered--;
        startquestions++;
        console.log('i am proceeding');
        if (startquestions === howManyQuestions) {
            gameOver();
        }
        else {
            populateTrivia(startquestions);
            toClick();
        }

    };

    function gameOver() {
        console.log('hello');
        $('.answer-container').empty();
        
    }

    // Don't Touch These Functions!!!


    //uses count every second to subtract 1 from the time
    function setCountDown() {
        intervalId = setInterval(count, 1000);
    }
    //subtracts 1 seconds
    function count() {
        time--;
        if (time === 0) {
            timeIsUp();
            console.log('TIMER STOPPED!');
        }

        var converted = timeConverter(time);
        $('.count-down').html(converted);
    };
    //stops the time
    function timeIsUp() {
        clearInterval(intervalId);
    }
    //converts seconds into minutes and seconds
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
    populateTrivia(startquestions);
    //to click NEEDS to be done after populateTrivia or else wont work
    toClick();




}); // THE END 