import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람1" },
    { id: 2, text: "눈사람2" },
    { id: 3, text: "눈사람3" },
    { id: 4, text: "눈사람4" }
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId를 id로 설정
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id); // 해당 id를 없애고 싶을때 filter사용
    setNames(nextNames);
  };

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
