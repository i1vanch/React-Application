import Skeleton from 'react-loading-skeleton'

function BarTrackPlaySkeleton() {
    return(
        <div className="track-play__contain">
            <div className="track-play__image">
                <div  
                style={{
                    display: 'block',
                }}>
                    <Skeleton width={51} height={51} />
                </div>
                </div>
            <div className="track-play__author">
                <div  
                style={{
                    display: 'block',
                }}>
                    <Skeleton width={59} height={15} />
                </div>
            </div>
            <div className="track-play__album">
                <div  
                style={{
                    display: 'block',
                }}>
                    <Skeleton width={59} height={15} />
                </div>
            </div>
        </div>
);
};

export default BarTrackPlaySkeleton