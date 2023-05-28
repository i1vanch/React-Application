import styled, { css } from "styled-components";

export const Bar = styled.div`
    /* position: fixed; */
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(28, 28, 28, 0.5);
`;

export const Content = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

export const PlayerProgress = styled.input`
    width: 100%;
    height: 5px;
    background: #2E2E2E;

    // &::-webkit-slider-runnable-track{
    //     background-color: #9A48F1;
    //     height: 5px;
    // }

    // &::-webkit-slider-thumb{
    //     width: 0;
    //     height: 0;
    //     border: none;
    //     background: transparent;
    // }
`;

export const PlayerBlock = styled.div`
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`;

export const Player = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
`;


export const PlayerControls = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    padding: 0 27px 0 31px;
`;

export const StylesForButtons = css`
    padding: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const PlayerBtnPrev = styled.div`
    ${StylesForButtons}
    margin-right: 23px;
`;

export const BtnPrevSvg = styled.button`
    width: 15px;
    height: 14px;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const PlayerBtnPlay = styled.div`
    ${StylesForButtons}
    margin-right: 23px;
`;

export const BtnPlaySvg = styled.button`
    width: 22px;
    height: 20px;
    fill: #D9D9D9;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const PlayerBtnNext = styled.div`
    ${StylesForButtons}
    margin-right: 28px;
    fill: #a53939;
`;

export const BtnNextSvg = styled.button`
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #D9D9D9;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const PlayerBtnRepeat = styled.div`
    ${StylesForButtons}
    margin-right: 24px;
`;

export const BtnRepeatSvg = styled.button`
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const PlayerBtnShuffle = styled.div`
    ${StylesForButtons}
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

export const BtnShuffleSvg = styled.button`
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    background-color: rgba(28,28,28,0);
    border: none;
`;






export const PlayerTrackPlay = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
`;

export const TPLikeDis = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    margin-left: 26%;
`;

export const Like = styled.div`
    padding: 5px;
`;

export const LikeSvg = styled.button`
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const Dislike = styled.div`
    margin-left: 28.5px;
    padding: 5px;
`;

export const DislikeSvg = styled.button`
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const VolumeBlock = styled.div`
    width: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 0 92px 0 0;
`;

export const VolumeContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: end;
    margin-right: 34px;
`;

export const VImage = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`;

export const ImageSvg = styled.button`
    width: 13px;
    height: 18px;
    fill: transparent;
    background-color: rgba(28,28,28,0);
    border: none;
`;

export const VProgress = styled.div`
    width: 109px;
`;

export const VProgressLine = styled.input`
    width: 109px;
`;

















