import styled from 'styled-components';

const MainCenterblock = styled.div`
    width: auto;
    -webkit-box-flex: 3;
        -ms-flex-positive: 3;
            flex-grow: 3;
    padding: 20px 40px 20px 50px;

    @media (max-width:1800px){
        width:700px;
    }
`;

const Search = styled.div`
    width: 100%;
    border-bottom: 1px solid #4E4E4E;
    margin-bottom: 51px;
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
`;

const SearchSvg = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #FFFFFF;
    fill: transparent;
`;

const Searchtext = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
        flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;

const Title = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    margin-bottom: 45px;
`;

const Filter = styled.div`
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
    margin-bottom: 51px;
    gap: 11px;
`;

const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;

const FilterButton = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: 1px solid #FFFFFF;
    border-radius: 60px;
    padding: 6px 20px;

    &:hover{
        border-color: #D9B6FF;
        color: #D9B6FF;
        cursor: pointer;
    }
`;

const SelectedMenu = styled.div`
    position: absolute;
    
    width: 248px;
    height: 305px;
    background: #313131;
    border-radius: 12px;
    margin-top: 10px;
`;

const List = styled.ul`
    height: 237px;       
    /* overflow: hidden;    */
    overflow-y: scroll; 
    margin: 34px;
    display: flex;
    flex-direction: column;
    gap: 28px;

    &::-webkit-scrollbar{
        width: 4px;
        background: #4B4949;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb{
        width: 4px;
        height: 65px;
        background: #FFFFFF;
        border-radius: 10px;
    }
`;

const L = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;

    &:hover{
        color: #B672FF;
        text-decoration-line: underline;
    }
`;


const GenderMenu = styled.div`
    position:absolute;
    width: 300px;
    height: 70px;
    background: #313131;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 10px;
`;

const LabelForRadio = styled.label`
    display: flex;
    gap: 10px;
`;

const RadioInputs = styled.input`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;

const CenterBlockContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`;

const ContentTitle = styled.div`
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
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    margin-bottom: 24px;
`;

const PlaylistTitleCol = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: #696969;
    text-transform: uppercase;
`;

const PlaylistTitleImg = styled.img`
    width: 12px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
`;



export {MainCenterblock, Search, SearchSvg, Searchtext, Title, Filter, FilterTitle, FilterButton, SelectedMenu, List, L, GenderMenu, LabelForRadio, RadioInputs, CenterBlockContent, ContentTitle, PlaylistTitleCol, PlaylistTitleImg};