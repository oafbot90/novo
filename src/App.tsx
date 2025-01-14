import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecentHighlights } from './components/RecentHighlights';
import { Register } from './pages/Register';
import { Calendar } from './pages/Calendar';
import { Rankings } from './pages/Rankings';
import { LiveStreamingPage } from './pages/streaming';
import { TournamentRooms } from './pages/TournamentRooms';
import { News } from './pages/News';
import { Rules } from './pages/Rules';
import { Sponsors } from './pages/Sponsors';

function Home() {
  return (
    <>
      <Hero />
      <RecentHighlights />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/tournaments" element={<TournamentRooms />} />
            <Route path="/news" element={<News />} />
            <Route path="/streaming" element={<LiveStreamingPage />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/sponsors" element={<Sponsors />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}