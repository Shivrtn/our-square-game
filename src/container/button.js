import { useState } from "react";
function Score(){ 

var [button,buton_value]=useState(0);

  
    return(<div style={{display:"flex"}}>
                <div style={{ backgroundColor:"black",
                width:'fit-content',
                 position:'relative',
                     zIndex:"10",
                     marginLeft:"30vw",
                         }}>score 
                         <h2 id ="score">0</h2>
                        
                         </div>
                         

                 
        </div>
    )
        }
export default Score;