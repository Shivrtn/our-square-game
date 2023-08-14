import throttle from 'lodash.throttle';
import { useState } from "react";

function Onclick(){
   

   

    

function run(event) {

   
    try{  
    var main= document.getElementById('main');
    var ml=main.style.marginLeft;
    ml=parseInt(ml.replace('vw',''));
    function Turn_right(){
        if (ml<62){
            main.style.marginLeft=(ml+3)+'vw'
            }
                }
               
          
    function Turn_left(){
        if (ml>2){ 
            main.style.marginLeft=(ml-3)+'vw'
            }
                  }

    
   
    
    if (event.key === 'ArrowLeft') {
Turn_left()                      // Perform your action for left arrow key
    } else if (event.key === 'ArrowRight') {
Turn_right()                      // Perform your action for right arrow key
    }}
    catch(err){console.log(err)}
  };
  document.addEventListener('keydown', run);
}





  export default Onclick;