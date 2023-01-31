import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';

function App() {  
  return (
    <div>
      <Router>
        <header>
          <h1>PROGRAM TASK MANAGER</h1>
        </header>
        
        <main>
          <article>
            <Route path="/" exact><Home /></Route>
          </article>
        </main>

        <footer>
          <p>&copy; 2022 Kristin Eberman<br>
          </br>Oregon State University<br>
          </br>CS361 Winter 2023</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
