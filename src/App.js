import './App.css';
import { Component } from 'react';
import AllComponent from './components/learning-examples/AllComponent';
//!!! import 시 중괄호를 사용하지 않으면 무조건 default export component가 보인다.
// component return() 여러 줄이면 tag 하나로 묶여야 한다.
//오직하나만 export default 가능
function App() {
  return (
    <div className="App">
      <AllComponent/>
    </div>
  );
}

// function 사용 
// jsx - component 대문자 
// jsx - html tag 소문자

function SecondComponent() {
  return (
    <div class="SecondComponent">second Component</div>
  )
}

class ThirdComponent extends Component {
  render() {
    return (
      <div class="ThirdComponent">Third Component</div>
    )
  }
}

export default App;
