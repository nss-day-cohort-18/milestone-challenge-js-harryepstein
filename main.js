
//DECLARE SOME GLOBALS FOR LATER PROCUREMENT FROM THE DOM
let character = "*";
let space = " ";
let height = 0;
let tree = "";

/*
POSSIBLE COWSAY MODUEL INTEGRATION
*/




document.addEventListener('keypress', function(e){
  let characterInput = document.getElementById("character");
  let heightInput = document.getElementById("height");
  height = heightInput.value;
  character = characterInput.value;
  if (13 == e.keyCode) {
    if (height === "" || character === ""){
      window.alert("Complte all fields");
  }
else{
  createTree(height);}
  }
})

let button = document.getElementById('button');

button.addEventListener('click', function(e){
  let characterInput = document.getElementById("character");
  let heightInput = document.getElementById("height");
  height = heightInput.value;
  character = characterInput.value;

    if (height === "" || character === ""){
      window.alert("complete all fields");
    }
  else{
    console.log('test');
  createTree(height);}

})

function printSpaces (height){
  for (let spacesLine=0; spacesLine < height; spacesLine++)
    tree += space;

}

function printAsterisks (height){

  for (let asteriskLine=0; asteriskLine < height; asteriskLine++)

    tree += character;
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
  // if (line = height) {
  // baseLength = (printAsterisks(line).length + printAsterisks(line-1).length)
  tree += "\n";
}
buildAtrunk();
console.log(tree);
let treeDiv = document.getElementById("tree");
treeDiv.innerHTML = tree;
}

// Invoke the functio
