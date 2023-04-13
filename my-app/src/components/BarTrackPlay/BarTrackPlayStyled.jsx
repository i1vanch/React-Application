import styled from "styled-components";

const TPContain = styled.div`
    width: auto;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: auto 1fr;
        grid-template-columns: auto 1fr;
        grid-template-areas: "image author" "image album";
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

`; 

const Image = styled.div`
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    margin-right: 12px;
    -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1;
    grid-area: image;

`;

const Svg = styled.div`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4E4E4E;
`;

const Author = styled.div`
    -ms-grid-row: 1;
    -ms-grid-column: 2;
    grid-area: author;
    min-width: 49px;
`;

const AuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    white-space: nowrap;
`;

const Album = styled.div`
    -ms-grid-row: 2;
    -ms-grid-column: 2;
    grid-area: album;
    min-width: 49px;
`;

const AlbumLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #FFFFFF;
`;


export {TPContain, Image, Svg, Author, AuthorLink, Album, AlbumLink};