import { Routes, Route} from 'react-router-dom';
import Cookies from 'js-cookie';
import Container from './components/Container';
import LogIn from './pages/authorization/LogIn';
import NotFound from './pages/not-found/Not-found';
import SignUp from './pages/authorization/SignUp';
import ProtectedRoute from './protected-rout';
import MyTracks from './pages/my-tracks/MyTracks';
import IndieCharge from './pages/indie-charge/IndieCharge';
import DanceHits from './pages/dance-hits/DanceHits';
import PlaylistOfTheDay from './pages/playlist-of-the-day/PlaylistOfTheDay';

function AppRoutes() {

    const token = Cookies.get('token');
    console.log(Boolean(token));
    

    
   
    return(
        <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='/sign' element={<SignUp />}/>
            
            
            <Route element={<ProtectedRoute isAllowed={Boolean(token)}/>}>
                <Route path='/main' element={<Container/>} /> 
                <Route path='/myTracks' element={<MyTracks/>}/>
                <Route path='/indie' element={<IndieCharge/>}/>
                <Route path='/hits' element={<DanceHits/>}/>
                <Route path='/playlistDay' element={<PlaylistOfTheDay/>}/>
            </Route>

            <Route path='*' element={<NotFound />} /> 
        </Routes>
    )
};

export default AppRoutes;