import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import BarTrackPlaySkeleton from './BarTrackPlaySkeleton';
import Melody from '../img/melody.svg';


function BarTrackPlay() {
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
                <BarTrackPlaySkeleton />
            </SkeletonTheme>
        );
    };

    return(
        <div className="track-play__contain">
            <div className="track-play__image">
                <div className="track-play__svg" >
                    <img src={Melody} alt="melody" />
                </div>
            </div>
            <div className="track-play__author">
                <a className="track-play__author-link" href="http://">Ты та...</a>
            </div>
            <div className="track-play__album">
                <a className="track-play__album-link" href="http://">Баста</a>
            </div>
        </div>
    )
};

export default BarTrackPlay