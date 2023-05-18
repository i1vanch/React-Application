import { useState, useEffect, useRef } from 'react';

import Prev from '../img/left.svg';
import Play from '../img/play.svg';
import Next from '../img/right.svg';
import Repeat from '../img/repeat.svg';
import Shuffle from '../img/shuffle.svg';
import Like from '../img/like.svg';
import Dislike from '../img/dislike.svg';
import Volume from '../img/volume.svg';
import BarTrackPlay from '../BarTrackPlay/BarTrackPlay';
import Pause from '../img/pause.svg';
import Src from '../../music/Bobby_Marleni_-_Dropin.mp3';
import * as S from './BarStyled';


function Bar() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [progressBarWidth, setProgressBarWidth] = useState(0);


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    }, [isPlaying]);

    let music;

    function ButtonIcon() {
        if (isPlaying) {
            music = <img src={Play} alt='Play Icon' />
        }else{
            music = <img src={Pause} alt='Pause Icon' />
        }
        return music ;
    }


    function handleTimeUpdate() {
        setCurrentTime(audioRef.current.currentTime);
    }

    function handleLoadedData() {
        setDuration(audioRef.current.duration);
    }
    
    function handleSeek(e) {
        audioRef.current.currentTime = e.target.value;
    }
    
    useEffect(() => {
        if (duration) {
            setProgressBarWidth((currentTime / duration) * 1000);
        }
    }, [currentTime, duration]);







    return(
        <S.Bar>
            <S.Content style={{background: '#181818'}}>

                <S.PlayerProgress type='range' defaultValue={0} max={1000} value={currentTime} onChange={handleSeek()} aria-valuenow={progressBarWidth}/>

                <S.PlayerBlock>
                    <S.Player>
                        <S.PlayerControls>

                            <S.PlayerBtnPrev>
                                <S.BtnPrevSvg>
                                    <img src={ Prev} alt="prev" />
                                </S.BtnPrevSvg>
                            </S.PlayerBtnPrev>

                            <S.PlayerBtnPlay>
                                <audio  ref={audioRef} src={Src} onTimeUpdate={handleTimeUpdate} onLoadedData={handleLoadedData}><track kind="captions"/></audio>

                                <S.BtnPlaySvg type='button' onClick={() => setIsPlaying(!isPlaying)}>
                                    {ButtonIcon()};
                                </S.BtnPlaySvg>
                                    
                            </S.PlayerBtnPlay>

                            <S.PlayerBtnNext>
                                <S.BtnNextSvg>
                                    <img src={Next} alt="next" />
                                </S.BtnNextSvg>
                            </S.PlayerBtnNext>

                            <S.PlayerBtnRepeat>
                                <S.BtnRepeatSvg>
                                    <img src={Repeat} alt="repeat" />
                                </S.BtnRepeatSvg>
                            </S.PlayerBtnRepeat>

                            <S.PlayerBtnShuffle>
                                <S.BtnShuffleSvg>
                                    <img src={Shuffle} alt="shuffle" />
                                </S.BtnShuffleSvg>
                            </S.PlayerBtnShuffle>

                        </S.PlayerControls>

                        <S.PlayerTrackPlay>
                            <BarTrackPlay/>
                            
                            <S.TPLikeDis>
                                <S.Like>
                                    <S.LikeSvg>
                                        <img src={Like} alt="like" />
                                    </S.LikeSvg>
                                </S.Like>

                                <S.Dislike>
                                    <S.DislikeSvg>
                                        <img src={Dislike} alt="dislike" />
                                    </S.DislikeSvg>
                                </S.Dislike>
                            </S.TPLikeDis>

                        </S.PlayerTrackPlay>

                    </S.Player>

                    <S.VolumeBlock/>

                    <S.VolumeContent>
                        <S.VImage>
                            <S.ImageSvg>
                                <img src={Volume} alt="volume" />
                            </S.ImageSvg>
                        </S.VImage>

                        <S.VProgress>
                            <S.VProgressLine type="range" name="range"/>
                        </S.VProgress>
                    </S.VolumeContent>

                </S.PlayerBlock>
            </S.Content>
        </S.Bar>

    );
};

export default Bar;