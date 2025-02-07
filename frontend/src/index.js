import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './pages/Dashboard';
import BotControlPanel from './components/BotControlPanel';

const App = () => (
  <div>
    <Dashboard />
    <BotControlPanel />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));