import Skeleton from 'react-loading-skeleton'
import * as S from './styles/ContentPlaylistStyled';



const arrData = [
    {
        "name": "Guilt",
        "author": "Nero",
        "album": "Welcome Reality",
        "duration_in_seconds": "4:44"
    },
    {
        "name": "Elektro",
        "author": "Dynoro, Outwork, Mr. Gee",
        "album": "Elektro",
        "duration_in_seconds": "2:22"
    },
    {
        "name": "I`m Fire",
        "author": "Ali Bakgor",
        "album": "I`m Fire",
        "duration_in_seconds": "2:22"
    },
    {
        "name": "Non Stop",
        "author": "Стоункат, Psychopath",
        "album": "Non Stop",
        "duration_in_seconds": "4:12"
    },
    {
        "name": "Run Run",
        "author": "Jaded, Will Clarke, AR/CO",
        "album": "Run Run",
        "duration_in_seconds": "2:54"
    },
    {
        "name": "Eyes on Fire",
        "author": "Blue Foundation, Zeds Dead",
        "album": "Eyes on Fire",
        "duration_in_seconds": "5:24"
    },
    {
        "name": "Mucho Bien",
        "author": "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
        "album": "Mucho Bien",
        "duration_in_seconds": "3:41"
    },
    {
        "name": "Knives n Cherries",
        "author": "minthaze",
        "album": "Captivating",
        "duration_in_seconds": "1:48"
    },
    {
        "name": "How Deep Is Your Love",
        "author": "Calvin Harris, Disciples",
        "album": "How Deep Is Your Love",
        "duration_in_seconds": "3:32"
    },
    {
        "name": "Morena",
        "author": "Tom Boxer",
        "album": "Soundz Made in Romania",
        "duration_in_seconds": "3:36"
    },

];

function ContentPlaylistSkeleton() {
    return(
        <div>
            {arrData.map(() =>(
                
                <S.Item>
                    <S.Track>
                        <S.TTitle>
                            <S.TTImage>
                                
                                <div  
                                style={{
                                    display: 'block',
                                }}>
                                    <Skeleton width={51} height={51} />
                                </div>
                                
                            </S.TTImage>

                            <div>
                                <div  
                                style={{
                                    display: 'block',
                                }}>
                                    <Skeleton width={150} height={19} />
                                </div>
                            </div>
                        </S.TTitle>

                        <S.TAuthor>
                            <div  
                            style={{
                                display: 'block',
                            }}>
                                <Skeleton width={150} height={19} />
                            </div>
                        </S.TAuthor>

                        <S.TAlbum>
                            <div  
                            style={{
                                display: 'block',
                            }}>
                                <Skeleton width={150} height={19} />
                            </div>
                        </S.TAlbum>

                        <S.DivTime>
                            <div  
                            style={{
                                display: 'block',
                            }}>
                                <Skeleton width={55} height={19} />
                            </div>
                        </S.DivTime>

                    </S.Track>
                </S.Item>

            ))}
        </div>
        

        // <div className=" playlist">
        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>

        //     <div className="playlist__item">
        //         <div className="playlist__track track">
        //             <div className="track__title">

        //                 <div className="track__title-image">
        //                     <div  
        //                     style={{
        //                         display: 'block',
        //                     }}>
        //                         <Skeleton width={51} height={51} />
        //                     </div>
        //                 </div>

        //                 <div className="track__title-text">
        //                     <div 
        //                     style={{
        //                         display: 'block',
        //                     }}>

        //                         <Skeleton width={250} height={19} />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="track__author">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={200} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__album">
        //                 <div 
        //                 style={{
        //                     display: 'block',
        //                 }}>

        //                     <Skeleton width={230} height={19} />
        //                 </div>
        //             </div>

        //             <div className="track__time">
        //                 <svg className="track__time-svg" alt="time">
        //                     <use /* xlink: */ xlinkHref="img/icon/sprite.svg#icon-like"/>
        //                 </svg>
                        
        //             </div>

        //         </div>
        //     </div>
        // </div> 
    );
};

export default ContentPlaylistSkeleton