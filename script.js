 
 function ball1(ball2){
   setTimeout(()=>{
    console.log(" the ball one reached the end of hill");
    ball2(ball3)
   },2000)
 }

 function ball2(ball3){
  setTimeout(()=>{
   console.log(" the ball  two reached the end of hill");
   ball3()
  },1000)
}

function ball3(){
  setTimeout(()=>{
   console.log(" the ball three reached the end of hill");
  },3000)
}

ball1(ball2)
 


