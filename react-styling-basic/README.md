📚 Fastcampus - 한 번에 끝내는 React의 모든 것 초격차 패키지 Online. <br />
✌ Part 2. Reacte 라이브러리 <br />

## Ch 02. 스타일링 라이브러리

### styled-components 1
- [https://styled-components.com/](https://styled-components.com/)
- CSS의 문제점 (React를 쓰면서..)
    - Golbal Namespace : 글로벌 변수를 지양해야 하는 JS와 대치
    - Dependencies : CSS 간의 의존 관리
    - Dead Code Elimination : 안 쓰는 CSS 인지 어려움
    - Minification : 클래스 이름 최소화
    - Sharing Constants : JS의 코드와 값을 공유하고 싶음
    - Non-deterministic Resolution : CSS 파일 로드 타이밍 이슈
    - lsolation : 격리
- 스타일드 컴포넌트 특징
    - Automatic critical CSS : 자동 style injects & 코드 스플릿
    - No class name bugs : unique / overlap x / misspellings
    - Easier deletion of CSS : tied to a spceific component
    - Simple dynamic styling : props / global theme
    - Painless Maintenance : styling affecting your component
    - Automatic vendor prefixing : current standard only
- CSS is JS → CSS의 문제점을 해소
- 해결책 → 스타일을 style 태그로 분리
- 사용법 (Template literals) → styled.{element}`` /함수
- styled(스타일드 컴포넌트) → 상속

### styled-components 2
- & → 가상 엘리먼트 / 가상 선택자
- Global Style → 전역 스타일
    - className을 따로 주지 않아도 됨. 특정 값이나, 선택자로 선택 가능
- attrs → props addition
- keyframes / ThemeProvider → Animation / Theme

### Emotion
- [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)
- styled-component와 비교했을 때 작고 빠름 / 서로 점점 유사해짐
- trend, size, speed 부분에서 emotions가 우세
- 기능 → Fallbacks, &, Global, keyframes
- 개발 편의성에서 우수

### SASS
- [https://sass-lang.com/](https://sass-lang.com/)
- CSS를 확장하는 Preprocessing → 전처리기
- Sass / Scss → CSS와 유사한 SCSS
- SCSS 내에서 if문 사용 가능
- syntax → 언어처럼 자체 syntax가 있음
- interpolation → #{} 값을 주입 (마치 js의 ‘${}’처럼)
- values / functions → 프로그래밍 언어스러움
