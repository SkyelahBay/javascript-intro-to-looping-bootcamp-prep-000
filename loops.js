function forLoop(array){
  for(var i = 0; i < 25; i++){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}
function whileLoop(n){
  countdown = n;
  while(countdown > 0){
    countdown--;
  }
}

function doWhileLoop(array){
  maybeTrue = true;
  if(maybeTrue){
    do{
      array.pop();
    }while(array.length > 0);
  }
}