import './App.css';

import './style/dark.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Compose from './components/Compose';
import Inbox from './components/Inbox';
import Group from './components/Group';
import Call from './components/Call';
import MySirkl from './components/MySirkl';
import Login from './components/Login';
import Main from './components/Main';
import Profile from './components/Profile';
import Notification from './components/Notification';
import { Provider } from 'react-redux';

import store from './store'


function App() {
  return (
    <div>
      <Provider store={store}>
      <Router>
        <main>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/main' element={<Main />} >
              <Route exact path="/main" element={<Profile />}/>
              <Route exact path='/main/compose' element={<Compose />} />
              <Route exact path='/main/inbox' element={<Inbox />} />
              <Route exact path='/main/group' element={<Group />} />
              <Route exact path='/main/call' element={<Call />} />
              <Route exact path='/main/mySirkl' element={<MySirkl />} />
              <Route exact path='/main/notification' element={<Notification />} />
            </Route>
          </Routes>
        </main>
      </Router>
       </Provider>
      </div>
  );
}

export default App;
