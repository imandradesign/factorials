$(document).ready(function(){

  $(".facto-form form").submit(function(event){
    var numberInput= parseInt($("input#number").val());
    var resultValue = numberInput;
    var factorialFun = function(numberInput){
      for (i = 1; i < numberInput; i++) {
        resultValue = resultValue * i;
      }
    }

    event.preventDefault();
    factorialFun(numberInput);

    $("#answer").text(resultValue);
  });
});
