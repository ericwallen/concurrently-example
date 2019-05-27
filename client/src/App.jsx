import React from 'react';
import logo from './logo.svg';
import './App.css';
import { log } from 'util';


const testapi = () => {
	fetch('/data')
	.then(data => data.json())
	.then(data => console.log(data))
};

function App() {
  return (
    <div className="App">
		<button onClick={testapi}>Test API</button>
    </div>
  );
};

export default App;
