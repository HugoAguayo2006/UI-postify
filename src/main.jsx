import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './views/Home.jsx';
import Profile from './views/Profile.jsx';
import Reels from './views/Reels.jsx';
import Buscar from './views/Buscar.jsx';
import Mensajes from './views/Mensajes.jsx';
import Post from './views/Post.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile/:userId" element={<Profile />} />
          <Route path="buscar" element={<Buscar />} />
          <Route path="mensajes" element={<Mensajes />} />
          <Route path="reels" element={<Reels />} />
          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
