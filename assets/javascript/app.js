
$(document).ready(function () {

    var unanswered = 10;
    var correct = 0;
    var incorrect = 0;
    var time = 300;


    var converted = timeConverter(time);
    $('.count-down').html(converted);


    var trivia = [{
        question: "What Video Game system released after the Nintendo 64?",
        choices: [
            "Virtual Boy",
            "Nintendo GameSphere",
            "Nintendo GameCube",
            "Nintendo Wii"
        ],
        correct: 2,
        answer: function () {
            return this.choices[correct];
        }
    },
    {
        question: "What color combination do Mario and Luigi currently wear?",
        choices: {
            a: "Mario has red overalls and a blue shirt. Luigi has green overalls and a red shirt.",
            b: "Mario has blue overalls and a red shirt. Luigi has blue overalls and a green shirt.",
            c: "Mario has red overalls and a blue shirt. Luigi has green overalls and a blue shirt.",
            d: "Mario has blue overalls and a red shirt. Luigi has green overalls and a blue shirt."
        },
        correct: "b",
        answer: function () {
            return this.choices.b;
        }
    },
    {
        question: "Before making Video Games what did Nintendo originally produce?",
        choices: {
            a: "Playing Cards",
            b: "Toys",
            c: "Computers",
            d: "Transistors"
        },
        correct: "a",
        answer: function () {
            return this.choices.a;
        }
    },
    {
        question: "Which Video Game Franchise is NOT part of Nintendo?",
        choices: [
            "Mario",
            "Donkey Kong",
            "Mr. Game & Watch Series",
            "Castlevania"
        ],
        correct: 3,
        answer: function () {
            return this.choices[correct];
        }
    }
    ];

    console.log(trivia[0].answer());

    function populateTrivia(number) {
        var questionPrompt = trivia[number].question;
        $('.questions').text(questionPrompt);

        for (var z = 0; z < 4; z++) {
            var everyAnswer = trivia[number].choices[z];
            $("#" + z).text(everyAnswer);
        }
    };

    var howManyQuestions = trivia.length;
    console.log(howManyQuestions);
    populateTrivia(0);


    trivia.forEach(function (i) {
        console.log(i.question);
    });
    trivia.forEach(function (i) {
        i.answer();
    });

    // $('.questions').html(questionArray[0]);

    $('.answer-choice').on('click', function () {
        console.log($(this).attr('id'));
        var currentAnswer = $(this).attr('data-answer');
        if (questionsKey[0] === 'correct') {
            console.log('so you are CORRECT');
            //if so trigger function that will add to CORRECT, subtract from incorrect, and will 
        }
        else {
            console.log('so you are WRONG');
        }

    });

    //uses count every second to subtract 1 from the time
    function setCountDown() {
        intervalId = setInterval(count, 1000);
    }

    //subtracts 1 seconds
    function count() {
        time--;
        if (time === 0) {
            timeIsUp();
            alert('DONE');
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




}); // THE END 