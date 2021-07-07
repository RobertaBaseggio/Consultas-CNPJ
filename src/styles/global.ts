import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #E9F5FA;
  -webkit-font-smoothing: antialiased;
  margin-left: 40px;
}

body, input, button {
  font: 16px Roboto, sans-serif;
}

#root {
  max-widht: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

button {
  cursor: pointer;
}
`