📚 Fastcampus - 한 번에 끝내는 React의 모든 것 초격차 패키지 Online.
☝ Part 1. React 기초

### DOM 다루기 / Element 생성하기 정리
- React / React-dom -> element 생성 / appendChild

### createElement()

React.createElement(
	type,
	[props],
	[...children]
)

### 서버 실행
- npm start

### 프로젝트 생성
- npx create-react-app [프로젝트 명]

### 라이브러리 다운로드
- npm install [라이브러리 명]

### CDN?
- Content Delivery Network
- 웹에서 사용되는 다양한 콘텐츠(리소스)를 저장하여 제공하는 시스템
- unpkg

### JSX와 Babel / JSX 다루기
- JSX -> React.creteElement 표현식 / JavaScript를 확장한 문법
- JS와 JSX 섞어 쓰기 → interpolation / 이미 HTML에서 쓰고 있던 방식

### Babel?
- JavaScript 컴파일러 / Jsx → JavaScript로 변환

### spread 연산자?
- spread = 펼치다, 퍼뜨리다
- {… } → 객체 혹은 배열을 하나하나 펼쳐서 가지고 올 수 있음
- spread {… 객체명} 을 이용하여 기존 객체는 건드리지 않고 새로운 객체를 만들 수 있음

### React.Fragment
- react에서는 최상단에 하나의 태그(부모)로 묶어줘야 하는데 이때 무의미한 <div> 사용을 하지 않기 위해서 <React.Fragment /> 혹은 <></>를 사용한다.
- React.Fragment는 코드 상에서는 묶어주지만 실제 HTML에서는 그려지지 않는다. (→ 부모로써 감싸주는 역할만 함)

### Element 찍어내기
- Function → 재사용 가능한 Element
- Custom Element → Upper case
- children 개수 제한 없음

### 리액트의 리랜더링
- 바닐라 JS의 경우 변경으로 인해 element를 전부 다시 그림
- React -> 변경 된 부분만 다시 그림 / 효율적인 리랜더링
- Virtual Dom -> 비교 시 활용

### React에서 Element
- element : 요소 / React 앱의 가장 작은 단위 (like tag)
- 불변 객체(immutable) → 변하지 않는 객체 → 전달/호출만 할 뿐….
- 변경 판단 및 반영은 리액트가 알아서 함
- 리액트의 비교 -> Reconciliation (재조정)
    - element type이 다른 경우 → 이전 트리를 버리고 완전히 새로운 트리를 구축
    - element type이 같은 경우 → 두 엘리먼트의 key를 먼저 비교한 뒤 속성을 확인하여, 동일한 내역은 유지하고 변경된 속성들(props)만 갱신

### 컴포넌트?
- DOM : 논리 트리
- 컴포넌트 : 앨리먼트의 집합
- use 로 시작하는 것을 hook이라고 한다.
- useState -> 상태 값을 관리해 주는 hook (상태 다루기)
- useEffect -> dependency array ("사이드 이펙트" 다루기)
- 사이드 이펙트 = 부작용 또는 부수 효과
- 훅들이 반복 -> custom Hook으로 (커스텀 훅 만들기)

### Hook Flow 이해
- hook flow -> hook들의 호출 타이밍
- update시 -> useEffect clean up / useEffect

### 상태 끌어올리기
- 형제 컴포넌트의 상태 궁금 -> 필요하면 부모로 lifting up
- Props dilling -> 과도한 lifting은 drilling을 야기

### Key와 Rerendering
- Key -> Value를 특정하는 이름 (유일)
- 재사용 -> key를 "제대로" 줘야 재사용 가능
- 제대로? -> 중복이 없고, 바뀌지 않는
- Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움
- Key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 함

### Data Fetch
- Fetch api -> 네트워크 통신 도구
- 상황별 핸들링 -> 로딩/데이터/에러

