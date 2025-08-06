import React from 'react';
import viteLogo from '/vite.svg';
import TodaysPlan from './03/TodaysPlan';
import ChildComponent from './03/ChildComponent';
import BooleanComponent from './03/BooleanComponent';

class App extends React.Component {
  render() {
    // usually passed props are assigned into variables
    const array = [1, 2, 3];
    const obj = { name: 'Gapdol', age: 30};
    const node = <h1>This is a node</h1>;
    const func = () => { console.log('hello!'); };

    return (
    <div className="body">
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <div>Hello!</div>
      <TodaysPlan />
      {/* passing without variables */}
      {/* <ChildComponent
        boolValue = {true}
        numValue = {1}
        arrayValue = {[1, 2, 3]}
        objValue = {{name: 'Gapdol', age: 30}}
        nodeValue = {<h1>This is a Node</h1>}
        funcValue = {() => { console.log('message!');}}
      /> */}
      <ChildComponent
        boolValue = {true}
        numValue = {1}
        arrayValue = {array}
        objValue = {obj}
        nodeValue = {node}
        funcValue = {func}
      />
      {/* also, check how boolValue can be passed with not-explicit way */}
      <ChildComponent boolValue />      
      {/* undefined evaled as false so... */}
      <BooleanComponent bored />
      <BooleanComponent />
    </div>
    );
  }
}
export default App;