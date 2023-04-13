import { useState } from 'react';

import styled from 'styled-components';


import search from '../img/search.svg';
import clock from '../img/clock.svg';
import ReactLogo from '../img/logo.png';
import Sidebar from './Sidebar';
import AuthorMenu from './AuthorMenu';
import GenreMenu from './GenreMenu';
import ContentPlaylist from '../ContentPlaylist/ContentPlaylist';
import * as SM from './MainNavStyled';
import * as SC from './MainCenterblockStyled'

const StyledMain = styled.div`
    flex: 1 1 auto;
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
`;


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
        <StyledMain>
            <SM.MainNav>
                <SM.NavLogo>
                    <SM.LogoImage src={ReactLogo}/>
                </SM.NavLogo>

                <SM.NavBurger onClick={toggleVisibility} onKeyDown={toggleVisibility} className="nav__burger burger" role="button" tabIndex="0">
                    <SM.BurgerLine/>
                    <SM.BurgerLine/>
                    <SM.BurgerLine/>
                </SM.NavBurger>

                {!visible && (
                    <SM.NavMenu>
                        <SM.MenuList>
                            <SM.MenuItem><SM.MenuLink href="http://">Главное</SM.MenuLink></SM.MenuItem>
                            <SM.MenuItem><SM.MenuLink href="http://">Мой плейлист</SM.MenuLink></SM.MenuItem>
                            <SM.MenuItem><SM.MenuLink href="http://">Войти</SM.MenuLink></SM.MenuItem>
                        </SM.MenuList>
                    </SM.NavMenu>
                )}
            </SM.MainNav>

            <SC.MainCenterblock>

                <SC.Search>
                    <SC.SearchSvg src={search} alt='search'/>
                    <SC.Searchtext type="search" placeholder="Поиск" name="search"/>
                </SC.Search>
                <SC.Title>Треки</SC.Title>

                <SC.Filter>
                    <SC.FilterTitle>Искать по:</SC.FilterTitle>
                    <div>
                        <SC.FilterButton style={{color: colorTextAuthor, borderColor: colorBorderAuthor}} onClick={clickAwayListener}  onKeyDown={clickAwayListener} role="button" tabIndex="0">
                            исполнителю
                        </SC.FilterButton>
                        {!authorMenu && (
                            <SC.SelectedMenu>
                                < AuthorMenu />  
                            </SC.SelectedMenu>
                        )}
                    </div>
                    <div>
                        <SC.FilterButton style={{color: colorTextGender, borderColor: colorBorderGender}} onClick={clickGenderListener}  onKeyDown={clickGenderListener} role="button" tabIndex="0">
                            исполнителю
                        </SC.FilterButton>
                        {!genderMenu && (

                            <SC.GenderMenu>
                                <SC.LabelForRadio>
                                    <SC.RadioInputs type="radio" id="new" name="gender" value= "1" onChange={handleChange}/>
                                    Более новые
                                </SC.LabelForRadio>
                                <SC.LabelForRadio>
                                    <SC.RadioInputs type="radio" id="new" name="gender" value= "2" onChange={handleChange}/>
                                    Более старые
                                </SC.LabelForRadio>
                            </SC.GenderMenu>
                        )}
                    </div>
                    <div>
                        <SC.FilterButton style={{color: colorTextGenre, borderColor: colorBorderGenre}} onClick={clickAwayListenerGenre}  onKeyDown={clickAwayListenerGenre} role="button" tabIndex="0">
                            жанру
                        </SC.FilterButton>
                        {!genreMenu && (
                            <SC.SelectedMenu>
                                < GenreMenu /> 
                            </SC.SelectedMenu>
                        )}
                    </div>
                </SC.Filter>

                <SC.CenterBlockContent>
                    <SC.ContentTitle>
                        <SC.PlaylistTitleCol >Трек</SC.PlaylistTitleCol>
                        <SC.PlaylistTitleCol >ИСПОЛНИТЕЛЬ</SC.PlaylistTitleCol>
                        <SC.PlaylistTitleCol >АЛЬБОМ</SC.PlaylistTitleCol>
                        <SC.PlaylistTitleCol  text-align='end'>
                            <SC.PlaylistTitleImg src={clock} alt='time'/>
                        </SC.PlaylistTitleCol>
                    </SC.ContentTitle>

                    < ContentPlaylist /> 

                </SC.CenterBlockContent>

            </SC.MainCenterblock>
            
            < Sidebar />
        </StyledMain>
    
    );
    
};




export default Main;