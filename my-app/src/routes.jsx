import { Routes, Route} from 'react-router-dom';
// import Cookies from 'js-cookie';
import Container from './components/Container';
import LogIn from './pages/authorization/LogIn';
import NotFound from './pages/not-found/Not-found';
import SignUp from './pages/authorization/SignUp';
import ProtectedRoute from './protected-rout';

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<LogIn />} /> 
            <Route path='/sign' element={<SignUp />}/>

            <Route
                path="/main"
                element={
                <ProtectedRoute>
                    <Container />
                </ProtectedRoute>
                }
            />

            <Route path='*' element={<NotFound />} /> 
        </Routes>
    )
};

export default AppRoutes;