import styled from "styled-components";

const CenterErrorBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const ErrorBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Number = styled.h1`
    width: 255px;
    height: 168px;
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 168px;
    color: #FFFFFF;
`;

const PageNotFoundBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

const PageNFText = styled.h4`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
`;

const PageNfImg = styled.img`
    width: 52px;
    height: 52px;
`;

const Text = styled.p`
    width: 431px;
    height: 48px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #4E4E4E;
    text-align: center;
    letter-spacing: -0.003em;
    margin-top: 19px;
    margin-bottom: 36px;
`;

const Button = styled.button`
    width: 278px;
    height: 52px;
    background: #580EA2;
    border: none;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;

    &:hover{
        background: #3F007D;
    };
    &:active{
        background: #271A58;
    };
`;

const Cancel = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #FFFFFF;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    &:hover{
        border-color: #580EA2;
    };

`;

const C = styled.img`
    width: 19.3px;
    height: 16.81px;
`;

export {ErrorBox, Number, PageNotFoundBox, PageNFText, PageNfImg, Text, Button, CenterErrorBox, Cancel, C}