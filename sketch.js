var input1, input2, input3;
var head1, head2, head3;
var b1;

function setup() {
  createCanvas(600, 400);
  input1 = createInput();
  input1.position(20, 200);

  input2 = createInput();
  input2.position(200, 200);

  input3 = createInput();
  input3.position(380, 200);

  head1 = createElement("h4", "Enter first num");
  head1.position(20, 150);
  head2 = createElement("h4", "Operator");
  head2.position(200, 150);
  head3 = createElement("h4", "Enter third num");
  head3.position(380, 150);

  b1 = createButton("Compute");
  b1.position(200, 280);
  b1.mousePressed(compute);



  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background(200, 10, 200);

}


function compute(){
  var sub1 = parseInt(input1.value());
  var sub2 = input2.value();
  var sub3 = parseInt(input3.value());

  switch(sub2){
    case "+":
      console.log(sub1+sub3);
      break;
    case "-":
      console.log(sub1-sub3);
      break;
    case "/":
      console.log(sub1/sub3);
      break;
    case "*":
      console.log(sub1*sub3);
      break;
    case "%":
      console.log(sub1%sub3);
      break;
    case "**":
      console.log(sub1**sub3);
      break;
  default:
    console.log("Not a valid operator")

  }
}