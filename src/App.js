import './App.css';


import React from 'react';
import All_car from "./container/All_car";
import Main_car from './container/maincar';
// import Run from './container/Game_over';


   


function App() {
  alert('click on left and right to move squares or press right and left arrow of keyboard');
  document.addEventListener('gesturechange', function(event) {
    event.preventDefault();
  });
  
  return (



    <body className='body'>

     
      <header className='header'>
        <img className='logo1' src='https://www.bing.com/th?id=OIP.TLKTJDEq6qu4ECeo7LGkYwHaEu&pid=3.1&cb=&w=300&h=300&p=0' alt=''></img>
        <h2>Tinny cars</h2>
        <img className='logo2' src='https://www.bing.com/th?id=OIP.TLKTJDEq6qu4ECeo7LGkYwHaEu&pid=3.1&cb=&w=300&h=300&p=0' alt=''></img>
        </header>
      <nav className='nav'>
        <h1><a href='/#'>Login</a></h1>
        <h1><a>Home</a></h1>
        <h1><a>About</a></h1>
      </nav> 

      <div className='body'>
        <section className='road'>
        
        <section className='running_cars'>
            <All_car />
        </section>
          
          <Main_car/>
        </section>
      </div>
      <footer ><h4 >Created by<br/> <strong style={{color:'black'}}>Shiv</strong></h4></footer>

    </body>
    


    
    
  );
}

export default App;
