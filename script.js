let numberOfRows = 16;
let initialNumber = 0;
let randomColor = '';

// Function who create the div grid
function showGrid (rows) {

    for (let i = 1; i < ((rows **2) + 1); i++) {
    const divGrid = document.createElement('div');
    divGrid.id = `grid${i}`;
    const container = document.querySelector('.container');
    divGrid.textContent = i;
    divGrid.style.cssText = `height : ${16 / rows}cm; width : ${16 / rows}cm; outline : 1px solid grey; display: flex; align-content: center;\
                            justify-content: center; align-items: center;`;
    container.style.cssText = `display : flex; flex-direction : row; flex-wrap : wrap; \
                            border : 2px solid grey; height: 16cm; width : 16cm;\
                            align-content : flex-start;`;
    container.appendChild(divGrid);
    initialNumber += 1
    };
};

const changeColor = function(numb, rows) {
    const allGridSelector = document.querySelector(`#grid${numb}`);
    allGridSelector.style.cssText =  `height : ${16 / rows}cm; width : ${16 / rows}cm; outline : 1px solid grey; display: flex; align-content: center;\
    justify-content: center; align-items: center; background-color: purple;`;
};


function randomTravel() {
    return(Math.floor(Math.random()*255))
}


function travel(){
for(let i = 1; i < 1500; i++) {
    setTimeout(function(){changeColor(iaTravel(),16);}, i*10);
  }}

let visitedDiv = [];
let startingPoint = 1;

function iaTravel () {
  
    let randomNumber = Math.floor(Math.random()*4);

    if (randomNumber === 0){
        if(startingPoint <= 240){
            if(!(visitedDiv.includes(startingPoint))){
                visitedDiv.push(startingPoint);
                return startingPoint += 16;
            }
        }
    }
    if (randomNumber === 1){
        if(startingPoint > 17){
            if(!(visitedDiv.includes(startingPoint))) {
                visitedDiv.push(startingPoint);
                return startingPoint -= 16;
            }
        }
    }
    if (randomNumber === 2){
        if(startingPoint <= 255){
            if(!(visitedDiv.includes(startingPoint))){
                visitedDiv.push(startingPoint);
                return startingPoint += 1;
            }
        }
    }
    if (randomNumber === 3){
        if(startingPoint > 2){
            if(!(visitedDiv.includes(startingPoint))){
            visitedDiv.push(startingPoint);
            return startingPoint -= 1;
            }
        }
    }

}



showGrid(16);
travel();
console.log(visitedDiv)
