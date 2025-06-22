import React from 'react';
import './App.css';
function Header() {
  return (
    <header style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      padding: '1rem', 
      textAlign: 'center', 
      textShadow: '4px 4px 8px rgba(214, 67, 67, 0.5)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      position: 'relative'
    }}>
      {/* Panda logo on the left */}
      <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '1rem', zIndex: 1 }}>
        <svg width="48" height="48" viewBox="0 0 48 48" style={{ borderRadius: '50%', background: '#fffbe7', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          {/* Panda ears */}
          <ellipse cx="14" cy="14" rx="6" ry="7" fill="#333" />
          <ellipse cx="34" cy="14" rx="6" ry="7" fill="#333" />
          {/* Panda face */}
          <circle cx="24" cy="24" r="16" fill="#fff" stroke="#333" strokeWidth="2"/>
          {/* Panda eye patches */}
          <ellipse cx="17" cy="25" rx="4" ry="5" fill="#333"/>
          <ellipse cx="31" cy="25" rx="4" ry="5" fill="#333"/>
          {/* Panda eyes */}
          <circle cx="17" cy="27" r="1.3" fill="#fff"/>
          <circle cx="31" cy="27" r="1.3" fill="#fff"/>
          <circle cx="17" cy="27" r="0.7" fill="#222"/>
          <circle cx="31" cy="27" r="0.7" fill="#222"/>
          {/* Panda nose */}
          <ellipse cx="24" cy="32" rx="1.5" ry="1" fill="#333"/>
          {/* Panda mouth */}
          <path d="M23 34 Q24 35 25 34" stroke="#333" strokeWidth="1" fill="none"/>
        </svg>
      </span>
      {/* Title centered absolutely */}
      <h1 style={{ 
        margin: 0, 
        position: 'absolute', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: 'max-content'
      }}>
        旅遊資訊平台
      </h1>
    </header>
  );
}

function Sidebar() {
  return (
    <aside style={{ width: '200px', backgroundColor: '#ecf0f1', padding: '1rem' }}>
      <ul>
        <li>首頁</li>
        <li>熱門景點</li>
        <li>行程推薦</li>
        <li>關於我們</li>
      </ul>
    </aside>
  );
}

function MainContent() {
  return (
    <main style={{ flex: 1, padding: '1rem', backgroundColor: '#fdfefe' }}>
      <h2>歡迎來到旅遊資訊平台</h2>
      <p>探索最熱門的景點與旅遊推薦！</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#bdc3c7', padding: '1rem', textAlign: 'center' }}>
      <p>© 2025 旅遊資訊平台. 保留所有權利.</p>
    </footer>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
