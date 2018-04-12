let forLoop = [];
for(var i = 0; i < 25; i++){
  forLoop.push(`I am ${i} strange loop${i === 0 ? '' : 's'}."`)
}

function whileLoop(n){
  while(n !== 0){
    n--;
  }
}

function doWhileLoop(array){
  if(maybeTrue){
    do{
      array.pop();
    }while(array.length > 0);
  }
}