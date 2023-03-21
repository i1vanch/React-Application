import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Item from './PlaylistItem';


import PlaylistSkeleton from './PlaylistSkeleton';

import * as B from './styles/ContentPlaylistStyled';



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

// const request = new XMLHttpRequest();
    
// request.open('GET', 'https://painassasin.online/catalog/track/all/');
// request.send();
// request.onload = () => {
//     const data = JSON.parse(request.response);

    
    
//     console.log(data);

//     for (let i = 0; i < data.length; i+=1) {
//         arrData.push(data[i]);
        
//     }
//     console.log(arrData); 
// };


function ContentPlaylist() {
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
                <PlaylistSkeleton />
            </SkeletonTheme>
        );
    };
    
    return(
        <div>
            {arrData.map(item =>(
                
                <B.Playlist>
                    <Item props={item}/>
                </B.Playlist>

            ))}
        </div>
    );
};

export default ContentPlaylist