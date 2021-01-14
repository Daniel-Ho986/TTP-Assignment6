import './App.css';
import React, {Component} from 'react';
import ZipSearch from './components/ZipSearch';

class App extends Component {
  render(){
  return (
    <div className="App">
      <ZipSearch/>
    </div>
  );
}
}

export default App;
