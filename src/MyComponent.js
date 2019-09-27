import React from "react";

// 함수작성시 function 사용 대신에 () => {} 사용함!

// 일반 함수는 자신이 종속된 객체를 this로 가리키고,
// 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
// const triple = (value) => value * 3;
const MyComponent = ({ name, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름"
};

// 작성한 코드 내보내기
export default MyComponent;
