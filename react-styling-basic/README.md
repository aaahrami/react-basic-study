๐ Fastcampus - ํ ๋ฒ์ ๋๋ด๋ React์ ๋ชจ๋  ๊ฒ ์ด๊ฒฉ์ฐจ ํจํค์ง Online. <br />
โ Part 2. Reacte ๋ผ์ด๋ธ๋ฌ๋ฆฌ <br />

## Ch 02. ์คํ์ผ๋ง ๋ผ์ด๋ธ๋ฌ๋ฆฌ

### styled-components 1
- [https://styled-components.com/](https://styled-components.com/)
- CSS์ ๋ฌธ์ ์  (React๋ฅผ ์ฐ๋ฉด์..)
    - Golbal Namespace : ๊ธ๋ก๋ฒ ๋ณ์๋ฅผ ์ง์ํด์ผ ํ๋ JS์ ๋์น
    - Dependencies : CSS ๊ฐ์ ์์กด ๊ด๋ฆฌ
    - Dead Code Elimination : ์ ์ฐ๋ CSS ์ธ์ง ์ด๋ ค์
    - Minification : ํด๋์ค ์ด๋ฆ ์ต์ํ
    - Sharing Constants : JS์ ์ฝ๋์ ๊ฐ์ ๊ณต์ ํ๊ณ  ์ถ์
    - Non-deterministic Resolution : CSS ํ์ผ ๋ก๋ ํ์ด๋ฐ ์ด์
    - lsolation : ๊ฒฉ๋ฆฌ
- ์คํ์ผ๋ ์ปดํฌ๋ํธ ํน์ง
    - Automatic critical CSS : ์๋ style injects & ์ฝ๋ ์คํ๋ฆฟ
    - No class name bugs : unique / overlap x / misspellings
    - Easier deletion of CSS : tied to a spceific component
    - Simple dynamic styling : props / global theme
    - Painless Maintenance : styling affecting your component
    - Automatic vendor prefixing : current standard only
- CSS is JS โ CSS์ ๋ฌธ์ ์ ์ ํด์
- ํด๊ฒฐ์ฑ โ ์คํ์ผ์ style ํ๊ทธ๋ก ๋ถ๋ฆฌ
- ์ฌ์ฉ๋ฒ (Template literals) โ styled.{element}`` /ํจ์
- styled(์คํ์ผ๋ ์ปดํฌ๋ํธ) โ ์์

### styled-components 2
- & โ ๊ฐ์ ์๋ฆฌ๋จผํธ / ๊ฐ์ ์ ํ์
- Global Style โ ์ ์ญ ์คํ์ผ
    - className์ ๋ฐ๋ก ์ฃผ์ง ์์๋ ๋จ. ํน์  ๊ฐ์ด๋, ์ ํ์๋ก ์ ํ ๊ฐ๋ฅ
- attrs โ props addition
- keyframes / ThemeProvider โ Animation / Theme

### Emotion
- [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)
- styled-component์ ๋น๊ตํ์ ๋ ์๊ณ  ๋น ๋ฆ / ์๋ก ์ ์  ์ ์ฌํด์ง
- trend, size, speed ๋ถ๋ถ์์ emotions๊ฐ ์ฐ์ธ
- ๊ธฐ๋ฅ โ Fallbacks, &, Global, keyframes
- ๊ฐ๋ฐ ํธ์์ฑ์์ ์ฐ์

### SASS
- [https://sass-lang.com/](https://sass-lang.com/)
- CSS๋ฅผ ํ์ฅํ๋ Preprocessing โ ์ ์ฒ๋ฆฌ๊ธฐ
- Sass / Scss โ CSS์ ์ ์ฌํ SCSS
- SCSS ๋ด์์ if๋ฌธ ์ฌ์ฉ ๊ฐ๋ฅ
- syntax โ ์ธ์ด์ฒ๋ผ ์์ฒด syntax๊ฐ ์์
- interpolation โ #{} ๊ฐ์ ์ฃผ์ (๋ง์น js์ โ${}โ์ฒ๋ผ)
- values / functions โ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์ค๋ฌ์
