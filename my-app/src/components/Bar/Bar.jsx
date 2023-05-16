import { useState, useEffect, useRef } from 'react';
import Prev from '../img/left.svg';
import Play from '../img/play.svg';
import Pause from '../img/pause.svg'
import Next from '../img/right.svg';
import Repeat from '../img/repeat.svg';
import Shuffle from '../img/shuffle.svg';
import Like from '../img/like.svg';
import Dislike from '../img/dislike.svg';
import Volume from '../img/volume.svg';
import BarTrackPlay from '../BarTrackPlay/BarTrackPlay';
import * as S from './BarStyled';
import Src from '../../music/Bobby_Marleni_-_Dropin.mp3';

function Bar() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const audio = audioRef.current;
    console.log(audio);

    useEffect(() => {
        
        audio.addEventListener('ended', () => setIsPlaying(false));
    
        return () => {
          audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    function TogglePlay() {
        setIsPlaying(!isPlaying);
        // const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        };
    };

    let music;

    function ButtonIcon() {
        if (isPlaying) {
            music = <img src={Play} alt='Play Icon' />
        }else{
            music = <img src={Pause} alt='Pause Icon' />
        }
        return music ;
    }

    return(
        <S.Bar>
            <S.Content style={{background: '#181818'}}>

                <S.PlayerProgress/>

                <S.PlayerBlock>
                    <S.Player>
                        <S.PlayerControls>
                            <S.PlayerBtnPrev>
                                <S.BtnPrevSvg>
                                    <img src={Prev} alt="prev" />
                                </S.BtnPrevSvg>
                            </S.PlayerBtnPrev>

                            <S.PlayerBtnPlay>
                                <audio  ref={audioRef} src={Src}><track kind="captions"/></audio>

                                <S.BtnPlaySvg type='button' onClick={TogglePlay()}>
                                    {ButtonIcon()};
                                </S.BtnPlaySvg>
                                
                                {/* <audio  ref={audioRef} src={Src}><track kind="captions"/></audio> */}
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