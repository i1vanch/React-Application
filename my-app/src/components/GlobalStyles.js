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

.btn_log{
  width: 278px;
  height: 52px;
  background: #580EA2;
  border: none;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #FFFFFF;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &:hover{
    background: #3F007D;
  }

  &:active{
    background: #271A58;
  }
}

.btn_sign{
  width: 278px;
  height: 52px;
  border: 1px solid #D0CECE;
  border-radius: 6px;
  background: #FFFFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  &:hover{
    background: #F4F5F6;
  }

  &:active{
    background: #D9D9D9;
  }
}

.menu_link{
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.sidebar_img_links{
  width: 100%;
  height: 100%;
}

.centerblock_nf{
  background-color: rgb(24, 24, 24);
  height: 89vh;

}

`;

export default GlobalStyles