import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  // 컴포넌트 태크 사이에 내용을 보여주는 props가 children이다.
  render() {
    return (

      <div>

        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
              맨 밑으로
        </button>

      </div>

    );
  }
}

export default App;
