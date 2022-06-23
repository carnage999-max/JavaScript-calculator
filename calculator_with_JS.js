console.log("Calculation Logs");
while (true){

var operation;

operation = prompt("Hello...\n You're now using the calculator...\n \nEnter the opertion you want to perform in the prompt below \n '1' for Addition \n '2' for Subtraction \n '3' for Multiplication \n '4' for Division\n \tWhat operation do you want to perform?");

if (operation === '1'){
  var add1, add2;
  add1 = Number(prompt("Enter your first number"));
  add2 = Number(prompt("Enter your second number"));
  add_solution = add1+add2;
  console.log(`You added ${add1} and ${add2} and it resulted to ${add_solution}`);
  alert(`${add1} + ${add2} equals ${add_solution}`);
}

if (operation ==='2'){
  var sub1, sub2;
  sub1 = Number(prompt("Enter your first number"));
  sub2 = Number(prompt("Enter your second number"));
  sub_solution = sub1 - sub2;
 console.log(`You subtracted ${sub2} from ${sub1} and it resulted to ${sub_solution}`);
  alert(`${sub1} - ${sub2} equals ${sub_solution}`);
}

if (operation==="3"){
  var mult1, mult2;
  mult1 = Number(prompt("Enter your first number"));
  mult2 = Number(prompt("Enter your second number"));
  mult_solution = mult1 * mult2;
  console.log(`You multiplied ${mult1} by ${mult2} and it resulted to ${mult_solution}`);
  alert(`${mult1} * ${mult2} equals ${mult_solution}`);
}

if (operation==="4"){
  var div1, div2;
  div1 = Number(prompt("Enter your first number"));
  div2 = Number(prompt("Enter your second number"));
  div_solution = div1 / div2;
  console.log(`You divided ${div1} by ${div2} and it resulted to ${div_solution}`);
  alert(`${div1} / ${div2} equals ${div_solution}`);
}
else{
  alert("You've entered an invalid operation");
  console.log("You entered an invalid/non-existent operation");
}
var exit = prompt("Do you want to perform another calculation?\n Enter '0' to exit \n Enter '1' to continue");

if (exit === '0'){
  break;
}
else{
  continue;
}
}
