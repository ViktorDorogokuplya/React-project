import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login'
import {initializeApp} from "../src/redux/app-reducer";
import { connect } from 'react-redux';
import {useParams} from 'react-router-dom';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';

// const SettingsContainer = React.lazy(() => import("./components/Settings/Settings"));
// const NewsContainer = React.lazy(() => import("./components/News/News'"));
// const MusicContainer = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

       if (!this.props.initialized) {
        return <Preloader />
       }
    return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrapper-content'>
              <Suspense fallback={<div><Preloader /></div>}>
                  <Routes>
                      <Route path="/dialogs" element={<DialogsContainer />}/>
                      <Route path="/profile" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                      </Route>
                      <Route path="/news" element={<News/>}/>
                      <Route path="/music" element={<Music/>}/>
                      <Route path="/settings" element={<Settings/>}/>
                      <Route path="/users" element={<UsersContainer/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                  </Routes>
                  </Suspense>
              </div>
          </div>
      </BrowserRouter>
      );
}
}

function TakeParams(props){   
    return <App {...props} param={useParams()} />
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, {initializeApp}))(TakeParams);
