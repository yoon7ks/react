import React from "react";
import PropTypes from "prop-types";

// 함수작성시 function 사용 대신에 () => {} 사용함!

// 일반 함수는 자신이 종속된 객체를 this로 가리키고,
// 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.
// const triple = (value) => value * 3;
// 비구조화 문법 사용
const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      안녕하세요. 제 이름은 {name} 입니다. <br />
      children 값은 {children}
      입니다.
      <br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름"
};

// name은 무조건 String으로 전달되어야 한다는 것을 의미한다.
// 다른 형으로 보내면 에러발생!
MyComponent.propTypes = {
  name: PropTypes.string,
  // isRequired를 사용해 필수 propTypes를 설정
  favoriteNumber: PropTypes.number.isRequired
};

// 작성한 코드 내보내기
export default MyComponent;
