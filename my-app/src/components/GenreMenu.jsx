

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
    <li className="l" key={genre.toString()}>
      {genre}
    </li>
  );
    
  return (
    <ul className="list">{listGenre}</ul>
  );
}


export default GenreMenu;


