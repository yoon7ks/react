import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }

  // construtor를 사용하지 않고 babel의 tranform-class-properties문법으로
  // 화살표 함수 형태로 메서드 정의 할 수 있음
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h1>event 연습</h1>
        <input
            type="text"
            name={"username"}
            placeholder="사용자명"
            value={this.state.username}
            onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무것이나 입력해보시오."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
