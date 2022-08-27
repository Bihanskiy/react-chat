import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import MainPage from '../pages/MainPage.js';
import ChatProvider from "../chatContext/ChatProvider.js"

import { Routes, Route } from 'react-router-dom';
import GoogleAuth from '../login/Login.js';
import { GuardedRoutePrivate, GuardedRouteLogin } from './GuardedRoutes';


function App() {

  return (
    <ErrorBoundary>
      <ChatProvider>
        <Routes>
          <Route path='/login' element={<GuardedRouteLogin />}>
            <Route path='/login' element={<GoogleAuth />} />
          </Route>
          <Route path='/react-chat' element={<GuardedRoutePrivate />}>
            <Route path='/react-chat' element={<MainPage />} />
          </Route>
        </Routes>
      </ChatProvider>
    </ErrorBoundary>

  );
}

export default App;
