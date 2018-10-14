
$(document).ready(function () {

    var win = 0;
    var loss = 0;
    var time = 120;
    var startquestions = 0;
    var printAnswer;



    var converted = timeConverter(time);



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

        },
        {
            question: "Which is Nintendo’s 16-bit System?",
            choices: [
                "Gameboy Advance",
                "Nintendo Entertainment System (NES)",
                "Super Nintendo Entertainment System (SNES)",
                "Game Boy Color"
            ],
            correctAns: 2,

        },
        {
            question: "What NEW feature did the Nintendo Wii have over its previous system?",
            choices: [
                "Ability to play DVDs",
                "High Definition Graphics",
                "Motion Controls",
                "Wireless Controllers"
            ],
            correctAns: 2,

        },
        {
            question: "Who is Shigeru Miyamoto?",
            choices: [
                "The founder of Nintendo",
                "Video Game designer and producer for Nintendo",
                "Nintendo’s President",
                "Creator of the Super Smash Bros. franchise"
            ],
            correctAns: 1,

        },
        {
            question: "What power does the Green Mushroom in Super Mario Bros. give you?",
            choices: [
                "Awards a 1000 points",
                "Gives Mario the ability to fly",
                "Makes Mario grow",
                "Give the player another Life"
            ],
            correctAns: 3,

        },
        {
            question: "What is the best-selling Nintendo handheld of all time? The system in question sold an estimated 154 million units since launch.",
            choices: [
                "Nintendo Game Boy",
                "Nintendo Game Boy Advance",
                "Nintendo DS",
                "Nintendo 3DS"
            ],
            correctAns: 2,

        },
        {
            question: "What was Mario's original name?",
            choices: [
                "Jumpman",
                "Big Red",
                "Luigi",
                "quattin' Sam"
            ],
            correctAns: 0,

        }];


    //generates the question and set answers for one question - takes the array# of question
    function populateTrivia(number) {
        $('.which-question').html('Question ' + (startquestions + 1));
        $('.answer-container').empty();

        var questionPrompt = trivia[number].question;
        $('.questions').text(questionPrompt);

        for (var z = 0; z < 4; z++) {
            var everyAnswer = trivia[number].choices[z];
            var correctORincorrect = trivia[number].correctAns;
            var divForQuestions = $('<div>');
            divForQuestions.attr('id', z);
            divForQuestions.addClass("answer-choice");
            divForQuestions.text(everyAnswer);

            //sets values right or wrong
            if (z === correctORincorrect) {
                divForQuestions.attr('value', 'right');
                printAnswer = trivia[number].choices[correctORincorrect];
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
    console.log(howManyQuestions);


    function toClick() {
        $('.answer-choice').on('click', function () {
            var isCorrect = $(this).attr('value');

            if (isCorrect === 'right') {
                console.log(isCorrect);
                win++;
                proceed();
                $('.answer-container').text('Correct!');

            }
            else {
                console.log(isCorrect);
                loss++;
                proceed();
                $('.questions').text('Answer: ' + printAnswer);
                $('.answer-container').text('WRONG');
            }

        });
    };

    function holdOn() {
        populateTrivia(startquestions);
        toClick();
    };


    function proceed() {
        unanswered--;
        startquestions++;
        console.log('i am proceeding');
        if (time > 3) {
            if (startquestions === howManyQuestions) {
                setTimeout(gameOver, 2000);
            }
            else {
                setTimeout(holdOn, 2000);
            }
        };

    };

    function gameOver() {
        console.log('Finished');
        $('.questions').empty();
        $('.which-question').empty();
        $('.count').empty();
        timeIsUp();
        var divForTally = $('<div>');
        divForTally.addClass('final-score');
        divForTally.text('Total Scores');
        $('.questions').append(divForTally);
        $('.questions').append('<br />');

        var divForWins = $('<div>');
        divForWins.text('Correct: ' + win);
        $('.questions').append(divForWins);
        $('.questions').append('<br />');

        var divForLosses = $('<div>');
        divForLosses.text('Incorrect: ' + loss);
        $('.questions').append(divForLosses);
        $('.questions').append('<br />');

        var divForUnanswered = $('<div>');
        divForUnanswered.text('Unanswered: ' + unanswered);
        $('.questions').append(divForUnanswered);

        $('.answer-container').empty();

        var divForRestart = $('<div>');
        divForRestart.attr('id', 'restart');
        divForRestart.text('Restart?');

        $('.answer-container').append(divForRestart);
        restartGame();


    }
    function restartGame() {
        $('#restart').on('click', function () {
            time = 120;
            win = 0;
            loss = 0;
            unanswered = howManyQuestions;
            startquestions = 0;

            console.log('lolol');
            startgame();
        });
    };

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
            gameOver();
        }

        var converted = timeConverter(time);
        $('.count-down').html(converted);
    };
    //stops the time
    function timeIsUp() {
        clearInterval(intervalId);
    };
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

    function startgame() {
        $('.count-down').html(converted);
        setCountDown();
        populateTrivia(startquestions);
        toClick();
    };

    $('#begin').on('click', function () {
        startgame();
    });







}); // THE END