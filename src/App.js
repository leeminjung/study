import axios from 'axios';
import React, {useState, useEffect} from 'react';


const Main = () => {

    const [data,setData] = useState(); //성공적으로 요청이 됐을 때 데이터를 저장하는 스테이트
    const [loading, setLoading] = useState(false); // 로딩상태를 관리하는 스테이트

// useEffect가 하는 동작은 내가 원할 때 useEffect 안에 있는 콜백함수를 실행할 수 있음
// callback함수는 함수를 리턴하는 함수임
//useEffect는 함수임
// useEffect(() => {}, [])
// (익명함수() => {}) 콜백함수
// [] defendency빈 배열을 넣으면, 첫 렌더링시 한번만 useEffect가 실행되어
// [state] 이렇게 넣으면 state가 바뀔 때 마다 실행이 되어
//밑에 로직에서는 []를 넣었으니까 첫 렌더링시 한번만 실행이됨

    //useEffect async, await 못붙여서
    // axios는 promise를 반환함
    // 성공, 실패 
    useEffect(() => { //원하는 타이밍에 실행시킬수 있음 useEffect
        const getData = async() => {
            const {data} = await axios.get('https://yts.mx/api/v2/list_movies.json?images=true')
            setData(data)
            setLoading(true)
        }
        getData()
    }, []) // []처음한번만 실행됨 ! 렌더링 됐을때 여기서 []가 조건임 

// useEffect 내가 원하는 타이밍에 실행시킬수 있음


    console.log(data)

    return (
        <div>
            <ul>
                {
                    loading === false
                    ?<div>로딩중입니다....</div>
                    :data.data.movies.map((item,idx) => {
                        return (
                            <ul key={idx}>
                                <li>{item.title}</li>
                                <img src={item.large_cover_image} />
                            </ul>

                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Main;