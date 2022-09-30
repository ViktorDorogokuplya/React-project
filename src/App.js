// import logo from './logo.svg';
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





const App = () => {

    return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <HeaderContainer/>
              <Navbar/>
              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path="/dialogs" element={<DialogsContainer />}/>
                      <Route path="/profile" element={<ProfileContainer />}>
                        <Route path=":userId" element={<ProfileContainer />} />
                      </Route>
                      <Route path="/news" element={<News/>}/>
                      <Route path="/music" element={<Music/>}/>
                      <Route path="/settings" element={<Settings/>}/>
                      <Route path="/users" element={<UsersContainer/>}/>
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
      );
}

export default App;
