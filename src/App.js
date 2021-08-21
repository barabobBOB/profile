import react, { Component, component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = '최세연';
      return (
      <div class="App">
        <h3>안녕하세요.<br></br>
        저만의 끈질김을 바탕으로<br></br>
        고객의 만족도를 높이는<br></br>
        개발자, {name}입니다.</h3>
      </div>
    );
  }
}

export default App;
