import { Routes, Route} from 'react-router-dom';
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
    return(
        <Routes>
            <Route path='/' element={<Container/>} /> 
            <Route path='/sign' element={<SignUp />}/>
            <Route path='/login' element={<LogIn />}/>
            <Route path='/hits' element={<ProtectedRoute><DanceHits/></ProtectedRoute>}/>
            <Route path='/playlistDay' element={<ProtectedRoute><PlaylistOfTheDay/></ProtectedRoute>}/>
            <Route path='/myTracks' element={<ProtectedRoute><MyTracks/></ProtectedRoute>}/>
            <Route path='/indie' element={<ProtectedRoute><IndieCharge/></ProtectedRoute>}/>

            <Route path='*' element={<NotFound />} /> 
        </Routes>
    )
};

export default AppRoutes;