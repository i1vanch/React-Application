import * as S from './ContentPlaylistStyled';
import Melody from '../img/melody.svg';
import Like from '../img/like.svg';




function Item({props}) {
    return(
        <S.Item>
            <S.Track>
                <S.TTitle>
                    <S.TTImage>
                        <S.TTSvg>
                            <img src={Melody} alt="melody" />
                        </S.TTSvg>
                    </S.TTImage>

                    <div>
                        <S.TTLink href=''>{props.name}<S.TTSpan/> </S.TTLink>
                    </div>
                </S.TTitle>

                <S.TAuthor>
                    <S.TALink href=''>{props.author}</S.TALink>
                </S.TAuthor>

                <S.TAlbum>
                    <S.TAlbumLink href=''>{props.album}</S.TAlbumLink>
                </S.TAlbum>

                <S.DivTime>
                    <S.TTimeSvg src={Like} alt='like'/>
                    <S.TTimeText>{props.duration_in_seconds}</S.TTimeText>
                </S.DivTime>

            </S.Track>
        </S.Item>
    )
}

export default Item