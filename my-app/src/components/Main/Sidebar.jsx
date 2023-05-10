import React from 'react';
import  { SkeletonTheme } from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import SidebarSkeleton from './SidebarSkeleton';
import * as S from './MainSidebarStyled'
import Playlist01 from '../img/playlist01.png';
import Playlist02 from '../img/playlist02.png';
import Playlist03 from '../img/playlist03.png';

function Sidebar() {
    const [isLoading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, []);

    if (isLoading){
        return (
            <SkeletonTheme baseColor="#313131" highlightColor="#444">
                <SidebarSkeleton />
            </SkeletonTheme>
        );
    };

    return(
        <S.MainSidebar>
            <S.Personal>
                <S.PersonalName>Sergey.Ivanov</S.PersonalName>
                <S.Avatar/>
            </S.Personal>
            <S.Block>
                <S.List>
                    <S.Item>
                        <NavLink className='sidebar_img_links' to="/playlistDay"><S.Img src={Playlist01} alt="day's playlist"/></NavLink>
                        <NavLink className='sidebar_img_links' to="/hits"><S.Img src={Playlist02} alt="day's playlist"/></NavLink>
                        <NavLink className='sidebar_img_links' to="/indie"><S.Img src={Playlist03} alt="day's playlist"/></NavLink>
                    </S.Item>
                </S.List>
            </S.Block>
        </S.MainSidebar>
    );     
};

export default Sidebar;