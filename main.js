console.log("this is a test")
//DECLARE SOME GLOBALS FOR LATER PROCUREMENT FROM THE DOM
let character = "*";
let space = " ";
let height = 7;
let tree = "";

function printSpaces (height){
  for (let spacesLine=0; spacesLine < height; spacesLine++)
    tree += space;
    console.log("inside printSpaces for loop");
}

function printAsterisks (height, line){
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

  tree += "\n";
  console.log("inside the createTree function")
}
buildAtrunk();
console.log("here follows the tree:", tree)
}

createTree (height);
// Invoke the functio
console.log("this is the end of the file");
