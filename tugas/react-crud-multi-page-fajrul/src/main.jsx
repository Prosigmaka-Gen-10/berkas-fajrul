import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './index.css'
import App from './App'
import SongList from './pages/song/SongList'
import SongForm from './pages/song/SongForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/songs" replace />} />
          <Route path="songs" element={<SongList />} />
          <Route path="songs/form" element={<SongForm />} />
          <Route path="songs/form/:songId" element={<SongForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
