import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/search';

function App() {

  return (
    <>
      <div className="min-h-screen  text-[#f8f9fa] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-[#674188]">
          Search Username
        </h1>
        <Search />
      </div>
    </>
  );
}

export default App;