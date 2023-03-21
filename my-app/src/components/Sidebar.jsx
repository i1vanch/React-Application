import React from 'react';
import  { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import SidebarSkeleton from './SidebarSkeleton';
import * as S from './styles/MainSidebarStyled'

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
                {/* <p>
                    <Skeleton count={0} />
                </p> */}
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
                        <S.Link href="#t">
                            <S.Img src={ Playlist01} alt="day's playlist"/>
                        </S.Link>
                        <S.Link href="#t">
                            <S.Img src={ Playlist02} alt="day's playlist"/>
                        </S.Link>
                        <S.Link href="#t">
                            <S.Img src={ Playlist03} alt="day's playlist"/>
                        </S.Link>
                    </S.Item>
                </S.List>
            </S.Block>
        </S.MainSidebar>

    );
        
};

export default Sidebar;