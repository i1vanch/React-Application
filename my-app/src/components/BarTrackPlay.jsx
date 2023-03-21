import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import BarTrackPlaySkeleton from './BarTrackPlaySkeleton';
import Melody from '../img/melody.svg';

import * as S from './styles/BarTrackPlayStyled';


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
        <S.TPContain>
            <S.Image>
                <S.Svg>
                    <img src={Melody} alt="melody" />
                </S.Svg>
            </S.Image>

            <S.Author>
                <S.AuthorLink href="http://">Ты та...</S.AuthorLink>
            </S.Author>

            <S.Album>
                <S.AlbumLink href="http://">Баста</S.AlbumLink>
            </S.Album>
        </S.TPContain>
    );
};

export default BarTrackPlay