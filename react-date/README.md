📚 Fastcampus - 한 번에 끝내는 React의 모든 것 초격차 패키지 Online.
✌ Part 2. React 라이브러리

## Ch 01. 라이브러리 기초

### 라이브러리 vs 프레임워크
- 라이브러리는 개발 편의를 위한 도구의 모음
- 프레임워크는 기반 구조까지 잡혀있음
- 라이브러리는 "공구" // 프레임워크는 "공장"

### 라이브러리 적용 과정
- 필요 > 검색 > 사용법 파악 > 적용

### Moment (time, date)
- [https://momentjs.com/guides/](https://momentjs.com/guides/)
- moment-timezone
- format 및 비교 -> 원하는 스타일로 표기 가능
- 오래되고 트렌드에 뒤쳐짐 (Mutable / Tree shaking X)
- size 이슈 (사이즈가 큼 / 290kb)

### Dayjs
- [https://day.js.org/](https://day.js.org/)
- 용량 적음 (7kb) -> 가볍다 / 단 Tree shaking XX
- 문서 정갈
- 간단한 기능들을 적용할 때에 좋을 듯
- 써보다가 필요한 기능이 추가로 있다면 다른 라이브러리 고려할만함
- format 및 비교 -> 원하는 스타일로 표기 가능
- plugin/timezone plugin/utc

### date-fns
- [https://date-fns.org/](https://date-fns.org/)
- 커버리지가 제일 높은 라이브러리
- Tree shaking 지원
- funtional programming
- 용량 88kb

### 라이브러리를 고르는 기준
- 기능 / 성능 / 번들 사이즈 / tree shaking (안쓰는 기능은 빌드하지 않기)
- 문서 가독성 / 인기(선호도) / 관리 상태(업데이트) / 관리 주체
- 선호도 / 업데이트 : [https://npmtrends.com/](https://npmtrends.com/)
- 성능 비교 : [https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md](https://github.com/you-dont-need/You-Dont-Need-Momentjs/blob/master/README.md)
