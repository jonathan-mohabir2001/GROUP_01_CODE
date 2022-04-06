import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <Link to="/"> Home Page</Link>

      {'   |    '}

      <Link to="/coins">Coin information</Link>

      {'   |    '}

      <Link to="/form">Form</Link>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/coins" element={<Coins />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1> HOME PAGE JONATHAN SECTION, using sass, blockchain info </h1>
    </div>
  );
}

function Call() {
  return (
    <div>
      <h1> ZACK AXIOS API CALL to coingecko api </h1>
    </div>
  );
}

function Coins() {
  return (
    <div>
      <h1> JOYDEEP DISPLAYING COINS price data </h1>
    </div>
  );
}

function Form() {
  return (
    <div>
      <h1> Eliaf form component part for audince input </h1>
    </div>
  );
}

export default App;
