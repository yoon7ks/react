import React, { Component } from "react";

class Counter extends Component {
  // constructor를 사용하지 않고 state의 초깃값을 셋팅하는 방법이다.
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state; // status 조회시 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          // onclick으로 호출 할 함수 지정
          onClick={() => {
            this.setState(
              {
                number: number + 1
              },
              () => {
                console.log("setStae 호출됨");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
