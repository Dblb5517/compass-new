import { useEffect, useState } from 'react';
import './App.css';
import FrequentlyAskedQuestions from './components/frequentlyAskedQuestions/FrequentlyAskedQuestions';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import { Routes, Route } from "react-router-dom";

function App() {

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  console.log(width,'size');

  return (
    <div className="App">
      <div className='content'>
        <Menu />
        <Routes>
          <Route path="/compass" index element={<Home />} />
          <Route path="/:url" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
