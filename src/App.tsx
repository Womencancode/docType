import React from 'react';
import './styles/App.css';
import ColorPicker from './components/ColorPicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h3>DocType task : Update Color of circle</h3>
      <ColorPicker/>
      </header>
    </div>
  );
}

export default App;
