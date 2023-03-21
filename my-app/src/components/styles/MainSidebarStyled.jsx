import styled from "styled-components";

const MainSidebar = styled.div`
    max-width: 418px;
    padding: 20px 90px 20px 78px;

    @media (max-width:1800px){
        width: 250px;
    }
`;

const Personal = styled.div`
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
            justify-content: flex-end;
    padding: 12px 0 15px 0;

    @media (max-width:1800px){
        width: 160px;
    }
`;

const PersonalName = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-right: 16px;
`;

const Avatar = styled.div`
    width: 43px;
    height: 43px;
    background-color: #313131;
    border-radius: 50%;
`;

const Block = styled.div`
    height: 100%;
    padding: 320px 0 0 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;

    // @media (max-width:1800px){
    //     padding-top: 350px;
    // }
`;

const List = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
`;

const Item = styled.div`
    // width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;

const Link = styled.a`
    width: 100%;
    height: 100%;
`;

const Img = styled.img`
    width: 100%;
    height: auto;

    @media (max-width:1800px){
        width: 200px;
    }
`;

const ImgSkeleton = styled.div`
    width: 100%;
    height: auto;

    @media (max-width:1800px){
        width: 200px;
    }
`;





export {MainSidebar, Personal, PersonalName, Avatar, Block, List, Item, Link, Img, ImgSkeleton}