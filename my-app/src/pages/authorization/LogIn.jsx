import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import * as S from './AuthorizationStyled';
import Logo from '../../components/img/f_logo.svg';

function LogIn() {
    Cookies.remove('token');

    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    const RegisterButton = () => {
        navigate('/sign')
    }

    const ButtonIn = () => {
        console.log(text);
        console.log(password);

        if (text === '123' && password === '123') {
            Cookies.set('token', 'valToken')
        }else{
            alert('Неверно введены данные');
        };

        navigate('/');
    };
    
    return(
        <S.AuthBox>
            <S.Form>
                <S.FLogo src={Logo}/>
                <S.FInput placeholder='Логин' type='text' value={text} onInput={(e) => setText(e.target.value)}/>
                <S.FInput placeholder='Пароль' type='password' value={password} onInput={(e) => setPassword(e.target.value)} />
                <S.BtnLog onClick={ButtonIn}>Войти</S.BtnLog>
                <S.BtnSign onClick={RegisterButton}>Зарегистрироваться</S.BtnSign>
            </S.Form>
        </S.AuthBox>
    );
};

export default LogIn;