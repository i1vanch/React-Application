import styled from "styled-components";

const AuthBox = styled.div`
    height:100vh;
    background-color: #383838;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Form = styled.div`
    width: 366px;
    height: 439px;
    background: #FFFFFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FLogo = styled.img`
    width: 140px;
    height: 21px;
    margin-top: 43px;
    margin-bottom: 43px;
`;

const FInput = styled.input`
    width: 278.5px;
    height: 38px;
    border: none;
    border-bottom: 1px solid #D0CECE;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px

`;

const BtnLog = styled.button`
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
    margin-top: 30px;
    

    &:hover{
    background: #3F007D;
    }

    &:active{
    background: #271A58;
    }
`;

const BtnSign = styled.button`
    width: 278px;
    height: 52px;
    border: 1px solid #D0CECE;
    border-radius: 6px;
    background: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-top: 20px;
    

    &:hover{
    background: #F4F5F6;
    }

    &:active{
    background: #D9D9D9;
    }
`;

export {AuthBox, Form, FLogo, FInput, BtnLog, BtnSign};