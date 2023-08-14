import { useState,useEffect } from "react";
import Extra_car from './fast_car';

var sc=document.getElementById('score');

function All_car(){
    var [button,buton_value]=useState(0);
    var [animation,animation_value]=useState("infinite")
    var [over_message,massage]=useState(false);

       var [a,avalue]=useState((Math.random()*70));
       var [b,bvalue]=useState((Math.random()*70));
       var [c,cvalue]=useState((Math.random()*70));
       var [d,dvalue]=useState((Math.random()*70));
       var [e,evalue]=useState((Math.random()*70));
       var [f,fvalue]=useState((Math.random()*70));
       var [g,gvalue]=useState((Math.random()*70));

       function checkCollision() {
         const array = document.getElementsByClassName('redcar');
         const mx = document.getElementById('main').getBoundingClientRect().x;
         const my = document.getElementById('main').getBoundingClientRect().y;
         for (let i = 0; i < array.length; i++) {
              
           const x = array[i].getBoundingClientRect().x;
           const y = array[i].getBoundingClientRect().y;
           
           if (Math.abs(mx - x)<= 35 &&
            Math.abs(my - y) <= 30) {
             console.log("GAME OVER!");
             animation_value('');
             massage( 
                true);
             }}};
       
  
  
  
    useEffect(() => { 
      const interval = setInterval(checkCollision, 60);
  
      return ( ) => clearInterval(interval);

      

    }, []);
  
    
  
    function Restart(){
      animation_value('infinite');
      buton_value(0);
      massage(false);
    }




       function Update_cars(){

        avalue((Math.random()*70));
        bvalue((Math.random()*70));
        cvalue((Math.random()*70));
        dvalue((Math.random()*70));
        evalue((Math.random()*70));
        fvalue((Math.random()*70));
        gvalue((Math.random()*70));
        buton_value(button+5)
        
        // var ee=sc.innerText
        // var s=parseInt(ee,10)+5
        // sc.innerText=s
        // return(console.log(ee))
          }
    
    return((<div> 
     

<div style={{display:"flex"}}>
                <div style={{ backgroundColor:"black",
                width:'fit-content',
                 position:'relative',
                     zIndex:"10",
                     marginLeft:"30vw",
                         }}>score:{button}
                        
                         </div>
                         

                 
        </div>



      <section style={{display:"flex"}}>
      <Extra_car animation/>
   <div  className='redcar'
    
     style={{padding:(40 +"px "+15+"px"),
      position:'absolute',
      borderRadius:"30px",
      animation: "car-animation "+(5)+"s "+animation,
      backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
     marginLeft:(a+"vw"),
     marginTop:(-8)+"vh",
     }}
     onAnimationIteration={Update_cars}

     > 
  </div>
  
  <div className='redcar'
     style={{padding:(40 +"px "+15+"px"),
  position:'absolute',
  borderRadius:"30px",
  
  animation: "car-animation "+(5)+"s "+animation, 
   backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
  marginLeft:(b+"vw"),
  marginTop:(-20)+"vh",}}> 
  </div>


  <div className='redcar'
    
     style={{padding:(40 +"px "+15+"px"),
  position:'absolute',
  borderRadius:"30px",
  animation: "car-animation "+(5)+"s "+animation, 
   backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
  marginLeft:(c+"vw"),
  marginTop:(-40)+"vh",}}> 
  </div>
  <div className='redcar'
    
     style={{padding:(40 +"px "+15+"px"),
  position:'absolute',
  borderRadius:"30px",
  animation: "car-animation "+(5)+"s "+animation, 
   backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
  marginLeft:(f+"vw"),
  marginTop:(-70)+"vh",}}> 
  </div>
  <div className='redcar'
    
    style={{padding:(40 +"px "+15+"px"),
 position:'absolute',
 borderRadius:"30px",
 animation: "car-animation "+(5)+"s "+animation, 
  backgroundColor:"rgb("+Math.random()*300+','+Math.random()*300+','+ Math.random()*300+')',
 marginLeft:(g+"vw"),
 marginTop:(-90)+"vh",}}> 
 </div>


<button id="restart" onClick={Restart}>Restart</button>
{/* <div style={{
   alignItems:"center",
   textAlign:"center" ,
}}>{ 
         over_message?(<div style={{
            
            marginTop:"30vh",
            backgroundColor:"red",
            padding:"100px 150px"}}>
            <h2 style={{width:"190px"}} >Game Over!</h2>
             <button id="again" style={{width:"90px"}} onClick={Restart}> Start</button>

         </div>):(<div style={{
            
            marginTop:"30vh",
            backgroundColor:"rgba(255, 144, 213, 0)",
            padding:"10vh 20vw"}}>
            
            
         </div>)
      }
            
</div> */}

<div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {over_message ? (<div
              style={{
                backgroundColor: "red",
                padding: "100px 150px",
                borderRadius: "10px",
              }}
            >
              <h2 style={{ width: "190px" }}>Game Over!</h2>
              <button
                id="again"
                style={{ width: "90px" }}
                onClick={Restart}
              >
                Play Again!
                </button>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "rgba(255, 144, 213, 0)",
                padding: "10vh 20vw",
              }}
            ></div>
          )}
        </div>

</section>
</div>
    
  ))
  }
  
// function All_car(){
    
//     return((
//     <div>
//       <Redcar />
      
//     </div>
//           ))}
export default All_car;