### component lifecycle
- constructor -> state 초기화 및 메서드 바인딩
- componentDidMount -> Dom 노드 초기화 및 데이터 Fetch
- componentWillUnmount -> 타이머 제거 및 요청 취소 및 구독 해제 (return으로 cleanUp 할 때 넣어주면 됨)
- Functional component -> hook으로 대부분 구현 가능

### 조건부 렌더링
- if -> if(condition){return A} else {return B}
- && -> condition && A // falsy 값 주의 ( 0 -> false)
- 삼항연산자 -> condition ? A : B
- 아예 그리고 싶지 않은 경우 -> return null;

### List
- map -> 배열의 개별 요소를 순회
- default key -> 안주면 react는 index를 쓴다 (warning O)
- 고유성 -> 형제 사이에서만 고유하면 됨
- key props -> key는 props로 넘어가지 않음

### Form
- Controlled component -> input의 value를 state로 관리
- 다중 입력 -> event.target.name (name 값 꺼내서 공통 함수로 사용)
- Uncontrolled Component -> form element 자체의 내부 상태 활용
- defaultValue, ref -> 기본값 / value 확인

### Hook
- 최상위에서만 Hook 호출해야함 (반복문, 조건문, 중첩된 함수내에서 실행 X)
- Functional Component와 custom Hook 내에서만 호출해야함
- Hooks 등장 -> Class의 단점 보완 / 재사용성 강화
- Hook 사용규칙 -> 최상위 / 함수형 컴포넌트 / coustom Hook
- Class의 state -> Hook을 먼저 배웠기에 고민 할 필요 X
- useEffect -> 데이터 fetch / 구독 / Dom 수정
- clean up -> 구동과 구독해지를 한 공간에서
- dependency array -> 필요한 변경시에만 effect 실행

### HOC
- 고차 컴포넌트
- 함수를 받아서 함수를 리턴

### Memoization
- 메모이제이션은 컴퓨터 프로그램이 동일한 계신을 반복해야 할 때,
이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여
프로그램 실행 속도를 빠르게 하는 기술
- Profiler -> 리액트 성능 분석 도구
- callback -> useCallback
- value -> useMemo

### React.memo
- 동일한 props로 렌더링을 한다면, React.memo를 사용하여 성능 향상을 누릴 수 있다.
- memo를 사용하면 React는 컴포넌트를 렌더링하지 않고 마지막으로 렌더링된 결과를 재사용 한다.

### Context
- 컴포넌트 트리를 넘어 데이터를 공유할 수 있는 방법
- 컴포넌트 트리 제약 -> Props drilling의 한계 해소
- 재사용성 Context를 사용하면 재사용하기 어려움
- API createContext / Provider / Consumer
- useContext -> Consumer 대체

### Portals
- createPortal -> 부모 컴포넌트 DOM 트리로부터 벗어나기
- 이벤트 -> Portal에 있더라도 Event는 트리로 전파

### Render Props
- render props -> 무엇을 렌더링할 지 알려주는 함수
- render일 필요 없음 -> 패턴일 뿐 고정적으로 사용 할 필요 X, children도 되고 뭐든 됨
- PureComponent -> props, state 비교하여 성능 최적화

### propTypes
- Props의 타입을 확인하기 위한 도구 (like. Flow, TypeScript 같은 정적 타이핑 도구)
- 개발자 모드에서만 동작 -> 유효하지 않은 prop에 대한 경고
- custom -> RegExp 등으로 사용자 정의 가능
- children 제한 -> 원래 제약에 없던 갯수 제약 가능

### Reconciliation
- 루트부터 비교
- 트리를 파괴 -> 부모가 바뀌었다면 트리를 버린다
- Keys -> 자식 재귀 처리 시 효율성 확보
- Virtual DOM -> 실제 DOM과 동기화 할 가상 표현
- 재조정 -> 실제 DOM과 Virtual DOM의 동기화하는 과정
- React Fiber -> 스택 Reconciler(조정자) 대체한 재조정 엔진
