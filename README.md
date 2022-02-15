**React(리액트)**
- 페이스북에서 만든 자바스크립트 라이브러리
- 페이스북에서 자체적으로 사용, 많은 웹 어플리케이션에 적용
- 유저 인터페이스를 만드는 라이브러리
- MVC등에서 view 레이어를 담당
- vue.js (라이브러리.가벼움), angular.js(프레임워크 .무거움)등과 비슷
- React(웹 어플리케이션), React Native(모바일 어플리케이션), React Electron(PC 어플리케이션)

**리액트의 특징**

- 컴퍼넌트로 이루어진 UI 라이브러리
->컴퍼넌트? 레고처럼 조각조각만들어서 합쳐서 사용하는것
- 컴퍼넌트는 한 가지 이상의 기능을 수행하는 UI단위
- 리액트 어플리케이션은 꼭 하나이상의 컴퍼넌트로 이루어져 있음
- 최상위 컴퍼넌트는 Root
- Virtual Dom tree를 가지고 있음

**리액트의 사용**

1. cdn방식 : 유지보수, 원하는 라이브러리만 사용!
    - 구글에서 react cnd으로 검색
        
        <script crossorigin src="[https://unpkg.com/react@17/umd/react.development.js](https://unpkg.com/react@17/umd/react.development.js)"></script>
        <script crossorigin src="[https://unpkg.com/react-dom@17/umd/reactdom.development.js](https://unpkg.com/react-dom@17/umd/react-dom.development.js)"></script>
        
    - 구글에서 babel cdn으로 검색
        
        <script src="[https://unpkg.com/@babel/standalone/babel.min.js](https://unpkg.com/@babel/standalone/babel.min.js)"></script>
        

✔ babel
과거 브라우저에 맞도록 스크립트를 자동으로 변환(트랜스 컴파일러)

1. create react-app : 리액트 프로젝트 생성 (프로젝트 생성할때 이미 라이브러리 다 만들어줌)
<필요한 환경>
- 터미널(cmder)
- node.js
- 비주얼스튜디오 코드
마켓에서 Reactjs code snippets 설치(문법을 잡아주는 툴)
-크롬
크롬웹스토어에서 react developer tools 확장프로그램 설치 (리액트로 만든 사이트 구별가능, f12키 누를시 리액트 트리를 볼수있음)

```jsx
 npx create-react-app 프로젝트명
```

**리액트 프로젝트 구조(cra)**
.gitignore
gitignore 파일안에 기술한 파일들은 github에 푸시하지 않음
package.json
npm에서 버전을 관리할 때 프로젝트에서 외부적으로 쓰고 있는 라이브러리의 버전들과 스크립트들을 명시

[README.md](http://readme.md/)
github에서 프로젝트에 대해 설명하는 파일

public 디렉토리
사용자에서 배포할때 외부적으로 보여지는 리소스들을 포함

src 디렉토리
리액트 소스코드를 포함

! 라이브러리 : 도구
! 프레임워크 : 집으로 따지면 건축물 뼈대! 원하는걸 채워서 만들어가면됌


**컴퍼넌트(Component)**

- 리액트에서 레고 조각처럼 조합하여 프로그래밍 할 수 있도록 만든 모듈단위
- 함수형(버전 16.8, 동적), 클래스형

```jsx
  import React from react'

  class LikeButon extends Component {
      state = { //state안에 들어있는 프러퍼티는 특별한 영역. 바뀔때마다 자동으로 render함수가 호출됨(화면이 자동으로 계속 갱신된다)
          numberOfLikes: 0,
      };

      render() {
          return <button> //적어야하는 필수사항
          {this.state.numberOfLikes}
          </button>;
      }
  }
  export default LikeButton;
```

- **JSX 태그**
- facebook에서 만든 마크업
- JSX -> javascript로 변환
- 태그는 꼭 닫아야 함
- 두개 이상의 태그는 하나의 태그로 감싸져야 함 (프레그먼트 태그를 사용할 수 있음)

```jsx
<div>
    <div>하나</div>
    <div>둘</div>
    <div>셋</div>
</div>
```

- **프레그먼트 태그**
-- 어디 자식으로 있다면 div가 최상단에 있을땐 css같은게 먹히는데 자식으로 들어가는경우 안먹히는경우가 있음. 그래서 이 태그를 쓰면 마치 div가 최상단위치에 있는것처럼 만들어줌

```jsx
<>
<div>하나</div>
<div>둘</div>
<div>셋</div>
</>
```

- 주석은 {/* */} 표현
- css 속성은 카멜케이스 표기법
background-color -> backgroundColor
- css 경우 중괄호 2개로 감싸야함!!


🎁**props(properties)**
- 컴퍼넌트에 매개변수를 전달

```jsx
<컴퍼넌트명 속성="값"></컴퍼넌트명>

function 컴퍼넌트명(props){
    return
    <div>{props.속성}</div>
}
```

✔ 삼항연산자를 사용하여 조건부 렌더링
1. 조건식이 true인 경우와 false인 경우를 모두 표혀
{조건식 ? true 인 경우 : false인 경우}
2. 조건식이 true인 경우만 표현
{ 조건식 && true인 경우}

✔ defaultProps
- 컴퍼넌트에 props를 지정하지 않았을 때 기본값을 설정

props.children
- 컴퍼넌트 태그 사이에 넣은 값을 조회

```jsx
function 컴퍼넌트명({ children}){
    return(
        <div>
        {childeren}
        </div>
    )
}
```















