import React, {useState, useEffect} from 'react';



function Example(){
  const [count , setCount] = useState(0); // count의 state

  useEffect(()=>{
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트함
    document.title= `You click ${count} times`;
  });

  console.log(count);

  //onClick에서 바로 함수가 실행되게끔 만들어줌  const 변수 = () =>{ setCount(count + 1)} 이랑 같음 

  return(
    <div>
      <p>You clicked {count} times</p> 
      <button onClick={() => setCount(count+1)}>   
        Click me 
      </button>
    </div>
  );
}

export default Example;