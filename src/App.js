import './App.css';
import TodoApp from './components/todo/TodoApp.jsx'

//!!! import 시 중괄호를 사용하지 않으면 무조건 default export component가 보인다.
// component return() 여러 줄이면 tag 하나로 묶여야 한다.
//오직하나만 export default 가능
// function 사용 
// jsx - component 대문자 
// jsx - html tag 소문자

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
