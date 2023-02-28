import { useState } from 'react';

// import Skeleton from 'react-loading-skeleton';


import ReactLogo from '../img/logo.png';
import Sidebar from './Sidebar';
import AuthorMenu from './AuthorMenu';
import GenreMenu from './GenreMenu';
import ContentPlaylist from './ContentPlaylist';


function Main() {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => setVisible(!visible);

    const [authorMenu, setMenu] = useState(true);
    const [genderMenu, setGenderMenu] = useState(true);
    const [genreMenu, setMenuGenre] = useState(true);

    const [colorBorderAuthor, setColorBorderAuthor] = useState();
    const [colorTextAuthor, setColorTextAuthor] = useState();

    const [colorBorderGender, setColorBorderGender] = useState();
    const [colorTextGender, setColorTextGender] = useState();

    const [colorBorderGenre, setColorBorderGenre] = useState();
    const [colorTextGenre, setColorTextGenre] = useState();


    const clickAwayListener = () => {
        setMenu(!authorMenu);
        setGenderMenu(true);
        setMenuGenre(true);

        setColorBorderGender(' ');
        setColorTextGender(' ');
        setColorBorderGenre(' ');
        setColorTextGenre(' ');

        if (authorMenu) {
            setColorBorderAuthor('#AD61FF');
            setColorTextAuthor('#AD61FF');
        }else{
            setColorBorderAuthor(' ');
            setColorTextAuthor(' ');   
        }  
    }
    
    const clickGenderListener = () => {
        setGenderMenu(!genderMenu);
        setMenu(true);
        setMenuGenre(true);

        setColorBorderAuthor(' ');
        setColorTextAuthor(' ');
        setColorBorderGenre(' ');
        setColorTextGenre(' ');

        if (genderMenu) {
            setColorBorderGender('#AD61FF');
            setColorTextGender('#AD61FF');
        }else{
            setColorBorderGender(' ');
            setColorTextGender(' '); 
        } 
    };

    const clickAwayListenerGenre = () => {
        setMenuGenre(!genreMenu);
        setGenderMenu(true);
        setMenu(true);

        setColorBorderAuthor(' ');
        setColorTextAuthor(' ');
        setColorBorderGender(' ');
        setColorTextGender(' ');

        if (genreMenu) {
            setColorBorderGenre('#AD61FF');
            setColorTextGenre('#AD61FF');
        }else{
            setColorBorderGenre(' ');
            setColorTextGenre(' ');
            
        }
        
    };

    const [gender,setGender]=useState('');

    const handleChange=(e)=>{
        setGender( e.target.value);
        console.log(gender);
        console.log(e.target.value);
    };


    return (
        <main className="main">
        <nav className="main__nav nav">
            <div className="nav__logo logo">
                <img className="logo__image" src={ReactLogo} alt="logo"/>
            </div>
            <div 
                onClick={toggleVisibility} onKeyDown={toggleVisibility}
                className="nav__burger burger"
                role="button" 
                tabIndex="0">
                <span className="burger__line"/>
                <span className="burger__line"/>
                <span className="burger__line"/>
            </div>
            {!visible && (
                <div className="nav__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item"><a href="http://" className="menu__link">Главное</a></li>
                        <li className="menu__item"><a href="http://" className="menu__link">Мой плейлист</a></li>
                        <li className="menu__item"><a href="http://" className="menu__link">Войти</a></li>
                    </ul>
                </div>
            )} 
        </nav>
        <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
                <svg className="search__svg">
                    <use  xlinkHref="img/icon/sprite.svg"/>
                </svg>
               
                <input className="search__text" type="search" placeholder="Поиск" name="search"/>
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
                <div className="filter__title">Искать по:</div>

                <div className='selected_button1'>
                    <div 
                    className="filter__button button-author _btn-text"
                    style={{color: colorTextAuthor, borderColor: colorBorderAuthor}}
                    
                    onClick={clickAwayListener}  onKeyDown={clickAwayListener}
                    role="button" 
                    tabIndex="0">
                        исполнителю
                    </div>
                    
                    {!authorMenu && (
                        <div className='selected_menu'  >
                           
                           < AuthorMenu />   
                                
                        </div>
                    )}
                </div>
                
                <div className='selected_button1'>

                    <div 
                    className="filter__button button-author _btn-text"
                    style={{color: colorTextGender, borderColor: colorBorderGender}}
                    onClick={clickGenderListener}  onKeyDown={clickGenderListener}
                    role="button" 
                    tabIndex="0">
                        году выпуска
                    </div>

                    {!genderMenu && (
                        <div className='gender_menu'>
                            <label className='label_for_radio' htmlFor='new'>
                                <input className='inputs' type="radio" id="new" name="gender" value= "1" 
                                onChange={handleChange} />

                                Более новые
                            </label>

                            <label className='label_for_radio' htmlFor="old">
                                <input className='inputs' type="radio" id='old' name="gender" value="2"
                                onChange={handleChange} />

                                Более старые 
                            </label>
                        </div>
                    )}

                </div>
                
                <div className='selected_button1'>
                    <div 
                    className="filter__button button-author _btn-text"
                    style={{color: colorTextGenre, borderColor: colorBorderGenre}}
                    onClick={clickAwayListenerGenre}  onKeyDown={clickAwayListenerGenre}
                    role="button" 
                    tabIndex="0">
                        жанру
                    </div>
                    
                    {!genreMenu && (
                        <div className='selected_menu'  >
                           
                           < GenreMenu />  
                                
                        </div>
                    )}
                </div>
            </div>

            <div className="centerblock__content">
                <div className="content__title playlist-title">
                    <div className="playlist-title__col col01">Трек</div>
                    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                    <div className="playlist-title__col col03">АЛЬБОМ</div>
                    <div className="playlist-title__col col04">
                        <svg className="playlist-title__svg" alt="time">
                            <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-watch"/>
                        </svg>
                    </div>
                </div>
                < ContentPlaylist />                       
            </div>
        </div>

        < Sidebar />
    </main>
    
    );
    
};




export default Main;