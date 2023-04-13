import styled from "styled-components";


const MainNav = styled.nav`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
    @media (max-width: 1130px){
        width: 120px; 
    }

    @media (max-width: 1800px){
        width: 150px;
    }
`;

const NavLogo = styled.div`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
`;

const LogoImage = styled.img`
    width: 113.33px;
    height: 17px;
    color: #181818;
`;

const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
`;

const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #D3D3D3;
`;

const NavMenu = styled.div`
    display: block;
    visibility: visible;

`;

const MenuList = styled.ul`
    padding: 18px 0 10px 0;

    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    
          @-webkit-keyframes slide-right {
            0% {
              -webkit-transform: translateX(0);
                      transform: translateX(0);
            }
            100% {
              -webkit-transform: translateX(100px);
                      transform: translateX(100px);
            }
          }
          @keyframes slide-right {
            0% {
              -webkit-transform: translateX(0);
                      transform: translateX(0);
            }
            100% {
              -webkit-transform: translateX(15px);
                      transform: translateX(15px);
            }
        } 
`;

const MenuItem = styled.li`
    padding: 5px 0;
    margin-bottom: 16px;
`;

const MenuLink = styled.a`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`;






export {MainNav, NavLogo, LogoImage, NavBurger, BurgerLine, NavMenu, MenuList, MenuItem, MenuLink};