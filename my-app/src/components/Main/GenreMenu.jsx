import * as SC from './MainCenterblockStyled';

const arrGenre = [];

function request2(){
    const request = new XMLHttpRequest();

    request.open('GET', 'https://painassasin.online/catalog/track/all/');
    request.send();
    request.onload = () => {
        const data = JSON.parse(request.response);

        for (let i = 0; i < data.length; i+=1) {
        arrGenre.push(data[i].genre);
        };

        window.uniqueGenre = Array.from(new Set(arrGenre));     // перебор массива, удаление повторяющихся элементов
        // console.log(uniqueGenre);
    };
};
request2();

function GenreMenu() {
    const listGenre = window.uniqueGenre.map((genre) =>
    <SC.L key={genre.toString()}>
      {genre}
    </SC.L>
  );
    
  return (
    <SC.List>{listGenre}</SC.List>
  );
}


export default GenreMenu;


