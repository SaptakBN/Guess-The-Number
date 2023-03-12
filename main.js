
let x = Math.floor((Math.random() * 100) + 1);
let chances = 0;

function printInput() {
    let number = document.getElementById("number").value;
    number = Number.parseInt(number);

    if (number < x) {
        chances++;
        document.getElementById("output").innerHTML = "The Number is higher";
    }
    else if (number > x) {
        chances++;
        document.getElementById("output").innerHTML = "The number is lower";
    }
    else if(x==number){
        chances++;
        document.getElementById("output").innerHTML = "";
        document.getElementById("times").innerHTML = "You guessed the number in " + chances + " attempts.";
        $(document).ready(function () {
            $("#myModal").modal("show");
        });
    }
    else{
        document.getElementById("output").innerHTML = "";
        $(document).ready(function () {
            $("#myModal2").modal("show");
        });
    }
}

var input = document.getElementById("number");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

