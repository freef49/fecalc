/**
 * Created by Steve on 14/02/2016.
 */


var text = "";
var equation = [];


$(document).ready(function(){

    $("button.number").click(function(){
        text = $(this).text() + text;
        $("textarea").val(text);
    });
    $("button.ac").click(function(){
        text = "";
        $("textarea").val(text);
        equation = [];
    });
    $("button.ce").click(function(){
        text = "";
        $("textarea").val(text);
        equation.pop();
    });
    $("button.percentage").click(function(){
        number = parseFloat(text)/100;
        text = number.toString();
        equation.push(text);
        text = "";
        $("textarea").val(text);
    });

//                add current text area to equation
//                clear textarea
//                add operator to equation
//                  validate operation

    $("button.operator").click(function(){
        textarea = $("textarea").val();
        if ((equation[equation.length - 1] === "+" || "-" || "*"|| "/") && (textarea === "")){
                equation.pop();
                equation.push($(this).text())
        }
        else{
            equation.push($("textarea").val());
            text = "";
            $("textarea").val(text);
            equation.push($(this).text())

        }
    });
    // DONE     push val of text area to equation
    // DONE     loop through equation and put into a new varable
    // DONE     convert numbers into floats or ints
    //  DONE    convert operators into ???
    //
    $("button.equals").click(function() {
        textarea = $("textarea").val();
        if ((equation[equation.length] === "+" || "-" || "*"|| "/")&&( textarea === "")){
            equation.pop();
            equals();
        }
        else {
            equation.push($("textarea").val());
            text = "";
            $("textarea").val(text);
            equals();
        }
    });

});

function equals(){
    var sum = parseFloat(equation[0]);

    for(i = 2; i < equation.length; i+=2) {
        var operator = equation[i-1];

        switch (operator){
            case "+":
                sum = sum + parseFloat(equation[i]);
                break;
            case "-":
                sum = sum - parseFloat(equation[i]);
                break;
            case "*":
                sum = sum * parseFloat(equation[i]);
                break;
            case "/":
                sum = sum / parseFloat(equation[i]);
                break;
        }
    }

    text = sum.toString();
    $("textarea").val(text);
}
