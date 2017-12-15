import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class WebStructure extends React.Component{
    render(){
      return (
          <div>
            <div id = "topLeft">
                <div id = "topHalf">
                    <div class="chart-container">
                        <canvas id="chart"></canvas>
                    </div>
                </div>
                
                <div id = "bottomHalf">
                        <div id = "second-chart-container">Loading Chart....</div>
                    </div>
            </div>
             
            <div id = "topRight">
                <img src = "images/logo.png" alt = "Scrabble Logo" className = "logo"></img>
                <h1>Tornament Data</h1>
                <br></br>
                <p>This site is designed to show the various tornament data from December 1998 to January 1999</p>
            </div>
        
            <div id = "bottom">
            </div>
        </div>
      );
    }
  }

ReactDOM.render(<WebStructure />, document.getElementById('root'));
registerServiceWorker();
