import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import search from '../../components/img/search.svg';
import clock from '../../components/img/clock.svg';
import ReactLogo from '../../components/img/logo.png';
import Bar from '../../components/Bar/Bar';
import ContentPlaylist from '../../components/ContentPlaylist/ContentPlaylist';
import * as SM from '../../components/Main/MainNavStyled';
import * as SC from '../../components/Main/MainCenterblockStyled'

const StyledMain = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

function PlaylistOfTheDay() {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => setVisible(!visible);

    return (
        <div>
            <StyledMain >
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
                                <SM.MenuItem><NavLink className='menu_link' to="/main">Главное</NavLink></SM.MenuItem>
                                <SM.MenuItem><NavLink className='menu_link' to="/myTracks">Мой плейлист</NavLink></SM.MenuItem>
                                <SM.MenuItem><NavLink className='menu_link' to="/login">Войти</NavLink></SM.MenuItem>
                            </SM.MenuList>
                        </SM.NavMenu>
                    )}
                </SM.MainNav>

                <SC.MainCenterblock style={{background: '#181818'}}>

                    <SC.Search>
                        <SC.SearchSvg src={search} alt='search'/>
                        <SC.Searchtext type="search" placeholder="Поиск" name="search"/>
                    </SC.Search>
                    <SC.Title>Плейлист дня</SC.Title>

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
            
            </StyledMain>

            <Bar />
        </div>
    );  
};

export default PlaylistOfTheDay;