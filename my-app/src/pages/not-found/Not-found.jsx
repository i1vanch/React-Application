import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import search from '../../components/img/search.svg';
import ReactLogo from '../../components/img/logo.png';
import * as S from '../../components/Main/MainSidebarStyled'
import * as SM from '../../components/Main/MainNavStyled';
import * as SC from '../../components/Main/MainCenterblockStyled'
import Bar from '../../components/Bar/Bar';
import * as NFS from './Not-FoundStyled';
import Smile from '../../components/img/smile_crying.svg';
import C from '../../components/img/LiterC.svg'

const StyledMain = styled.div`
    flex: 1 1 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 100vh;
    background-color: rgb(24, 24, 24);
`;

function NotFound ()  {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = () => setVisible(!visible);

    const navigate = useNavigate();

    const BackButton = () => {
        navigate('/');
    };

    const CancelButton = () => {
        navigate('/');
    }
    return(
        
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
                            <SM.MenuItem><NavLink className='menu_link' to="/">Главное</NavLink></SM.MenuItem>
                            <SM.MenuItem><NavLink className='menu_link' to="/myTracks">Мой плейлист</NavLink></SM.MenuItem>
                            <SM.MenuItem><NavLink className='menu_link' to="/login">Войти</NavLink></SM.MenuItem>
                        </SM.MenuList>
                    </SM.NavMenu>
                )}
            </SM.MainNav>

            <SC.MainCenterblock className='centerblock_nf'>

                <SC.Search style={{ marginBottom: 0 }}>
                    <SC.SearchSvg src={search} alt='search'/>
                    <SC.Searchtext type="search" placeholder="Поиск" name="search"/>
                </SC.Search>

                <NFS.CenterErrorBox>
                    <NFS.ErrorBox>
                        <NFS.Number>404</NFS.Number>
                        <NFS.PageNotFoundBox>
                            <NFS.PageNFText>Страница не найдена</NFS.PageNFText>
                            <NFS.PageNfImg src={Smile}/>
                        </NFS.PageNotFoundBox>
                        <NFS.Text>Возможно, она была удалена <br/> или перенесена на другой адрес</NFS.Text>
                        <NFS.Button onClick={BackButton}>Вернуться на главную</NFS.Button>

                    </NFS.ErrorBox>
                </NFS.CenterErrorBox>
            </SC.MainCenterblock>

            <S.MainSidebar>
                <S.Personal>
                    <NFS.Cancel onClick={CancelButton}>
                        <NFS.C src={C}/>
                    </NFS.Cancel>
                </S.Personal>
            </S.MainSidebar>

            <Bar/>
        </StyledMain>
    );
};

export default NotFound;