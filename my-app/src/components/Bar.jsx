import LeftClick from '../img/left.svg';
import Play from '../img/play.svg';
import RightClick from '../img/right.svg';
import Repeat from '../img/repeat.svg';
import Shuffle from '../img/shuffle.svg';
import Like from '../img/like.svg';
import Dislike from '../img/dislike.svg';
import Volume from '../img/volume.svg';
import BarTrackPlay from './BarTrackPlay';







function Bar() {
    return(
        <div className="bar">
            <div className="bar__content">
                <div className="bar__player-progress"/>
                <div className="bar__player-block">
                    <div className="bar__player player">
                        <div className="player__controls">
                            <div className="player__btn-prev">
                                <div className="player__btn-prev-svg">
                                    <img src={ LeftClick} alt="prev" /> 
                                </div>
                            </div>
                            <div className="player__btn-play _btn">
                                <div className="player__btn-play-svg">
                                    <img src={ Play} alt="play" /> 
                                </div>
                            </div>
                            <div className="player__btn-next">
                                <div className="player__btn-next-svg">
                                    <img src={RightClick} alt="next" /> 
                                </div>
                            </div>
                            <div className="player__btn-repeat _btn-icon">
                                <div className="player__btn-repeat-svg" alt="repeat">
                                    <img src={Repeat} alt="repeat" /> 
                                </div>
                            </div>
                            <div className="player__btn-shuffle _btn-icon">
                                <div className="player__btn-shuffle-svg">
                                    <img src={Shuffle} alt="shuffle" /> 
                                </div>
                            </div>
                        </div>
                        
                        <div className="player__track-play track-play">
                            < BarTrackPlay />

                            <div className="track-play__like-dis">
                                <div className="track-play__like _btn-icon">
                                    <div className="track-play__like-svg">
                                        <img src={Like} alt="like" />
                                    </div>
                                </div>
                                <div className="track-play__dislike _btn-icon">
                                    <div className="track-play__dislike-svg" >
                                        <img src={Dislike} alt="dislike" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bar__volume-block volume">
                    <div className="volume__content">
                        <div className="volume__image">
                            <div className="volume__svg">
                                <img src={Volume} alt="volume" />
                            </div>
                        </div>
                        <div className="volume__progress _btn">
                            <input className="volume__progress-line _btn" type="range" name="range"/>
                        </div>
                            
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bar;