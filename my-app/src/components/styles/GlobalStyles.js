import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}

@font-face {
  font-family: 'StratosSkyeng';
  src: local("StratosSkyeng"), local("StratosSkyeng"), url("./fonts/Stratos-Black.woff2") format("woff2"), url("./fonts/Stratos-Black.woff") format("woff"); /* url("./fonts/Stratos-.ttf") format("truetype"); */
  font-weight: 400;
  font-style: normal;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: #FFFFFF;
}

.wrapper {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #383838;
}

.container {
  max-width: 1920px;
  /* height: 100vh; */
  margin: 0 auto;
  position: relative;
  background-color: #181818;
}

._btn-text:hover {
  border-color: #D9B6FF;
  color: #D9B6FF;
  cursor: pointer;
}

._btn-icon:hover svg {
  fill: transparent;
  stroke: #ACACAC;
  cursor: pointer;
}

._btn-text:active {
  border-color: #AD61FF;
  color: #AD61FF;
  cursor: pointer;
}

._btn-icon:active svg {
  fill: transparent;
  stroke: #FFFFFF;
  cursor: pointer;
}

._btn-icon:active .track-play__like-svg,
._btn-icon:active .track-play__dislike-svg {
  fill: #696969;
  stroke: #FFFFFF;
  cursor: pointer;
}
`;

export default GlobalStyles