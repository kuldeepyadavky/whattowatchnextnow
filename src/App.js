import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Main } from './Components/Main/MainComponent';

export function App() {
  return (
    <main>
      <BrowserRouter>
        <div className='App'>
          <Main />
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
