import { useState } from "react";
import { ReactDOM } from "react-dom";
import Onclick from "./onpress";

function Main_car(){

    var [left_right,lr_value]=useState(30) ;
    function Turn_right(){
        if (left_right<62){
            lr_value(left_right+3)
            }
                }
          
    function Turn_left(){
        if (left_right>2){ 
            lr_value(left_right-3)
            }
                  }
                  
                

    return((  

            <div>    
                
              <nav  className='main_car' id="main" style={{ 
                position :"relation" ,
                zIndex:"20",
                marginLeft: left_right+"vw"}}>
              </nav>
    
              <div >
                 <div className='bottom'>
                    <button className='leftbutton' onClick={Turn_left} 
                    
                    ></button>
                    <button className='rightbutton'
                    onClick={Turn_right}
                     ></button>
                  </div>
                  <Onclick/>
              </div>
            </div>   
            
                    ))}
                    

export default Main_car;