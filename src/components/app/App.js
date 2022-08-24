import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import MainPage from '../pages/MainPage.js';
import ChatProvider from "../chatContext/ChatProvider.js"

import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import GoogleAuth from '../login/Login.js';
function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, [navigate]);

  return (
    <ErrorBoundary>
      <ChatProvider>
        <Routes>
          <Route path='login' element={<GoogleAuth />} />
          <Route path='/*' element={<MainPage />} />
        </Routes>
      </ChatProvider>
    </ErrorBoundary>

  );
}

export default App;
