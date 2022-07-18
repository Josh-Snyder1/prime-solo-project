import './App.css';
import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import AllRoutes from '../AllRoutes/AllRoutes';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage(notUsed)/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import MyFavorites from '../MyFavorites/MyFavorites';
import AddRoute from '../AddRoutePage/AddRoutePage';
import RouteDetail from '../RouteDetail/RouteDetail';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch ({type: 'FETCH_FAVORITES'});
    dispatch ({ type: 'FETCH_ROUTES'})
  }, [dispatch]);

  return (
    <Router>
      <div >
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/homePage" />
          <Redirect exact from="/login" to="/landingPage" />

{/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/aboutPage"
          >
            <AboutPage />
          </Route>

{/* Landing page for logging user in */}
          <Route exact path="/landingPage">
            {user.id ?
              <Redirect to="/homePage" />
              :
              <LandingPage />
            }
          </Route>

{/* Registration page for user registration */}
          <Route exact path="/registration">
            {user.id ?
              <Redirect to="/homePage" />
              :
              <RegisterPage />
            }
          </Route>

          <Route exact path="/homePage">
            <HomePage />
          </Route>
          <Route exact path="/allRoutes">
            <AllRoutes />
          </Route>
          <Route exact path="/routeDetail/:id">
            <RouteDetail />
          </Route>
          <Route exact path="/infoPage">
            <InfoPage />
          </Route>

          <ProtectedRoute exact path="/myFavorites">
            <MyFavorites />
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/addRoute">
            <AddRoute />
          </ProtectedRoute>            
         

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
