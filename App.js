import React, {useState, useEffect} from 'react';

//  배열을 이용한 map함수 활용(반복) , useState , setInterval() , setTimeout()

const makeDate = () => {
  let data = [];
  for (let i=0; i<=50; i++){
    data.push(i) // push :뒤부터 데이터를 순차적으로 넣음 
  }
  return data;
}


const App = () => {
  const [minjung, setMinjung] = useState(makeDate);
  console.log(minjung);

  const map1 = minjung.map(x => x * 2); // 데이터 하나하나 곱하기2를 해줌. map은 반복함수
  console.log(map1);

  setInterval(() => {
    console.log('2초마다 실행됨')
  },2000) // 계속 2초마다 실행

  setTimeout(() => {
    console.log('2초 지남')
  },2000) // 한번만 실행되고 끝남


  return (
    <div>
      <ul>
        {
          minjung.map((item,index) => {
            return (
              <div key={index}>현재시간은 11시 25분 {item}초 입니다.</div>
            )
          })
        }
        </ul>
    </div>
  );
}

export default App;