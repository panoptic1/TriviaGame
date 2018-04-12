//====================================================VARIABLES========================================================
    //Two variables to use to check whether answers are right or wrong, when compared to their values
var correct = "1";
var incorrect = "0"

    //Two variables to store the correct answers which will be used to display the final score upon completion
var correctAnswers = 0
var wrongAnswers = 0

//=================================================LOGIC===============================================================

    //Functions to hide the timer once the game starts and the questions once the game ends. 
$(".card").hide();
$("#timer").hide();
$("#results").hide();

    //Create a function which starts the game and the timer when you press the start button
$(".start-button").click(function () {
    $(this).hide(); //Hide the start button after clicking on it
    $(".qs").show(); //Show the questions after clicking on the button

    var n = 5;
    setTimeout(countDown, 1000); //IS THIS DOING ANYTHING??? IDK...

    //Create a function for the timer which decrements the value of 'n' by 1 every second. 
    function countDown() {
        n--;
        if (n > 0) {
            setTimeout(countDown, 1000);
        }
        //Show the timer and print the value of 'n' to the time-left box. 
        $("#timer").show();
        $("#time-left").text(n);
        //If the clock runs out, run a function to check the users score

        if (n == 0) {
            checkAnswers();
        }

}
//A function to check answers 
function checkAnswers() {
    var q1Chosen = $('input[name="q1"]:checked').val();
    var q2Chosen = $('input[name="q2"]:checked').val();
    var q3Chosen = $('input[name="q3"]:checked').val();
    var q4Chosen = $('input[name="q4"]:checked').val();
    var q5Chosen = $('input[name="q5"]:checked').val();
    var q6Chosen = $('input[name="q6"]:checked').val();
    var q7Chosen = $('input[name="q7"]:checked').val();
    var q8Chosen = $('input[name="q8"]:checked').val();
    var q9Chosen = $('input[name="q9"]:checked').val();
        if (q1Chosen == 1) {
            correctAnswers++;

        } 
        else {
             wrongAnswers++;
        }

        if (q2Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q3Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q4Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q5Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q6Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q7Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q8Chosen == 1) {
            correctAnswers++;
        } 
        else {
            wrongAnswers++;
        }

        if (q9Chosen == 1) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }
        console.log(correctAnswers);
        $(".card").hide();
        $("#results").show();
        $("#correct").text(correctAnswers);
        $("#incorrect").text(wrongAnswers);
    }
    $("#submit").click();
    
});
