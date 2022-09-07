# react-basic-study
React Basic Study <br />
📚 Fastcampus - 한 번에 끝내는 React의 모든 것 초격차 패키지 Online. <br />

1. 2022년 8월 16일 ~ 31일까지의 기록
2. git push 할 때 "untracked files" 오류 발생 
  ## 해결 방법
  - project file을 각각 만들고 한 repository로 모으면서 각 폴더에 각각의 .git 파일이 존재하면서 발생 된 오류
  - 해당 폴더에 접근하여 
  - 폴더 내의 파일 검색 : ls -a
  - .git 파일 삭제 : re -rf .git
  ## 명령어 순서 ( git bash 사용 )
  - git remote add origin [github repository 주소]
  - git status
  - git add .
  - git commit -m "커밋 내용"
  - git remote -v
  - git push origin master
