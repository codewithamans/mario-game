score = 0
value = true
document.onkeydown = (e)=>{
   console.log("key code is ",e.keyCode);
   if(e.keyCode==38 || e.keyCode==32){
       mario = document.querySelector('.mario')
       mario.classList.add('animate-mario')
       setTimeout(() => {
           mario.classList.remove('animate-mario')  
        }, 700);
    }
   if(e.keyCode==39){
       mario = document.querySelector('.mario')
       mariox= parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))

       mario.style.left = mariox + 120 +'px';
       mario.style.transform = "scaleX(1)"
       
    } 
    
   if(e.keyCode==37){
       mario = document.querySelector('.mario')
       mariox= parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))

       mario.style.left = mariox - 120 +'px';
       mario.style.transform = "scaleX(-1)"
       
    }
    if(e.keyCode==82){
        let game = document.getElementById('game')
        game.style.visibility = "hidden"
        dinosaur.classList.add('animate-dino')
        score=0
        updateScore(score)
    }
    
}
setInterval(() => {
    mario = document.querySelector('.mario')
    dinosaur = document.querySelector('.dinosaur')
    let game = document.getElementById('game')
  
    
    mx= parseInt(window.getComputedStyle(mario,null).getPropertyValue('left'))
    my= parseInt(window.getComputedStyle(mario,null).getPropertyValue('bottom'))
    dx= parseInt(window.getComputedStyle(dinosaur,null).getPropertyValue('left'))
    dy= parseInt(window.getComputedStyle(dinosaur,null).getPropertyValue('bottom'))
    
    offsetX = Math.abs(mx-dx)
    offsetY = Math.abs(my-dy)
    console.log(offsetX,offsetY);
    if(offsetX<160 && offsetY<160) {
        // gameover.style.visibilty = "visible"
       game.style.visibility = "visible"
        dinosaur.classList.remove('animate-dino')
        mario.style.left = "15px"
    }
    else if(value && offsetX<250 ){
        score +=100
        updateScore(score)
        value = false
        setTimeout(() => {
            value= true
        }, 1000);
    }   

    

    
}, 100);

function updateScore(score) {
   let Score = document.getElementById('score')
   Score.innerHTML = "YOUR SCORE : " + score
    
    
}      