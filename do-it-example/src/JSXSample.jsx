import React from 'react';
import viteLogo from '/vite.svg';
import TodaysPlan from './03/TodaysPlan';

class App extends React.Component {
  render() {
    return (
    <div className="body">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <div>Hello!</div>
      <TodaysPlan />
    </div>
    );
  }
}
export default App;