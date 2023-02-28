import React from 'react';
import  { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import SidebarSkeleton from './SidebarSkeleton';

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
        <div className="main__sidebar sidebar">

            <div className="sidebar__personal">
                <p className="sidebar__personal-name">Sergey.Ivanov</p>
                <div className="sidebar__avatar"/>
            </div>

            <div className="sidebar__block">
                <div className="sidebar__list">
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#t">
                            <img className="sidebar__img" src={ Playlist01} alt="day's playlist" /> 
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#t">
                            <img className="sidebar__img" src={Playlist02} alt="day's playlist"/>
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a className="sidebar__link" href="#t">
                            <img className="sidebar__img" src={Playlist03} alt="day's playlist"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
        
};

export default Sidebar;