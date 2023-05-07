import { Routes, Route} from 'react-router-dom';
import Container from './components/Container';
import LogIn from './pages/authorization/LogIn';
import NotFound from './pages/not-found/Not-found';
import SignUp from './pages/authorization/SignUp';
import * as P from './protected-rout';
import MyTracks from './pages/my-tracks/MyTracks';
import IndieCharge from './pages/indie-charge/IndieCharge';
import DanceHits from './pages/dance-hits/DanceHits';
import PlaylistOfTheDay from './pages/playlist-of-the-day/PlaylistOfTheDay';

function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Container/>} /> 
            <Route path='/sign' element={<SignUp />}/>
            <Route path='/login' element={<LogIn />}/>

            <Route element={<P.ProtectedRouteMyTracks/>}>
                <Route path='/myTracks' element={<MyTracks/>}/>
            </Route>

            <Route element={<P.ProtectedRouteIndieCharge/>}>
                <Route path='/indie' element={<IndieCharge/>}/>
            </Route>

            <Route element={<P.ProtectedRouteDanceHits/>}>
                <Route path='/hits' element={<DanceHits/>}/>
            </Route>

            <Route element={<P.ProtectedRoutePlaylistOfTheDay/>}>
                <Route path='/playlistDay' element={<PlaylistOfTheDay/>}/>
            </Route>

            <Route path='*' element={<NotFound />} /> 
        </Routes>
    )
};

export default AppRoutes;