import Prev from '../img/left.svg';
import Play from '../img/play.svg';
import Next from '../img/right.svg';
import Repeat from '../img/repeat.svg';
import Shuffle from '../img/shuffle.svg';
import Like from '../img/like.svg';
import Dislike from '../img/dislike.svg';
import Volume from '../img/volume.svg';
import BarTrackPlay from './BarTrackPlay';
import * as S from './styles/BarStyled';







function Bar() {
    return(

        <S.Bar>
            <S.Content>

                <S.PlayerProgress/>

                <S.PlayerBlock>
                    <S.Player>
                        <S.PlayerControls>

                            <S.PlayerBtnPrev>
                                <S.BtnPrevSvg>
                                    <img src={ Prev} alt="prev" />
                                </S.BtnPrevSvg>
                            </S.PlayerBtnPrev>

                            <S.PlayerBtnPlay>
                                <S.BtnPlaySvg>
                                    <img src={ Play} alt="play" />
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