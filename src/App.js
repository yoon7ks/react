import React, { Component } from "react";
import IterationSample from "./IterationSample";

class App extends Component {
  // 컴포넌트 태크 사이에 내용을 보여주는 props가 children이다.
  render() {
    return (
      <ul>
        <IterationSample />
      </ul>
    );
  }
}

export default App;
