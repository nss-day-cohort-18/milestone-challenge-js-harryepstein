console.log("this is a test")
//DECLARE SOME GLOBALS FOR LATER PROCUREMENT FROM THE DOM
let character = "*";
let space = " ";
let height = 0;
let tree = "";

let button = document.getElementById('button');

button.addEventListener('click', function(){
  let characterInput = document.getElementById("character");
  let heightInput = document.getElementById("height");
  console.log('characterInput', characterInput, 'heightInput', heightInput)

  height = heightInput.value;
  character = characterInput.value;
  console.log('height', height, 'character', character);
  createTree(height);
})

function printSpaces (height){
  for (let spacesLine=0; spacesLine < height; spacesLine++)
    tree += space;
    console.log("inside printSpaces for loop");

}

function printAsterisks (height){

  for (let asteriskLine=0; asteriskLine < height; asteriskLine++)

    tree += character;
    console.log("inside the printAstersk for loop");
}

function buildAtrunk (){
  tree += `    *****\n    *****\n    *****\n    *****\n`;
}
//tree is an empty string

function createTree  (height){
 for (let line = 0; line < height; line++) {

  printSpaces (height-line)
  printAsterisks(line)
  printAsterisks(line-1)
  if (line = height) {
  baseLength = (printAsterisks(line).length + printAsterisks(line-1).length)
}
  tree += "\n";
  console.log("inside the createTree function")
}
buildAtrunk();
console.log(tree);
}

// Invoke the functio
console.log("this is the end of the file");
