import './App.css';
import { useState } from "react";
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Footer from './Footer/Footer';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Header onSearchResults={setSearchResults}></Header>
      <Sidebar></Sidebar>
      <Main searchResults={searchResults}></Main>
      <Footer></Footer>
    </>
  )
};

export default App;
