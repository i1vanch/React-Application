import styled from "styled-components";

const Playlist = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    overflow-y: auto;
`;

const Item = styled.div`
    width: 100%;
    display: block;
    margin-bottom: 12px;
`;

const Track = styled.div`
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
    -webkit-box-align: center;
        -ms-flex-align: center;
    align-items: center;

    
`;

const TTitle = styled.div`
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
    // width: 447px;

    width: 252px
`;

const TTImage = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 17px;
`;

const TTSvg = styled.div`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`;

const TTLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    @media (max-width: 1800px){
        width: 100px;
    }
`;

const TTSpan = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4E4E4E;
`;

const TAuthor = styled.div`
    width: 321px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
    // @media (max-width: 1800px){
    //     width: 100px;
    // }
    
`;

const TALink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    text-align: left;
    @media (max-width: 1800px){
        width: 150px;
    }
`;

const TAlbum = styled.div`
    width: 245px;
`;

const TAlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #696969;
    @media (max-width: 1800px){
        width: 150px;
    }
`;

const DivTime = styled.div`
    display: flex;
    align-items: center;
    gap: 10px
`;

const TTimeSvg = styled.img`
    width: 14px;
    height: 12px;

`;

const TTimeText = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: right;
    color: #696969;
`;

export {Playlist,Item, Track, TTitle, TTImage, TTSvg, TTLink, TTSpan, TAuthor, TALink,TAlbum, TAlbumLink, TTimeSvg, TTimeText, DivTime};


