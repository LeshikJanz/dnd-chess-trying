import * as React from 'react';
import './App.css';
import Board from './modules/Board/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board knightPosition={[1, 7]} />
      </div>
    );
  }
}

export default App;
