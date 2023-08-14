import { useState,useEffect } from "react";
var sc=document.getElementById('score');

function Extra_car(anim="infinite"){
    var [button,buton_value]=useState(0);
    var [animation,animation_value]=useState(anim)
    

       var [a,avalue]=useState((Math.random()*70));
       var [b,bvalue]=useState((Math.random()*70));
       var [c,cvalue]=useState((Math.random()*70));
       var [d,dvalue]=useState((Math.random()*70));
      

  
    




       function Update_cars(){

        avalue((Math.random()*70));
        bvalue((Math.random()*70));
        cvalue((Math.random()*70));
        dvalue((Math.random()*70));
        
    
    
    return((<div> 
      <section style={{display:"flex"}}>
<div  className='redcar'
    
     style={{padding:(40 +"px "+15+"px"),
      position:'absolute',
      borderRadius:"30px",
      animation: "car-animation "+(3)+"s "+animation,
      backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
     marginLeft:(a+"vw"),
     marginTop:(-8)+"vh",
    //  onAnimationEnd;
     }}
     onAnimationIteration={Update_cars}

     > 
  </div>
  
  <div className='redcar'
     style={{padding:(40 +"px "+15+"px"),
  position:'absolute',
  borderRadius:"30px",
  
  animation: "car-animation "+(3)+"s "+animation, 
   backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
  marginLeft:(b+"vw"),
  marginTop:(-60)+"vh",}}> 
  </div>


  <div className='redcar'
    
     style={{padding:(40 +"px "+15+"px"),
  position:'absolute',
  borderRadius:"30px",
  animation: "car-animation "+(3)+"s "+animation, 
   backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
  marginLeft:(c+"vw"),
  marginTop:(-40)+"vh",}}> 
  </div>
  <div className='redcar'
    
     style={{padding:(40 +"px "+15+"px"),
  position:'absolute',
  borderRadius:"30px",
  animation: "car-animation "+(3)+"s "+animation, 
   backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
  marginLeft:(d+"vw"),
  marginTop:(-20)+"vh",}}> 
  </div>
 


</section>
</div>
    
  ))
  }}


export default Extra_car;