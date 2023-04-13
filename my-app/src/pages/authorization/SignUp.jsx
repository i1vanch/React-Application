import {NavLink} from 'react-router-dom';
import * as S from './AuthorizationStyled';
import Logo from '../../components/img/f_logo.svg';

function SignUp() {
    return(
        <S.AuthBox>
            <S.Form>
                <S.FLogo src={Logo}/>
                <S.FInput placeholder='Логин'/>
                <S.FInput type='password' placeholder='Пароль'/>
                <S.FInput type='password' placeholder='Повторите пароль'/>

                <NavLink className='btn_sign' to='/'>Зарегистрироваться</NavLink>
            </S.Form>
        </S.AuthBox>
    );
};

export default SignUp;