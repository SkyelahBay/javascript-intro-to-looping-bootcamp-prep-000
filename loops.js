function forLoop(array){
  let arrayName = array;
  for(var i = 0; i < 25; i++){
    arrayName.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
}
function whileLoop(n){
  countdown = n;
  while(countdown > 0){
    console.log(countdown--);
  }
  return 'done'
}

function doWhileLoop(array){
  
}