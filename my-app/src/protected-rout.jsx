import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import Container from "./components/Container";
import MyTracks from "./pages/my-tracks/MyTracks";
import IndieCharge from "./pages/indie-charge/IndieCharge";
import DanceHits from "./pages/dance-hits/DanceHits";
import PlaylistOfTheDay from "./pages/playlist-of-the-day/PlaylistOfTheDay";

function ProtectedRouteMain({ redirectPath = "/" }) {
  if (!Cookies.get('token')) {
    alert('Нужно войти в свой аккаунт');
    return <Navigate to={redirectPath} replace />;
  };
  return <Container/>;
};

function ProtectedRouteMyTracks({redirectPath = "/" }) {
  if (!Cookies.get('token')) {
    alert('Нужно войти в свой аккаунт');
    return <Navigate to={redirectPath} replace />;
  };
  return <MyTracks/>
};

function ProtectedRouteIndieCharge({redirectPath = "/" }) {
  if (!Cookies.get('token')) {
    alert('Нужно войти в свой аккаунт');
    return <Navigate to={redirectPath} replace />;
  };
  return <IndieCharge/>
};

function ProtectedRouteDanceHits({redirectPath = "/" }) {
  if (!Cookies.get('token')) {
    alert('Нужно войти в свой аккаунт');
    return <Navigate to={redirectPath} replace />;
  };
  return <DanceHits/>
};

function ProtectedRoutePlaylistOfTheDay({redirectPath = "/" }) {
  if (!Cookies.get('token')) {
    alert('Нужно войти в свой аккаунт');
    return <Navigate to={redirectPath} replace />;
  };
  return <PlaylistOfTheDay/>
};

export {ProtectedRouteMain, ProtectedRouteMyTracks, ProtectedRouteIndieCharge, ProtectedRouteDanceHits, ProtectedRoutePlaylistOfTheDay};