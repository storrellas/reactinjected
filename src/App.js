import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }




function App() {
    const imgURL = 'https://www.creativefabrica.com/wp-content/uploads/2019/03/Coffee-cup-icon-by-LeisureProjects-580x387.jpg'
    const [learnMore, setLearnMore] = useState(true);
    return (
      <div className="App" style={{ background: '#929FB8', height: '200px' }}>
        <div class="w-50 h-100 d-flex justify-content-center flex-column" style={{ margin: "0 auto"}}>
          <div>FREE ORIGIN MUGS & CHOCOLATES</div>
          <div>WITH COFFEE PURCHASE</div>
          <div>VERTUO: ORIGIN2022 | ORIGINAL: ORIGIN22</div>
          <div class="mt-3 d-flex justify-content-center" style={{ height: '80px'}}>
            {learnMore?
            <div role="button" class="p-3 ms-3 btn-nespresso d-flex align-items-center" 
              style={{background: "white", color:"black", maxWidth: "200px"}}
              onClick={ () => setLearnMore(!learnMore)}>
              Learn More
            </div>
            :
            <img role="button" class="h-100" src={imgURL} onClick={ () => setLearnMore(!learnMore)}></img>
            }
          </div>
        </div>
      </div>
    );
  }

export default App;
