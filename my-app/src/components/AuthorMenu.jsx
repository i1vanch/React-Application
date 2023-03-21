import * as SC from './styles/MainCenterblockStyled';


const arrAuthor = [];

function request1(){
const request = new XMLHttpRequest();

    request.open('GET', 'https://painassasin.online/catalog/track/all/');
    request.send();
    request.onload = () => {
        const data = JSON.parse(request.response);

        for (let i = 0; i < data.length; i+=1) {

            arrAuthor.push(data[i].name);
            
        };
    };
};
request1();

function AuthorMenu() {
  const listAuthor = arrAuthor.map((author) =>
    <SC.L key={author.toString()}>
      {author}
    </SC.L>
  );
  


  return (
    <SC.List>{listAuthor}</SC.List>
  );
}


export default AuthorMenu;


