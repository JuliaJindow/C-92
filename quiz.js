 var actual_ans;
 var answer_turn = "Player 2"
 var question_turn = "Player 1"
 var player1Name = localStorage.getItem("player1 name");
 var player2Name = localStorage.getItem("player2 name");
 var player1_score = 0;
 var player2_score = 0;


 document.getElementById("player_question").innerHTML = "Question Turn :" + player1Name;
 document.getElementById("player_answer").innerHTML = "Answer Turn :" + player2Name;


function send() {
    
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    actual_ans = parseInt(num1) * parseInt(num2);
    var question = "<h4>" + num1 + " X " + num2 + "</h4>";
    var answer = "<br>Answer : <input type='text' id='answer_input'>";
    var check_Btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    var row = question + answer + check_Btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function check() {

    var getans = document.getElementById("answer_input").value;
    if (getans == actual_ans) {
        if (answer_turn == "Player 1") {
            
            answer_turn = "Player 2";
            question_turn = "player1";
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1Name + " : " + player1_score;
            document.getElementById("player_answer").innerHTML = "Answer turn :" + player2Name;
            document.getElementById("player_question").innerHTML = "Question turn :" + player1Name;
                
        }
        else {
            
            answer_turn = "Player 1";
            question_turn = "Player 2";
            player2_score = player2_score + 1;
            document.getElementById("player_answer").innerHTML = "Answer turn :" + player1Name;
            document.getElementById("player2_score").innerHTML = player2Name + " : " + player2_score;
            document.getElementById("player_question").innerHTML = "Question turn :" + player2Name;
    
        }
    }
    else {
        alert("Oops try again")
    }
    document.getElementById("output").innerHTML = "";
    
}