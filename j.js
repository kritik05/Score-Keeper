let display1 =  document.querySelector('#dis1')
let display2 =  document.querySelector('#dis2')
let btn1 =  document.querySelector('#btn1')
let btn2 =  document.querySelector('#btn2')
let resetG =  document.querySelector('#reset')

let select = document.querySelector('#Score')


let Gameover = false;
let score1 =0;
let score2 =0;
let winningS =0;

select.addEventListener('change',function(){
    winningS = parseInt(this.value)
    resetGame();
})

 // To increase the score by clicking

 btn1.addEventListener('click',function(e){
    if(!Gameover){
        score1++;
      if(score1 === winningS ) {
          Gameover = true
          btn1.disabled = true;
          btn2.disabled = true;}
      display1.textContent = score1;
     }
 })
btn2.addEventListener('click',function(e){
    if(!Gameover){
      score2++;
      if(score2 === winningS ) {
          Gameover = true
          btn1.disabled = true;
          btn2.disabled = true;}
      display2.innerHTML = score2;
    }
 })


 function resetGame(){
    Gameover = false;
    score1 =0;
    score2 =0;
    display1.textContent=0;
    display2.textContent=0;
    btn1.disabled = false;
    btn2.disabled = false;
 }
 resetG.addEventListener('click',resetGame)
 //TO increase the score without clicking

window.addEventListener('keydown',function(e){
        if(!Gameover){
            if(e.code==='ArrowUp') score1++;
          if(score1 === winningS ) {
              Gameover = true
              btn1.disabled = true;
              btn2.disabled = true;}
          display1.textContent = score1;
         } })

     window.addEventListener('keydown',function(e){
        if(!Gameover){
          if(e.keyCode===65)score2++;
          if(score2 === winningS ) {
              Gameover = true
              btn1.disabled = true;
              btn2.disabled = true;}
          display2.innerHTML = score2;
        }
     })



