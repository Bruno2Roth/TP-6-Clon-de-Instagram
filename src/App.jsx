import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import StoryBar from './components/StoryBar';
import Feed from './components/Feed';
import './App.css';

function App() {
  const [view, setView] = useState<'home' | 'profile'>('home');

  return (
    <div className="app-layout">
      <Header />
      <div className="main-content">
        <aside className="sidebar-left">
          {/* Al hacer click en el componente Profile de la sidebar, vamos a la vista perfil */}
          <div onClick={() => setView('profile')} style={{ cursor: 'pointer' }}>
            <Profile />
          </div>
          <hr className="divider" />
          <Navbar currentView={view} setView={setView} />
        </aside>
        
        <main className="content-area">
          {view === 'home' ? (
            <>
              <StoryBar />
              <Feed />
            </>
          ) : (
            <div className="profile-page-view">
              <div className="profile-header-expanded">
                <Profile /> {/* Reutilizamos el componente para la cabecera del perfil */}
              </div>
              
              <div className="profile-tabs">
                <span className="tab active">POSTS</span>
                <span className="tab">REELS</span>
                <span className="tab">TAGGED</span>
              </div>

              <div className="profile-posts-grid">
                {/* Simulamos las fotos propias del usuario */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <div key={item} className="profile-post-item">
                    <img src={`https://picsum.photos/500/500?random=${item}`} alt="User post" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;