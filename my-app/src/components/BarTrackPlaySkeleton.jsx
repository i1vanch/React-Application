import Skeleton from 'react-loading-skeleton'
import * as S from './styles/BarTrackPlayStyled';


function BarTrackPlaySkeleton() {
    return(
       
        <S.TPContain>
            <S.Image>
                <div  
                style={{
                    display: 'block',
                }}>
                    <Skeleton width={51} height={51} />
                </div>
            </S.Image>

            <S.Author>
                <div  
                style={{
                    display: 'block',
                }}>
                    <Skeleton width={59} height={15} />
                </div>
            </S.Author>

            <S.Album>
                <div  
                style={{
                    display: 'block',
                }}>
                    <Skeleton width={59} height={15} />
                </div>
            </S.Album>
        </S.TPContain>
    );
};

export default BarTrackPlaySkeleton