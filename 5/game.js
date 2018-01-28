//array of question objects.
//code supports as many questions and answers as you want
//code supports one correct answer value
//"cor" must be exactly the same as one of the strings in "a"
var questions = [
    {
        q: "How many people live in Africa?",
        a: ["about 1.1 billion", "about 2.1 billion", "about 1.2 billion", "about 900 million",],
        cor: "about 1.2 billion"
    },
    {
        q: "What is the capital of Zimbabwe?",
        a: ["gaborone", "harare", "lagos", "maputo",],
        cor: "harare"
    },

    {
        q: "What is the fastest growing city in Africa?",
        a: ["cairo", "johannesburg", "lagos", "cape town",],
        cor: "lagos"
    },

    {
        q: "Which country borders Botswana to the west?",
        a: ["tanzania", "zimbabwe", "kenya", "namibia",],
        cor: "namibia"
    },

    
]
//when document loads, build the quiz
$(document).ready(function () {
    //supports any length of quiz
    for (var i = 0; i < questions.length; i++) {
        var curQ = questions[i];
        buildQuizNode(curQ);
        
    }
});
var answerSheet = [];
//build the quiz
function buildQuizNode(qObj) {
    var quizNode = $("<div>");
    quizNode.append("<h1>" + qObj.q + "</h1>");
    var options = $("<form>");

    qObj.a.forEach(element => {
        var ques = $("<input type='radio'/>");
        $(ques).addClass("options");
        
        //line below doesnt do anything, and i feel incredibly dumb
        ques.text(element);
        //dev tools shows the radio element containing this text, but it doesnt display
        //below code automatically marks an answer as the "right" one based on qObj
        //this means you can switch up or randomize the order of the answers
        if (element == qObj.cor) {
            $(ques).addClass("correct");
        }
        else {
            $(ques).addClass("incorrect");
        }
        options.append(ques);
        answerSheet.push(ques);
    });
    quizNode.append(options);
    $("#testsheet").append(quizNode);

}

//timer scales with quiz length
var count = (3 * questions.length);

var timer = setInterval(startCount, 1000);
    function startCount(){
       
       console.log(count);
       count -= 1;
       if (count < 0){
           console.log("time is up!");
           $("#testsheet").addClass("hide");
           $("#submit").addClass("hide");
           clearInterval(timer);
           checkAnswers();
       }
      }
function checkAnswers()
{
    var score = 0;
    // missing code:
    var answered = [];
    // for each radio button checked do this:
    for (var i = 0; i < answerSheet.length; i++)
    {
        //below line fails.
        var x = answerSheet[i].checked;
        //we want to push all the checked answers into answered[]
        if(x = true){
            answered.push(answerSheet[i]);
        }
    }
    // if the class of the button checked is "correct", add 1 to score

    // if else, dont add anything to score.

    // your total percent score will be ((score / questions.length) x 100)
    var perc = ((score / questions.length) * 100);
    //give the user their result
    $("body").append("<h1>Time is up.</h1>");
    $("body").append("<h1> You scored " + perc + "%");
}
      