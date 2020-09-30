import React from 'react';
import './App.css';
import BookList from './component/BookList';
import ThemeContextProvider  from './contexts/ThemeContext';
// import Navbar from './component/Navbar';
import Navbar1 from './component/Navbar1';
// import BookList1 from './component/BookList1';
import ThemeToggle from './component/ThemeToggle';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthProvider>
        {/* <Navbar/>
        <BookList1/> */}

        <Navbar1/>
        <BookList/>
        <ThemeToggle/>
        </AuthProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
