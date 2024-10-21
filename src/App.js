import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,action,comedy,horror,trending} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action}title='Action' isSmall/>
      <RowPost url={comedy}title='Comedy Movies' isSmall/>
      <RowPost url={horror}title='Horror Movies' isSmall/>
      <RowPost url={trending}title='Trending' isSmall/>
      <Footer/>
    </div>
  );
}

export default App;
